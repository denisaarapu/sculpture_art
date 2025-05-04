import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Sculpture } from "@shared/schema";

const Slideshow: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false
  });

  const { data: sculptures, isLoading } = useQuery<Sculpture[]>({
    queryKey: ["/api/sculptures"],
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (isLoading) {
    return (
      <div className="bg-primary-light py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>
      </div>
    );
  }

  if (!sculptures || sculptures.length === 0) {
    return null;
  }

  return (
    <section className="bg-primary-light py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center text-white">
          {t("featuredSculptures")}
        </h2>
        
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {sculptures.map((sculpture) => (
              <div key={sculpture.id} className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_80%] lg:flex-[0_0_65%]">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={sculpture.imageUrl} 
                        alt={currentLanguage === "de" ? sculpture.titleDe : sculpture.title}
                        className="w-full h-64 md:h-full object-cover" 
                      />
                    </div>
                    <div className="p-6 md:w-1/2">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <h3 className="text-2xl font-heading font-bold mb-2">
                            {currentLanguage === "de" ? sculpture.titleDe : sculpture.title}
                          </h3>
                          <p className="text-gray-600 text-lg mb-2">
                            {sculpture.artist}, {sculpture.period}
                          </p>
                          <p className="text-gray-700">
                            {currentLanguage === "de" ? sculpture.descriptionDe : sculpture.description}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <p className="text-gray-600 mb-4">
                            <span className="font-medium">{t("material")}:</span> {sculpture.material}
                          </p>
                          <Button className="bg-accent hover:bg-accent-light text-white">
                            {t("viewDetails")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-4">
          <Button 
            variant="outline" 
            onClick={scrollPrev}
            className="h-12 w-12 rounded-full bg-white text-primary border-primary hover:bg-primary hover:text-white"
          >
            <i className="fas fa-chevron-left"></i>
          </Button>
          <div className="flex items-center space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-3 rounded-full transition-all ${
                  index === selectedIndex 
                    ? "w-8 bg-accent" 
                    : "w-3 bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
              />
            ))}
          </div>
          <Button 
            variant="outline" 
            onClick={scrollNext}
            className="h-12 w-12 rounded-full bg-white text-primary border-primary hover:bg-primary hover:text-white"
          >
            <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;