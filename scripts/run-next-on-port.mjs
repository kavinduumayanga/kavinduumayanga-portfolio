import net from 'node:net';
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FIXED_PORT = 3000;
const DEV_DIST_DIR = '.next-dev';
const command = process.argv[2];
const extraArgs = process.argv.slice(3);
const validCommands = new Set(['dev', 'start']);

if (!validCommands.has(command)) {
  console.error(`Unsupported Next.js command: ${command ?? '(missing)'}`);
  process.exit(1);
}

if (extraArgs.includes('--port') || extraArgs.includes('-p')) {
  console.error(`Port is fixed to ${FIXED_PORT}. Remove any --port/-p overrides and try again.`);
  process.exit(1);
}

const repoRoot = path.dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const nextBin = path.join(repoRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

function ensurePortAvailable(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (error) => {
      server.close();
      reject(error);
    });

    server.once('listening', () => {
      server.close((closeError) => {
        if (closeError) {
          reject(closeError);
          return;
        }

        resolve();
      });
    });

    server.listen({
      host: '0.0.0.0',
      port,
      exclusive: true
    });
  });
}

function hasListeningProcess(port) {
  const result = spawnSync(
    'lsof',
    ['-nP', `-iTCP:${port}`, '-sTCP:LISTEN'],
    { encoding: 'utf8' }
  );

  if (result.error) {
    if (result.error.code === 'ENOENT') {
      return null;
    }

    throw result.error;
  }

  return result.status === 0 && result.stdout.trim().length > 0;
}

try {
  const portInUse = hasListeningProcess(FIXED_PORT);

  if (portInUse) {
    console.error(`Port ${FIXED_PORT} is already in use. Stop the process using it and rerun npm run ${command}.`);
    process.exit(1);
  }

  if (portInUse === null) {
    await ensurePortAvailable(FIXED_PORT);
  }
} catch (error) {
  if (error && typeof error === 'object' && 'code' in error && error.code === 'EADDRINUSE') {
    console.error(`Port ${FIXED_PORT} is already in use. Stop the process using it and rerun npm run ${command}.`);
    process.exit(1);
  }

  console.error(`Failed to validate port ${FIXED_PORT}.`);
  console.error(error);
  process.exit(1);
}

if (command === 'dev') {
  fs.rmSync(path.join(repoRoot, DEV_DIST_DIR), { recursive: true, force: true });
}

const child = spawn(
  process.execPath,
  [nextBin, command, '--port', String(FIXED_PORT), ...extraArgs],
  {
    cwd: repoRoot,
    env: {
      ...process.env,
      PORT: String(FIXED_PORT)
    },
    stdio: 'inherit'
  }
);

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on('SIGINT', forwardSignal);
process.on('SIGTERM', forwardSignal);

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

child.on('error', (error) => {
  console.error(`Failed to start Next.js ${command} on port ${FIXED_PORT}.`);
  console.error(error);
  process.exit(1);
});
