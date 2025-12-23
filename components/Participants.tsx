import React from 'react';
import { Language } from '../App';

interface ParticipantsProps {
  lang: Language;
}

const Participants: React.FC<ParticipantsProps> = ({ lang }) => {
  const translations = {
    title: lang === 'TR' ? (
      <>SHG AIRSHOW 2026 <br /> <span className="text-primary">Katılımcıları</span></>
    ) : (
      <>SHG AIRSHOW 2026 <br /> <span className="text-primary">Participants</span></>
    ),
    subtitle: lang === 'TR' ? "(alfabetik sırayla)" : "(in alphabetical order)",
    cta: {
        title: lang === 'TR' ? "Tarihe Tanıklık Et" : "Witness the History",
        desc: lang === 'TR' 
            ? "Biletler tükenmeden yerini ayır, havacılık tutkusunu en önden yaşa."
            : "Reserve your spot before tickets sell out, experience the passion of aviation from the front row.",
        button: lang === 'TR' ? "BİLET AL" : "BUY TICKETS"
    }
  };

  const seminUrl = "https://www.seminozturk.com/";
  const msomuseumUrl = "https://msomuseum.com/";

  const participants = [
    {
      name: "ACROMACH",
      desc: lang === 'TR' 
        ? "Acromach Gökyüzü Dansçıları - Hava Akrobasi Grubu SHG Airshow 2026'da!"
        : "Acromach Sky Dancers - Aerial Aerobatics Group at SHG Airshow 2026!",
      image: "/images/acromach.jpg",
      url: seminUrl
    },
    {
      name: "ANTONOV AN-2",
      desc: lang === 'TR' 
        ? "M.S.Ö. Hava ve Uzay Müzesi envanterindeki 1957 model Antonov AN-2 dünya çapında birçok askeri ve sivil kullanıcı tarafından kullanıldı. Dünyanın en büyük çift kanatlı uçağı olan Annie / Annushka SHG Airshow'da!"
        : "The 1957 Antonov AN-2 in the M.S.Ö. Air and Space Museum inventory has been used by many military and civilian users worldwide. Annie / Annushka, the world's largest biplane, is at SHG Airshow!",
      image: "/images/antonov-an2.jpg",
      url: "https://msomuseum.com/antonov-an-2/"
    },
    {
      name: "AVIAT HUSKY A-1B",
      desc: lang === 'TR' 
        ? "Pist dışındaki arazilere ve kısa mesafelere rahatlıkla iniş-kalkış yapabilme özelliğine sahip olan Husky, seyircilere keyifli anlar yaşatmaya devam ediyor."
        : "With its ability to take off and land comfortably on off-runway terrain and short distances, the Husky continues to provide enjoyable moments for the audience.",
      image: "/images/aviat-husky.jpg"
    },
    {
      name: "BELL UH-1H (HUEY)",
      desc: lang === 'TR' 
        ? "\"Vietnam Gazisi\" UH-1H ön kısmında, hizmet verdiği vurucu tim ile özleşen sarı renkli büyük bir “ARI” figürü taşımaktadır. Dünyanın en ünlü helikopterlerinden biri olan Huey SHG Airshow'da!"
        : "The \"Vietnam Veteran\" UH-1H carries a large yellow \"BEE\" figure on its front, identified with the strike team it served. One of the world's most famous helicopters, the Huey, is at SHG Airshow!",
      image: "/images/uh1h.jpg",
      url: "https://msomuseum.com/bell-uh-1h-huey/"
    },
    {
      name: "BOEING STEARMAN A75N1",
      desc: lang === 'TR' 
        ? "Türkiye’nin uçar durumdaki en yaşlı çift kanatlı tayyareleri olan 1940 and 1943 Boeing Stearman A75N1, seyircileri adeta zaman makinesinde bir yolculuğa çıkaracak."
        : "The 1940 and 1943 Boeing Stearman A75N1, Turkey's oldest airworthy biplanes, will take the audience on a journey through time.",
      image: "/images/boeing-stearman.jpg",
      url: "https://msomuseum.com/a75n1-pt-17-boeing-stearman/"
    },
    {
      name: "CESSNA 172",
      desc: lang === 'TR' 
        ? "Yılların eskimeyen, dünyanın en meşhur uçaklarından Cessna 172, SHG Airshow'da!"
        : "The timeless Cessna 172, one of the world's most famous aircraft, is at SHG Airshow!",
      image: "/images/cessna172.jpg",
      url: "https://shm.aero/"
    },
    {
      name: "CESSNA 195A BUSINESSLINER",
      desc: lang === 'TR' 
        ? "M.S.Ö. Hava ve Uzay Müzesi'nin koleksiyonundan 1950 model Cessna 195 A Businessliner güzelliği ile SHG Airshow'da sizleri büyüleyecek."
        : "The 1950 Cessna 195 A Businessliner from the M.S.Ö. Air and Space Museum collection will enchant you with its beauty at SHG Airshow.",
      image: "/images/cessna-business.jpg",
      url: "https://msomuseum.com/cessna-195-a-businessliner/"
    },
    {
      name: "DE HAVILLAND DH.82 TIGER MOTH",
      desc: lang === 'TR' 
        ? "9 dalda Oscar ödülü alan “The English Patient” (İngiliz Hasta) filminde yer alan T7471 seri no'lu Tiger Moth SHG Airshow'da sizlerle!"
        : "The Tiger Moth with serial number T7471, featured in the 9-time Oscar-winning film \"The English Patient,\" is with you at SHG Airshow!",
      image: "/images/tiger-moth.jpg",
      url: "https://msomuseum.com/de-havilland-dh.82-tiger-moth/"
    },
    {
      name: "DOUGLAS DC-3 “TURKISH DELIGHT”",
      desc: lang === 'TR' 
        ? "M.S.Ö. Hava ve Uzay Müzesi'nin Türk havacılığına kazandırdığı 1940 Model DC-3 \"Turkish Delight\", 2017 yılında tam bir world turunu başarıyla tamamladı ve \"dünyayı dolaşan en yaşlı uçak\" ünvanını aldı. Bu muhteşem klasik hava aracı SHG Airshow'da sizlerle!"
        : "The 1940 Douglas DC-3 \"Turkish Delight,\" brought to Turkish aviation by the M.S.Ö. Air and Space Museum, successfully completed a full world tour in 2017 and earned the title of \"oldest aircraft to travel the world.\" This magnificent classic is at SHG Airshow!",
      image: "/images/dc3.jpg",
      url: "https://msomuseum.com/douglas-dc-3-turkish-delight/"
    },
    {
      name: "HAVACI KADINLAR DERNEĞİ",
      desc: lang === 'TR' 
        ? "Asil vazifesi, “Türk Kadını’nın” havacılık kültürünü artırmak olan, havacılığa merak duyan bütün kadınlara yardımcı olmayı ve kadın uçucu sayısını mümkün olduğu kadar artırmayı hedefleyen Havacı Kadınlar Derneği, SHG Airshow'da!"
        : "The Women Aviators Association, whose noble mission is to increase the aviation culture of \"Turkish Women,\" helping all women interested in aviation and aiming to increase the number of female flyers as much as possible, is at SHG Airshow!",
      image: "/images/havaci-kadinlar-dernegi.png",
      url: "https://www.havacikadinlar.org/"
    },
    {
      name: "LOKANTA SENAN",
      desc: lang === 'TR' 
        ? "Enfes lezzetleri ve zengin menüsüyle Lokanta Senan SHG Airshow'da!"
        : "Lokanta Senan, with its delicious tastes and rich menu, is at SHG Airshow!",
      image: "/images/lokanta-senan-.jpg",
      url: "https://lokantasenan.com/"
    },
    {
      name: "MACH AVIATION",
      desc: lang === 'TR' 
        ? "1989 yılından bu yana sivil ve genel havacılık sektöründe hizmet veren Mach Havacılık SHG Airshow'da."
        : "Mach Aviation, serving the civil and general aviation sector since 1989, is at SHG Airshow.",
      image: "/images/mach-aviation.jpg",
      url: "https://www.mach.aero/"
    },
    {
      name: "M.S.Ö. HAVA ve UZAY MÜZESİ",
      desc: lang === 'TR' 
        ? "Türkiye'nin Uçan Havacılık Müzesi M.S.Ö. Hava ve Uzay Müzesi, world havacılığı açısından tarihi değere sahip pek çok uçağı ile SHG Airshow'da!"
        : "Turkey's Flying Aviation Museum, M.S.Ö. Air and Space Museum, is at SHG Airshow with many aircraft of historical value for world aviation!",
      image: "/images/mso-air-space-museum.png",
      url: msomuseumUrl
    },
    {
      name: "M.S.Ö. HAVA ve UZAY MÜZESİ DÜKKAN",
      desc: lang === 'TR' 
        ? "M.S.Ö. Hava ve Uzay Müzesi’nin tarihi uçaklarıyla bağlantılı eşsiz kıyafet ve aksesuarlarıyla DÜKKAN, SHG Airshow'da!"
        : "The SHOP, with its unique clothing and accessories related to the historic aircraft of the M.S.Ö. Air and Space Museum, is at SHG Airshow!",
      image: "/images/dukkan.jpg",
      url: "https://shop.msomuseum.com/"
    },
    {
      name: "NORTH AMERICAN MUSTANG P-51 D",
      desc: lang === 'TR' 
        ? "Ülkemize M.S.Ö. Hava ve Uzay Müzesi tarafından kazandırılan Ferocious Frankie Türkiye'deki ilk ve tek North American P-51 Mustang olma özelliğiyle SHG Airshow'da!"
        : "Ferocious Frankie, brought to our country by the M.S.Ö. Air and Space Museum, is at SHG Airshow as the first and only North American P-51 Mustang in Turkey!",
      image: "/images/mustang-p51d.jpg",
      url: "https://msomuseum.com/north-american-p-51d-mustang-ferocious-frankie/"
    },
    {
      name: "NORTH AMERICAN T-6G TEXAN",
      desc: lang === 'TR' 
        ? "M.S.Ö. Hava ve Uzay Müzesi’nin kazandırdığı Türkiye’nin ilk sivil T-6G Harvard uçağı SHG Airshow’da mükemmel bir gösteri için huzurlarınızda olacak."
        : "Turkey's first civilian T-6G Harvard aircraft, brought by the M.S.Ö. Air and Space Museum, will be before you for a perfect show at SHG Airshow.",
      image: "/images/t6-texan.jpg",
      url: "https://msomuseum.com/north-american-t-6g-happy-hour/"
    },
    {
      name: "NORTH AMERICAN T-28B TROJAN",
      desc: lang === 'TR' 
        ? "\"Tricycle İniş Takımına\" sahip ilk ABD eğitim uçağı olan Trojan, savaş uçağı olarak da kullanılmış olup, SHG Airshow'da seyircileri büyüleyecek."
        : "The Trojan, the first US trainer with \"Tricycle Landing Gear,\" was also used as a combat aircraft and will enchant the audience at SHG Airshow.",
      image: "/images/t28b-trojan.jpg",
      url: "https://msomuseum.com/t-28b_trojan/"
    },
    {
      name: "SUPERMARINE SPITFIRE MK.IX",
      desc: lang === 'TR' 
        ? "22.777 adet üretilen ve bugün \"uçar vaziyette\" sadece 30 adet kalan Spitfire uçaklarından Mk.9 TE517 SHG Airshow'da Şanlı Hava Kuvvetleri'mizin \"Kare Fors\" amblemi ile donatılmış şekilde izleyicilerle buluşuyor!"
        : "One of the 22,777 built, with only about 30 remaining airworthy today, the Spitfire Mk.9 TE517 meets the audience at SHG Airshow, adorned with our Glorious Air Force's \"Square Roundel\"!",
      image: "/images/spitfire-mk-9.jpg",
      url: "https://msomuseum.com/spitfire-mk-9/"
    },
    {
      name: "Pars ŞENER",
      desc: lang === 'TR' 
        ? "Pars Şener, ilk hava gösterisi deneyimini 4 yaşında, dedesi ve Türkiye’nin ilk profesyonel akrobasi pilotu Ali İsmet Öztürk ile birlikte SHG Airshow 2024’te yaşadı. Şimdi ise SHG Airshow 2026’da, sürpriz gösterisiyle izleyicilerin karşısında olacak! 12 yıl sonra, 18 yaşına geldiğinde ilk solo gösterisini yapacak olmanın heyecanını da bugünden yaşıyor."
        : "Pars Şener experienced his first air show at the age of 4 with his grandfather and Turkey's first professional aerobatic pilot, Ali İsmet Öztürk, at SHG Airshow 2024. Now, at SHG Airshow 2026, he will be before the audience with a surprise show! He already feels the excitement of performing his first solo show in 12 years when he turns 18.",
      image: "/images/pars-sener.jpg",
      url: seminUrl
    },
    {
      name: "Semin ÖZTÜRK ŞENER",
      desc: lang === 'TR' 
        ? "Türkiye’nin ilk profesyonel kadın akrobasi pilotu Semin Öztürk Şener Muhteşem Akrobasi Gösterisi ile SHG Airshow 2026'da nefeslerinizi kesecek!"
        : "Turkey's first professional female aerobatic pilot, Semin Öztürk Şener, will take your breath away with a magnificent aerobatic display at SHG Airshow 2026!",
      image: "/images/semin-ozturk-sener.jpg",
      url: seminUrl
    },
    {
      name: "VECİHİ XIV (14)",
      desc: lang === 'TR' 
        ? "Türkiye'mizin \"İlk Sertifikalı Uçağı\" Vecihi XIV (14) replikası, M.S.Ö. Hava ve Uzay Müzesi ile Sivrihisar Havacılık Kulübü'nün çalışmasıyla SHG Airshow 2026'da!"
        : "The replica of our country's \"First Certified Aircraft,\" Vecihi XIV (14), is at SHG Airshow 2026 through the collaboration of the M.S.Ö. Air and Space Museum and Sivrihisar Aviation Club!",
      image: "/images/vecihi-14.jpg",
      url: "https://msomuseum.com/vecihi-XIV-14/"
    },
    {
      name: "YENİ MENEKŞE",
      desc: lang === 'TR' 
        ? "\"Efsanevi Mor Menekşe\" Mak Teknik'in özverili çalışmaları sonrası \"Yeni Menekşe\" adını aldı ve Semin Öztürk Şener ile göklerde yeni serüvenlerine devam ediyor."
        : "The \"Legendary Purple Violet,\" renamed \"New Violet\" after Mak Teknik's dedicated work, continues its adventures in the skies with Semin Öztürk Şener.",
      image: "/images/yeni-menekse.jpg",
      url: seminUrl
    }
  ];

  return (
    <div className="py-16 font-display overflow-hidden">
      {/* Page Header */}
      <div className="text-center mb-20 relative px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white dark:text-white leading-tight tracking-tighter mb-4">
          {translations.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-bold tracking-tight text-sm md:text-base italic">
          {translations.subtitle}
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 grid gap-12 lg:gap-16">
        {participants.map((p, index) => (
          <div 
            key={index} 
            className="group relative bg-white/5 dark:bg-gray-800/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 texture-bg border border-white/5 hover:border-primary/30"
          >
            <div className={`lg:flex ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side with HUD Design */}
              <div className="lg:w-1/2 xl:w-2/5 relative overflow-hidden h-72 lg:h-auto min-h-[350px]">
                <img 
                  alt={p.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100" 
                  src={p.image}
                  loading="lazy"
                />
                
                {/* HUD Overlay Elements (Targeting) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                  <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-primary/80"></div>
                  <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-primary/80"></div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-primary/80"></div>
                  <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-primary/80"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-primary/20"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-px bg-primary/20"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary/40 rounded-full animate-pulse"></div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10">
                {/* Background Index Number */}
                <div className="absolute top-0 right-8 text-[120px] md:text-[180px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700 leading-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <div className="relative z-20">
                  <h3 className="text-3xl md:text-5xl font-black text-white dark:text-white mb-6 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                    {p.name}
                  </h3>
                  
                  <p className="text-gray-400 dark:text-gray-400 text-lg leading-relaxed max-w-xl font-medium border-l-2 border-primary/20 pl-6 group-hover:border-primary transition-colors">
                    {p.desc}
                  </p>
                  
                  <div className="mt-10 flex items-center">
                    {p.url ? (
                      <a 
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs font-black tracking-[0.2em] text-white group/btn hover:text-primary transition-colors"
                      >
                        <span className="w-10 h-0.5 bg-primary group-hover/btn:w-16 transition-all duration-300"></span>
                        {lang === 'TR' ? 'Detaylı Bilgi' : 'Details'}
                      </a>
                    ) : (
                      <button className="flex items-center gap-3 text-xs font-black tracking-[0.2em] text-white group/btn cursor-default">
                        <span className="w-10 h-0.5 bg-primary group-hover/btn:w-16 transition-all duration-300"></span>
                        {lang === 'TR' ? 'Detaylı Bilgi' : 'Details'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </section>

      {/* Modern Technical CTA */}
      <section className="mt-32 px-4 max-w-5xl mx-auto">
        <div className="relative py-24 px-8 bg-primary text-white text-center overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              {translations.cta.title}
            </h2>
            <p className="text-white/80 font-bold tracking-widest text-xs md:text-sm mb-12 uppercase">
              {translations.cta.desc}
            </p>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
              }}
              className="inline-block bg-white text-primary font-black py-5 px-16 rounded-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.2em] text-sm"
            >
              {translations.cta.button}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participants;