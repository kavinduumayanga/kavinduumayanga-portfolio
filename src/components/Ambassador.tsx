import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Video, ExternalLink } from 'lucide-react';
export function Ambassador() {
  const sessions = [
  {
    title: 'Introduction to Cloud Computing with Azure',
    date: 'Oct 15, 2023',
    attendees: '120+',
    type: 'Virtual Session',
    image:
    'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400'
  },
  {
    title: 'DevOps Fundamentals Workshop',
    date: 'Nov 22, 2023',
    attendees: '85+',
    type: 'Hands-on Lab',
    image:
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Building CI/CD Pipelines with GitHub Actions',
    date: 'Jan 10, 2024',
    attendees: '150+',
    type: 'Webinar',
    image:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400'
  }];

  return (
    <section id="ambassador" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}>
            
            <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-blue-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Community & Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white flex items-center gap-4">
              Microsoft Learn Student Ambassador
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Empowering students through technology. Here are some of the
              sessions and workshops I've hosted to share knowledge about Cloud
              and DevOps.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sessions.map((session, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="glass-panel rounded-3xl overflow-hidden glass-panel-hover group flex flex-col">
            
              {/* Image Gallery Area */}
              <div className="relative h-48 overflow-hidden">
                <div
                className={`absolute inset-0 bg-gradient-to-br ${session.color} mix-blend-overlay z-10`} />
              
                <img
                src={session.image}
                alt={session.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
                <div className="absolute top-4 right-4 z-20 glass-panel px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium text-white">
                  <Video className="w-3 h-3" />
                  {session.type}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {session.title}
                </h3>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar className={`w-4 h-4 ${session.iconColor}`} />
                    {session.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Users className={`w-4 h-4 ${session.iconColor}`} />
                    {session.attendees} Attendees
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}