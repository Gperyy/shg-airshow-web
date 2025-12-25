
import React from 'react';
import { Language } from '../App';

interface AboutShowProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const AboutShow: React.FC<AboutShowProps> = ({ lang, onNavigate }) => {
  // Yıllar ve ilgili web siteleri
  const pastYears = [
    { year: "2025", url: "https://www.shgairshow2025.com/" },
    { year: "2024", url: "https://www.shgairshow2024.com/" },
    { year: "2023", url: "https://www.shgairshow2023.com/" },
    { year: "2022", url: "https://shmaero.wixsite.com/shg2022"},
    { year: "2021", url: "https://shmaero.wixsite.com/shgairshow2021"},
    { year: "2020", url: "https://www.shgairshow2020.com/"},
    { year: "2019", url: "https://shmaero.wixsite.com/shg2019"},
    { year: "2018", url: "https://shmaero.wixsite.com/shg2018"},
    { year: "2017", url: "https://shmaero.wixsite.com/shg-airshow-2017"},
    { year: "2015", url: "https://shmaero.wixsite.com/shg2015"},
  ];

  const content = {
    TR: {
      title: "Hakkında",
      tagline: "Sivrihisar Hava Gösterileri",
      archiveTitle: "GEÇMİŞ YILLAR",
      mainText: [
        "Sivrihisar Havacılık Kulübü Derneği tarafından, her yıl Sivrihisar Havacılık Merkezi Necati Artan Tesisleri’nde uluslararası boyutta düzenlenen “Sivrihisar Hava Gösterileri” / “SHG Airshow”, her yaştan havacılık sevdalısına hitap eden dev bir organizasyondur. Havacılığın önemini vurgularken, özellikle gençlere ve çocuklara havacılık hakkında bilgi edinmek için birçok fırsat sunmaktadır. İlk kez 2015 yılında düzenlenen ve her yıl daha da büyüyerek uluslararası alanda adını duyuran bu etkinlik, bugün dünya havacılık takvimlerinde 'SHG Airshows' adıyla yer alan küresel bir marka haline gelmiştir.",
        "Misyonumuz, ülkemizde sportif ve genel havacılığın gelişmesine katkı sağlamak, M.S.Ö. Hava ve Uzay Müzesi’ne ait tarihi değeri olan uçakları havacılık tutkunlarıyla buluşturmak ve havacılık kültürünü arttırmaktır. Her yıl on binlerce kişiyi bir araya getiren organizasyonumuz, seyircilerine keyifli ve heyecanlı anlar yaşatırken havacılık mirasını gelecek nesillere aktarmayı görev edinmiştir.",
        "İki gün boyunca devam eden gösterilerde dünyaca ünlü pilotlar, jet uçakları, akrobasi timleri ve tarihi hava taşıtları nefes kesen performanslar sergilemektedir. Planörden paraşüt atlayışlarına kadar uzanan geniş yelpazede sunulan bu görsel şölen, M.S.Ö. Hava ve Uzay Müzesi envanterindeki uçaklarla havacılık tarihine canlı bir pencere açmaktadır.",
        "Organizasyonumuz sadece bir gösteri değil, nominations zamandan yabancı firmaların, uçuş okullarının ve üniversitelerin yer aldığı bir 'Havacılık Fuarı' kimliği taşımaktadır. 100 kişilik gönüllü ekibimizle yürüttüğümüz bu süreç, havacılık tutkusunu paylaşanları birleştirirken, bölgedeki yerel işletmelere sağladığı ekonomik katkıyla da geniş bir sosyal ekosistem yaratmaktadır."
      ],
      back: "ANA SAYFAYA DÖN",
      explore: "SİTEYE GİT"
    },
    EN: {
      title: "About",
      tagline: "OUR HERITAGE IN THE SKIES",
      archiveTitle: "PAST YEARS",
      archiveSubtitle: "Explore the milestones of our aviation passion.",
      mainText: [
        "Organized annually by the Sivrihisar Aviation Club Association at the Necati Artan Facilities on an international scale, 'Sivrihisar Airshow' / 'SHG Airshow' is a massive organization that appeals to aviation enthusiasts of all ages. It emphasizes the importance of aviation while offering numerous learning opportunities, especially for youth and children. First held in 2015 and growing every year, it has become a global brand listed in international airshow calendars as 'SHG Airshows'.",
        "Our mission is to contribute to the development of sporting and general aviation in Turkey, to bring aviation enthusiasts together with historic aircraft from the M.S.Ö. Air and Space Museum, and to increase aviation culture. Bringing together tens of thousands of people every year, our organization provides exciting moments while fulfilling the duty of passing this heritage to future generations.",
        "During the two-day event, world-famous display pilots perform exciting flight shows with historic planes, jets, aerobatic teams, and helicopters. This visual feast, ranging from gliders to parachute jumps, provides a living window into aviation history with aircraft from the M.S.Ö. Air and Space Museum inventory.",
        "Our organization is not just a show, but also an 'Aviation Fair' where international companies, flight schools, and universities promote themselves. Carried out by a volunteer team of 100 people, this process unites aviation enthusiasts and creates a broad social ecosystem through economic contributions to local businesses."
      ],
      back: "BACK TO HOME",
      explore: "VISIT SITE"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img 
          src="/images/shg-seyirci.jpg"
          className="w-full h-full object-cover grayscale opacity-80"
          alt="Aviation Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        {/* Narrative Text */}
        <div className="space-y-8 mb-32">
          {content.mainText.map((paragraph, idx) => (
            <p 
              key={idx} 
              className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Past Years Archive Area */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-24 mb-32">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-secondary dark:text-white mb-2 uppercase tracking-tight">
              {content.archiveTitle}
            </h2>
            <p className="text-gray-400 font-medium text-sm tracking-wide">
              {content.archiveSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pastYears.map((item) => (
              <a
                key={item.year}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-10 bg-gray-50 dark:bg-white/5 rounded-2xl hover:bg-primary transition-all duration-500 text-center overflow-hidden border border-transparent hover:border-primary shadow-sm hover:shadow-xl"
              >
                <span className="block text-4xl font-black text-secondary dark:text-white group-hover:text-white transition-colors duration-300">
                  {item.year}
                </span>
                
                {/* Subtle Hover Action Label */}
                <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                   <span className="text-[9px] font-black text-white tracking-[0.3em] uppercase">{content.explore}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        </div>
      </div>
    </div>
  );
};

export default AboutShow;
