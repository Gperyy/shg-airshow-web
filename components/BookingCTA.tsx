
import React from 'react';

const BookingCTA: React.FC = () => {
  return (
    <section className="py-32 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
          Yerini Şimdiden Ayırt!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
          Bu unutulmaz deneyimi kaçırma. Biletler tükenmeden yerini garantile ve gökyüzündeki bu muhteşem şölene tanıklık et.
        </p>
        <a 
          href="#" 
          className="inline-block bg-primary text-white font-bold py-5 px-14 rounded-md hover:bg-red-700 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 text-lg"
        >
          Bilet Al
        </a>
      </div>
    </section>
  );
};

export default BookingCTA;
