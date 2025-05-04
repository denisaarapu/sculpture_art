import { FC } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-primary text-white relative overflow-hidden h-screen">
      <div className="absolute inset-0 z-0 flex justify-end items-center overflow-hidden">
        <img 
          src="/attached_assets/david-michelangelo.png"
          alt="David by Michelangelo" 
          className="h-full object-contain opacity-70 ml-auto max-w-none"
          style={{ minHeight: "130%", objectPosition: "center right" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-lg">
            {t("heroTitle")}
          </h1>
          <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#gallery">
              <a className="bg-yellow-400 hover:bg-yellow-500 text-black font-accent font-medium px-6 py-3 rounded-md transition duration-300 inline-block">
                {t("viewGallery")}
              </a>
            </Link>
            <Link href="/about">
              <a className="bg-transparent border-2 border-white hover:bg-white hover:text-black font-accent font-medium px-6 py-3 rounded-md transition duration-300 inline-block">
                {t("learnMore")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
