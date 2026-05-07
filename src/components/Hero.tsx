import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[ken-burns_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-6 font-semibold">
            EST. 1998 — AWARD WINNING STUDIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-display font-medium tracking-tight mb-8 leading-[0.9]"
        >
          Designing <br />
          <span className="font-serif italic font-light text-brand-white/90">Timeless</span> Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto text-brand-white/60 text-base md:text-lg mb-12 font-light leading-relaxed"
        >
          We craft immersive architectural experiences that redefine modern living. 
          Where brutalist structural integrity meets refined organic elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="luxury-button bg-brand-gold text-brand-charcoal border-none font-bold">
            <span className="relative z-10 flex items-center gap-2">
              Explore Portfolio <ArrowRight size={18} />
            </span>
          </button>
          <button className="luxury-button group">
            <span className="relative z-10">Our Philosophy</span>
            <div className="luxury-button-bg group-hover:translate-y-0" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-white/40">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
