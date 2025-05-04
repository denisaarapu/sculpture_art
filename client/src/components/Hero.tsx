import { FC } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/208764/pexels-photo-208764.jpeg" 
          alt="Sculpture gallery interior" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#gallery">
              <a className="bg-accent hover:bg-accent-light text-white font-accent font-medium px-6 py-3 rounded-md transition duration-300 inline-block">
                {t("viewGallery")}
              </a>
            </Link>
            <Link href="/about">
              <a className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-accent font-medium px-6 py-3 rounded-md transition duration-300 inline-block">
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
