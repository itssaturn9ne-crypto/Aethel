import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aethel didn't just build our headquarters; they built our company's new identity. The attention to material dialogue is unparalleled.",
    author: "Maximilian Rossi",
    role: "CEO, Rossi Global",
  },
  {
    quote: "The residential design team managed to capture light in ways I never thought possible in the Swiss climate. Pure magic.",
    author: "Elena Sorokin",
    role: "Art Curator",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-charcoal relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
              What our <br/><span className="font-serif italic text-brand-white/80">elite</span> clientele <br/>says.
            </h2>
            <div className="mt-12 hidden lg:block">
              <div className="w-24 h-24 rounded-full border border-brand-gold/20 flex items-center justify-center">
                <Quote className="text-brand-gold" size={32} />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-12 rounded-2xl relative"
              >
                <p className="text-xl md:text-2xl font-serif italic text-brand-white/90 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div>
                   <p className="text-brand-white font-display font-semibold uppercase tracking-widest text-sm">{t.author}</p>
                   <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em]">{t.role}</p>
                </div>
                
                {/* Number indicator */}
                <span className="absolute top-8 right-8 text-brand-white/5 font-display text-6xl font-bold">0{i+1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
