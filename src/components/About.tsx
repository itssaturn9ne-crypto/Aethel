import { motion } from 'motion/react';

const stats = [
  { label: 'Years of Excellence', value: '25+' },
  { label: 'Completed Projects', value: '480' },
  { label: 'Design Awards', value: '12' },
  { label: 'Countries', value: '18' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-charcoal overflow-hidden pt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">
                ABOUT ETEL STUDIO
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
                Defining the <span className="font-serif italic">Future</span> of Modern Heritage.
              </h2>
              <p className="text-brand-white/60 text-lg leading-relaxed font-light mb-8">
                Based in London and Tokyo, Aethel is an elite architectural firm 
                dedicated to creating spaces that evoke emotion through pure form 
                and tactile materiality.
              </p>
              <p className="text-brand-white/50 text-base leading-relaxed font-light">
                Our philosophy centers on the dialogue between the built environment 
                and the natural landscape. We don't just build structures; we curate 
                lifestyle habitats that stand as timeless monuments of sophisticated 
                engineering and artistic vision.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-1"
                >
                  <span className="text-3xl md:text-4xl font-display text-brand-gold">{stat.value}</span>
                  <p className="text-[10px] uppercase tracking-widest text-brand-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
                alt="Studio Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating accent card */}
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-xl hidden md:block max-w-[280px]">
              <p className="text-brand-gold font-serif italic text-xl mb-4">"Architecture is a visual art, and the buildings speak for themselves."</p>
              <div className="h-[1px] w-12 bg-brand-gold/30 mb-4" />
              <span className="text-[10px] uppercase tracking-widest text-brand-white/60">Julia Von Aethel, Founder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
