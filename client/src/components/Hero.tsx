import { FC, useState, useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const Hero: FC = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: "/attached_assets/david-michelangelo.png", alt: "David by Michelangelo" },
    { src: "/attached_assets/sculpture1.png", alt: "Classical Sculpture" },
    { src: "/attached_assets/sculpture2.png", alt: "Ancient Sculpture" }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="bg-primary text-white relative overflow-hidden h-screen">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={image.src}
            alt={image.alt} 
            className="w-full h-full object-cover opacity-95"
            style={{ objectPosition: "top center" }}
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-0"></div>
      
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-lg">
            {t("heroTitle")}
          </h1>
          <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <div className="bg-yellow-400 hover:bg-yellow-500 text-black font-accent font-medium px-6 py-3 rounded-md transition duration-300 inline-block cursor-pointer">
                {t("viewGallery")}
              </div>
            </Link>
          </div>
          
          {/* Slideshow navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? "bg-yellow-400" : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
