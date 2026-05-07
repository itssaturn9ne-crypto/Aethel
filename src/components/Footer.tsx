import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
             <div className="text-4xl font-display font-semibold tracking-tighter text-brand-white">
              AETHEL<span className="text-brand-gold">.</span>
            </div>
            <p className="max-w-xs text-brand-white/40 text-sm leading-relaxed font-light">
              Crafting architectural legacies since 1998. 
              We transform ambitious visions into timeless structures.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Studio</h4>
            <ul className="space-y-4">
               <li><a href="#" className="text-brand-white/60 hover:text-brand-gold transition-colors text-sm font-light">About Us</a></li>
               <li><a href="#" className="text-brand-white/60 hover:text-brand-gold transition-colors text-sm font-light">The Process</a></li>
               <li><a href="#" className="text-brand-white/60 hover:text-brand-gold transition-colors text-sm font-light">Careers</a></li>
               <li><a href="#" className="text-brand-white/60 hover:text-brand-gold transition-colors text-sm font-light">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Newsletter</h4>
            <p className="text-brand-white/40 text-xs leading-relaxed font-light mb-4">
              Monthly insights from the world of luxury design.
            </p>
            <div className="flex gap-4">
               <input
                 type="email"
                 placeholder="Your Email"
                 className="flex-1 bg-transparent border-b border-white/20 py-2 text-xs focus:outline-none focus:border-brand-gold transition-colors"
               />
               <button className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
           <p className="text-brand-white/20 text-[10px] uppercase tracking-widest">
             &copy; {new Date().getFullYear()} Aethel Studio. All Rights Reserved.
           </p>
           <div className="flex gap-8">
             <a href="#" className="text-brand-white/20 hover:text-brand-gold transition-colors text-[10px] uppercase tracking-widest">Privacy Policy</a>
             <a href="#" className="text-brand-white/20 hover:text-brand-gold transition-colors text-[10px] uppercase tracking-widest">Terms of Service</a>
           </div>
        </div>
      </div>

      {/* Massive Background Logo */}
      <div className="absolute bottom-[-10%] left-[-10%] text-[25vw] font-display font-bold text-white/5 select-none pointer-events-none tracking-tighter opacity-10">
        AETHEL
      </div>
    </footer>
  );
}
