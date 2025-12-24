import React from "react";
import { Language } from "../App";

interface TicketsProps {
  lang: Language;
}

const Tickets: React.FC<TicketsProps> = ({ lang }) => {
  const translations = {
    title: lang === "TR" ? "BİLETLER" : "TICKETS",
    subtitle:
      lang === "TR"
        ? "Gökyüzünün limitlerini zorlayan gösteriye yerinizi ayırtın. Unutulmaz bir deneyim için biletinizi şimdi alın!"
        : "Reserve your spot for the show that pushes the limits of the sky. Get your ticket now for an unforgettable experience!",
    faqTitle:
      lang === "TR" ? "Sıkça Sorulan Sosular" : "Frequently Asked Questions",
    faqSubtitle:
      lang === "TR"
        ? "Biletlerle ilgili aklınıza takılan her şey burada."
        : "Everything you need to know about tickets is right here.",
    addToCart: lang === "TR" ? "Biletini Al" : "Add to Cart",
  };

  const pricing = [
    {
      title: lang === "TR" ? "Bilet" : "Ticket",
      price: "880₺",
      features:
        lang === "TR"
          ? [
              "Gösteri alanına tam gün erişim",
              "Stant alanlarını ziyaret etme fırsatı",
              "Yiyecek ve içecek stantları",
            ]
          : [
              "Full day access to the show area",
              "Opportunity to visit static displays",
              "Food and beverage stands",
            ],
    },
    {
      title: lang === "TR" ? "VIP Bilet" : "VIP Ticket",
      price: "7000₺",
      features:
        lang === "TR"
          ? [
              "Tüm Genel Giriş avantajları",
              "Özel VIP izleme alanı",
              "Ücretsiz ikramlar ve içecekler",
              "Pilotlarla tanışma fırsatı",
              "Özel otopark alanı",
            ]
          : [
              "All General Admission benefits",
              "Exclusive VIP viewing area",
              "Complimentary snacks and drinks",
              "Opportunity to meet the pilots",
              "Private parking area",
            ],
    },
  ];

  const faqs = [
    {
      q:
        lang === "TR"
          ? "Biletleri iade edebilir miyim?"
          : "Can I refund my tickets?",
      a:
        lang === "TR"
          ? "Etkinliğe 7 günden az bir süre kalana kadar bilet iadesi yapılabilmektedir. İade koşulları hakkında detaylı bilgi için lütfen destek ekibimizle iletişime geçin."
          : "Ticket refunds can be made up to 7 days before the event. Please contact our support team for detailed information on refund conditions.",
    },
    {
      q:
        lang === "TR"
          ? "Organizasyon alanına yiyecek ve içecek getirebilir miyim?"
          : "Can I bring food and drinks to the organisation area?",
      a:
        lang === "TR"
          ? "Organizasyon alanına dışarıdan yiyecek ve içecek getirilmesi uygundur. Alan içerisinde çok sayıda yiyecek ve içecek standı bulunmaktadır."
          : "Bringing outside food and beverages into the event area is permitted. There are numerous food and beverage stands within the area.",
    },
    {
      q:
        lang === "TR"
          ? "Çocuklar için yaş sınırı var mı?"
          : "Is there an age limit for children?",
      a:
        lang === "TR"
          ? "Etkinliğimiz her yaşa açıktır. 6 yaş ve altındaki çocuklar için giriş ücretsizdir."
          : "Our event is open to all ages. Entry is free for children aged 6 and under.",
    },
    {
      q: lang === "TR" ? "Otopark mevcut mu?" : "Is parking available?",
      a:
        lang === "TR"
          ? "Evet, etkinlik alanı çevresinde ücretsiz otopark alanları mevcuttur. VIP bilet sahipleri için özel otopark alanı bulunmaktadır."
          : "Yes, free parking areas are available around the event site. There is a private parking area for VIP ticket holders.",
    },
  ];

  return (
    <div className="font-display">
      {/* Hero Section with Video Background */}
      <section className="relative py-32 lg:py-48 text-center text-white overflow-hidden  mb-16 min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-secondary">
          <iframe
            src="https://streamable.com/e/q7yglm?autoplay=1&muted=1&loop=1&nocontrols=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90"></div>
          {/* Video yüklenmezse fallback görseli */}
          <div
            className="absolute inset-0 z-[-1] bg-cover bg-center"
            style={{ backgroundImage: "url(/images/semin-pilot.jpg)" }}
          ></div>
        </div>
        <div className="relative z-20 container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase drop-shadow-2xl">
            {translations.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-lg">
            {translations.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pricing.map((tier, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-10 rounded-3xl bg-white dark:bg-gray-900/50 border-2 border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-500 hover:border-primary hover:bg-primary/[0.03] dark:hover:bg-primary/[0.05] hover:-translate-y-2"
              >
                <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {tier.title}
                </h3>
                <p className="text-5xl font-black mb-8 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {tier.price}
                </p>
                <ul className="space-y-5 mb-12 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4">
                      <span className="material-icons text-2xl text-primary group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-semibold leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95">
                  {translations.addToCart}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-900/30 py-24 rounded-[3rem] mb-16 border border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white tracking-tight uppercase">
              {translations.faqTitle}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-bold opacity-70">
              {translations.faqSubtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/80 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all shadow-sm"
              >
                <h4 className="font-black text-lg mb-4 text-gray-900 dark:text-white uppercase leading-tight flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
