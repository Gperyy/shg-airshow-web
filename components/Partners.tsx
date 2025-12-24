import React from "react";
import { Language } from "../App";

interface PartnersProps {
  lang: Language;
}

const Partners: React.FC<PartnersProps> = ({ lang }) => {
  const content = {
    TR: {
      title: "Çözüm Ortakları",
      description: "Airshow'u destekleyen kurumlar",
    },
    EN: {
      title: "Partners",
      description: "Organizations supporting the Airshow",
    },
  };

  const currentContent = content[lang];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-primary">
          {currentContent.title}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          {currentContent.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your partner logos/cards here */}
          <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              Partner content coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;