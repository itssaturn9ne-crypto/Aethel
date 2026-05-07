import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    title: 'The Evolution of Vertical Living in Urban Deserts',
    category: 'Innovation',
    date: 'Dec 12, 2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Minimalism as a Counter-Culture Movement',
    category: 'Philosophy',
    date: 'Nov 28, 2023',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1974',
  },
  {
    title: 'Bespoke Materials: The Soul of Modern Heritage',
    category: 'Materials',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
  },
];

export default function Blog() {
  return (
    <section className="py-32 bg-brand-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-20">
          <div>
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">INSIGHTS</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium">Editorial Archive</h2>
          </div>
          <button className="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-brand-white/40 hover:text-brand-gold transition-colors duration-500 group">
            View All Essays <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-brand-charcoal/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-brand-gold font-bold">
                  {article.category}
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-brand-white/40">{article.date}</p>
                <h3 className="text-xl md:text-2xl font-display font-medium leading-tight group-hover:text-brand-gold transition-colors duration-500">
                  {article.title}
                </h3>
                <div className="w-12 h-[1px] bg-brand-gold/30 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
