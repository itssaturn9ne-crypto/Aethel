import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { MapPin, Calendar, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'The Glass Monolith',
    location: 'Swiss Alps',
    year: '2023',
    service: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Aethel Tower',
    location: 'Tokyo, Japan',
    year: '2022',
    service: 'Mixed Use',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Warm Sanctuary',
    location: 'Austin, TX',
    year: '2021',
    service: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974',
  },
  {
    title: 'Oceanic Retreat',
    location: 'Malibu, CA',
    year: '2024',
    service: 'Renovation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
  },
];

export default function Projects() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      horizontalSectionRef.current,
      { translateX: 0 },
      {
        translateX: '-75vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="projects" className="bg-brand-charcoal overflow-hidden">
      <div ref={triggerRef}>
        <div className="h-screen flex flex-col justify-center px-6 md:px-12 relative">
          <div className="mb-20">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">PORTFOLIO</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium">Selected Works</h2>
          </div>

          <div ref={horizontalSectionRef} className="flex gap-12 w-[180vw]">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="relative min-w-[30vw] md:min-w-[40vw] group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/0 transition-colors duration-500" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="glass-card p-4 rounded-xl space-y-2 max-w-[200px]">
                      <div className="flex items-center gap-2 text-brand-gold text-[10px] uppercase tracking-widest font-bold">
                        <MapPin size={10} /> {project.location}
                      </div>
                      <h3 className="text-xl font-display font-medium text-brand-white">{project.title}</h3>
                    </div>
                    <div className="glass-card p-4 rounded-xl flex flex-col gap-2">
                       <div className="flex items-center gap-2 text-brand-white/60 text-[10px]"><Calendar size={10} /> {project.year}</div>
                       <div className="flex items-center gap-2 text-brand-white/60 text-[10px]"><Layers size={10} /> {project.service}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* View All Card */}
            <div className="min-w-[30vw] md:min-w-[40vw] flex items-center justify-center">
              <button className="group flex flex-col items-center gap-6">
                <div className="w-32 h-32 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold transition-all duration-500">
                   <span className="text-brand-gold group-hover:text-brand-charcoal transition-colors duration-500 uppercase tracking-widest text-[10px] font-bold">View<br/>All</span>
                </div>
                <span className="text-brand-white/40 uppercase tracking-[0.2em] text-[10px]">Excellence consistently delivered</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
