import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ y: '-100vh' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[10000] bg-brand-charcoal flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden mb-8">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-display font-semibold tracking-tighter text-brand-white"
            >
              AETHEL<span className="text-brand-gold">.</span>
            </motion.div>
          </div>
          
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-brand-gold origin-left"
              style={{ scaleX: percent / 100 }}
            />
          </div>
          
          <div className="mt-4 flex items-center gap-2">
             <span className="text-brand-gold text-[10px] font-bold tracking-widest">{percent}%</span>
             <span className="text-brand-white/40 text-[10px] uppercase tracking-widest">Designing Legacy</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
