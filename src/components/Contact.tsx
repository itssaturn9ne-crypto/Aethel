import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info & Map */}
          <div className="space-y-12">
            <div>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">GET IN TOUCH</span>
                <h2 className="text-4xl md:text-6xl font-display font-medium leading-[0.9] mb-8">
                Let’s build <br/>your <span className="font-serif italic text-brand-white/80">legacy.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-brand-white/40 flex items-center gap-2"><MapPin size={10} /> Headquarters</p>
                <p className="text-sm font-light text-brand-white">12 Savile Row, Mayfair<br/>London W1S 3PQ, UK</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-brand-white/40 flex items-center gap-2"><Phone size={10} /> Call Us</p>
                <p className="text-sm font-light text-brand-white">+44 (0) 20 7946 0123</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-brand-white/40 flex items-center gap-2"><Mail size={10} /> General Inquiry</p>
                <p className="text-sm font-light text-brand-white">studio@aethel.com</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-brand-white/40">Socials</p>
                <div className="flex gap-4">
                  <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-white/60 hover:text-brand-gold hover:border-brand-gold transition-all"><Instagram size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-white/60 hover:text-brand-gold hover:border-brand-gold transition-all"><Linkedin size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-white/60 hover:text-brand-gold hover:border-brand-gold transition-all"><Twitter size={14} /></a>
                </div>
              </div>
            </div>

            {/* Map Placeholder or Real Map */}
            <div className="aspect-[16/10] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
              {hasValidKey ? (
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={{ lat: 51.5126, lng: -0.1407 }}
                    defaultZoom={15}
                    mapId="DEMO_MAP_ID"
                    style={{ width: '100%', height: '100%' }}
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    disableDefaultUI={true}
                    styles={[{ features: 'all', element: 'all', stylers: [{ invert_lightness: true }, { saturation: -100 }, { lightness: -20 }] }]}
                  >
                   <AdvancedMarker position={{ lat: 51.5126, lng: -0.1407 }}>
                      <Pin background="#C8A97E" borderColor="#111" glyphColor="#111" />
                    </AdvancedMarker>
                  </Map>
                </APIProvider>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-brand-charcoal">
                    <MapPin className="text-brand-gold mb-4" size={32} />
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">London Head Office</p>
                    <p className="text-brand-white/40 text-[10px] uppercase tracking-widest">Map module requires API key in Secrets</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-8 md:p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-white/40">Your Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-gold"
                    placeholder="E.g. Julian Wright"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-white/40">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-gold"
                    placeholder="E.g. Julian@wright.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40">Project Type</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-white/80 appearance-none cursor-pointer">
                  <option className="bg-brand-charcoal">Ultra Luxury Residential</option>
                  <option className="bg-brand-charcoal">High-End Commercial</option>
                  <option className="bg-brand-charcoal">Interior Design Refresh</option>
                  <option className="bg-brand-charcoal">Bespoke Renovation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-white/40">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-brand-gold transition-colors text-brand-gold resize-none"
                  placeholder="Tell us about your extraordinary vision..."
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="luxury-button w-full bg-brand-gold text-brand-charcoal border-none font-bold py-4 group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {formState === 'idle' && <>Send Inquiry <Send size={18} /></>}
                    {formState === 'sending' && <>Communicating...</>}
                    {formState === 'success' && <>Inquiry Sent Successfully</>}
                  </span>
                  <div className="luxury-button-bg group-hover:translate-y-0" />
                </button>
              </div>
            </form>

            <AnimatePresence>
               {formState === 'success' && (
                 <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-brand-charcoal z-20 flex flex-col items-center justify-center text-center p-8"
                 >
                    <div className="w-20 h-20 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold mb-6">
                      <Send size={32} />
                    </div>
                    <h3 className="text-3xl font-display font-medium mb-4">Message Received.</h3>
                    <p className="text-brand-white/60 text-sm max-w-xs leading-relaxed">Our primary consultant will contact you within 24 hours to schedule an initial briefing.</p>
                    <button onClick={() => setFormState('idle')} className="mt-8 text-[10px] uppercase tracking-widest text-brand-gold border-b border-brand-gold/30">Send another</button>
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
