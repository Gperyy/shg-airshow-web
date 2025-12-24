import React, { useState } from 'react';
import { Language } from '../App';

interface ProgramItem {
  time: string;
  aircraft: string;
  duration: string;
}

interface ShowProgramProps {
  lang: Language;
}

const ShowProgram: React.FC<ShowProgramProps> = ({ lang }) => {
  const [activeDay, setActiveDay] = useState(0);

  const programs: Record<number, ProgramItem[]> = {
    0: [
      { time: '10:00 - 10:30', aircraft: lang === 'TR' ? 'F-16 "Solo Türk"' : 'F-16 "Solo Türk"', duration: lang === 'TR' ? '30 dk' : '30 min' },
      { time: '11:00 - 11:45', aircraft: lang === 'TR' ? '"Türk Yıldızları"' : '"Turkish Stars"', duration: lang === 'TR' ? '45 dk' : '45 min' },
      { time: '12:00 - 12:20', aircraft: 'P-51 Mustang', duration: lang === 'TR' ? '20 dk' : '20 min' },
      { time: '13:00 - 13:30', aircraft: 'HÜRKUŞ', duration: lang === 'TR' ? '30 dk' : '30 min' },
      { time: '14:00 - 14:20', aircraft: lang === 'TR' ? 'ATAK Helikopteri' : 'ATAK Helicopter', duration: lang === 'TR' ? '20 dk' : '20 min' },
      { time: '15:00 - 15:30', aircraft: lang === 'TR' ? 'Jandarma Çelik Kanatlar' : 'Gendarmerie Steel Wings', duration: lang === 'TR' ? '30 dk' : '30 min' },
    ],
    1: [
      { time: '10:00 - 10:20', aircraft: 'T-6 Texan', duration: lang === 'TR' ? '20 dk' : '20 min' },
      { time: '11:00 - 11:30', aircraft: 'HÜRJET', duration: lang === 'TR' ? '30 dk' : '30 min' },
      { time: '12:00 - 12:45', aircraft: lang === 'TR' ? '"Türk Yıldızları"' : '"Turkish Stars"', duration: lang === 'TR' ? '45 dk' : '45 min' },
      { time: '13:30 - 14:00', aircraft: 'F-16 "Solo Türk"', duration: lang === 'TR' ? '30 dk' : '30 min' },
      { time: '14:30 - 14:50', aircraft: 'Pitts S-2B', duration: lang === 'TR' ? '20 dk' : '20 min' },
      { time: '15:30 - 16:00', aircraft: lang === 'TR' ? 'Final Geçişi' : 'Final Fly-by', duration: lang === 'TR' ? '30 dk' : '30 min' },
    ]
  };

  const days = [
    lang === 'TR' ? '19 Eylül Cumartesi' : '19 September Saturday',
    lang === 'TR' ? '20 Eylül Pazar' : '20 September Sunday'
  ];

  const translations = {
    title: lang === 'TR' ? 'GÖSTERİ PROGRAMI' : 'SHOW PROGRAM',
    tableHeader: {
      time: lang === 'TR' ? 'Saat' : 'Time',
      aircraft: lang === 'TR' ? 'Hava Aracı' : 'Aircraft',
      duration: lang === 'TR' ? 'Süre' : 'Duration',
    },
    actions: {
      print: lang === 'TR' ? 'Listeyi Yazdır' : 'Print List',
      download: lang === 'TR' ? 'PDF Olarak İndir' : 'Download as PDF',
    }
  };

  return (
    <section id="program" className="py-12 md:py-20 font-display min-h-[60vh]">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-16 animate-in fade-in slide-in-from-top-4 duration-700 uppercase">
          {translations.title}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Sekme Butonları */}
        <div className="flex justify-center border-b border-gray-300 dark:border-gray-700 mb-12 overflow-x-auto no-scrollbar whitespace-nowrap">
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-6 sm:px-12 py-4 text-sm sm:text-base font-bold border-b-4 transition-all duration-300 uppercase tracking-widest ${
                activeDay === idx
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-primary/70'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Program Tablosu */}
        <div className="bg-white dark:bg-gray-900/40 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-800 backdrop-blur-xl mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[600px]">
              <thead className="bg-gray-50 dark:bg-black/40">
                <tr>
                  <th className="p-5 md:p-8 font-extrabold text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] w-[30%]">{translations.tableHeader.time}</th>
                  <th className="p-5 md:p-8 font-extrabold text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] w-[50%]">{translations.tableHeader.aircraft}</th>
                  <th className="p-5 md:p-8 font-extrabold text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] w-[20%]">{translations.tableHeader.duration}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {programs[activeDay].map((item, idx) => (
                  <tr key={idx} className="hover:bg-primary/[0.02] dark:hover:bg-primary/[0.05] transition-colors group">
                    <td className="p-5 md:p-8 whitespace-nowrap text-gray-900 dark:text-gray-100 font-bold tabular-nums text-sm md:text-base align-middle overflow-hidden text-ellipsis">
                      {item.time}
                    </td>
                    <td className="p-5 md:p-8 whitespace-nowrap text-gray-900 dark:text-gray-100 font-extrabold group-hover:text-primary transition-colors text-sm md:text-base align-middle overflow-hidden text-ellipsis">
                      {item.aircraft}
                    </td>
                    <td className="p-5 md:p-8 whitespace-nowrap text-gray-600 dark:text-gray-400 font-bold text-sm align-middle">
                      {item.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-extrabold py-4 px-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all active:scale-95 uppercase text-xs tracking-widest border border-gray-200 dark:border-gray-700">
            <span className="material-icons text-xl">print</span>
            {translations.actions.print}
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white font-extrabold py-4 px-10 rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95 uppercase text-xs tracking-widest">
            <span className="material-icons text-xl">file_download</span>
            {translations.actions.download}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowProgram;