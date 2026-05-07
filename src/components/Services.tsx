import { motion } from 'motion/react';
import { Paintbrush, Home, Box, Share2, Search, Building2 } from 'lucide-react';

const services = [
  {
    title: 'Architectural Design',
    description: 'Conceptualizing and blueprinting high-end residential and commercial structures with a focus on sustainable innovation.',
    icon: Building2,
  },
  {
    title: 'Interior Design',
    description: 'Curating bespoke interiors that blend comfort with luxury, using artisanal materials and custom furnishings.',
    icon: Paintbrush,
  },
  {
    title: '3D Visualization',
    description: 'Immersive photorealistic renders and virtual walk-throughs to live the project before the first stone is laid.',
    icon: Box,
  },
  {
    title: 'Luxury Renovation',
    description: 'Breathtaking transformations of historic and contemporary spaces into modern architectural masterpieces.',
    icon: Home,
  },
  {
    title: 'Project Consultation',
    description: 'Expert guidance on zoning, structural integrity, and aesthetic direction for ambitious design ventures.',
    icon: Search,
  },
  {
    title: 'Global Delivery',
    description: 'Collaborating with elite craftsmen worldwide to execute complex designs across international borders.',
    icon: Share2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">OUR SERVICES</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium">Bespoke Architectural <br/><span className="text-brand-gold italic font-serif font-light">Solutions.</span></h2>
          </div>
          <p className="max-w-xs text-brand-white/50 text-sm leading-relaxed">
            From initial sketch to site handover, we provide a seamless, 
            premium experience tailored to visionary clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-charcoal p-12 group hover:bg-brand-gold/5 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-brand-gold transition-colors duration-500">{service.title}</h3>
                <p className="text-brand-white/40 text-sm leading-relaxed font-light mb-8 max-w-[80%]">
                  {service.description}
                </p>
                <button className="text-[10px] uppercase tracking-widest text-brand-gold font-bold flex items-center gap-2 group/btn">
                  Learn More 
                  <span className="w-8 h-[1px] bg-brand-gold transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                </button>
              </div>
              
              {/* Background accent */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none">
                <service.icon size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
