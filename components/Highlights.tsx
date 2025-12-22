
import React from 'react';
import { Language } from '../App';

interface HighlightsProps {
  lang: Language;
}

const Highlights: React.FC<HighlightsProps> = ({ lang }) => {
  const highlights = [
    {
      title: lang === 'TR' ? 'SHG AIRSHOW Hakkında' : 'About SHG AIRSHOW',
      desc: lang === 'TR' 
        ? 'Sivrihisar Hava Gösterileri’nin tarihçesi, vizyonu ve bugüne kadarki başarıları hakkında detaylı bilgi.'
        : 'Detailed information about the history, vision, and successes of Sivrihisar Airshow to date.',
      image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: lang === 'TR' ? 'SHM Hakkında' : 'About SHM',
      desc: lang === 'TR'
        ? 'Türkiye’nin ilk özel sivil hava parkı olan Sivrihisar Havacılık Merkezi’ni ve sunduğu imkanları keşfedin.'
        : 'Discover Sivrihisar Aviation Center, Turkey’s first private civil air park, and the facilities it offers.',
      image: 'https://images.unsplash.com/photo-1524850041227-615c3b09592c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: lang === 'TR' ? 'Spotter Kaydı' : 'Spotter Registration',
      desc: lang === 'TR'
        ? 'En iyi kareyi yakalamak isteyen fotoğraf tutkunları için özel kayıt süreci ve alan bilgileri.'
        : 'Special registration process and area information for photography enthusiasts who want to capture the best shot.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: lang === 'TR' ? 'Ulaşım' : 'Transportation',
      desc: lang === 'TR'
        ? 'Sivrihisar Havacılık Merkezi’ne nasıl gidilir? Yol tarifi, otopark bilgileri ve servis imkanları.'
        : 'How to get to Sivrihisar Aviation Center? Directions, parking information, and shuttle facilities.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-white dark:bg-gray-800/20 rounded-xl overflow-hidden shadow-xl border border-transparent hover:border-primary/30 transition-all duration-300"
          >
            <div className="overflow-hidden h-48">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-primary transition-colors uppercase leading-tight">{item.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
