import { FC, useCallback, useEffect, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

interface CategorySlideshowProps {
  children: ReactNode[];
}

const CategorySlideshow: FC<CategorySlideshowProps> = ({ children }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false
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

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-heading font-semibold mb-6 text-yellow-400 text-center">
        {t("categoriesSectionTitle")}
      </h3>
      <p className="text-gray-200 mb-8 text-center">
        {t("categoriesDescription")}
      </p>
      
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4 md:flex-[0_0_80%] lg:flex-[0_0_65%]">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-4">
        <Button 
          variant="outline" 
          onClick={scrollPrev}
          className="h-12 w-12 rounded-full bg-gray-800 text-white border-yellow-400 hover:bg-gray-700"
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
                  ? "w-8 bg-yellow-400" 
                  : "w-3 bg-gray-700 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
        <Button 
          variant="outline" 
          onClick={scrollNext}
          className="h-12 w-12 rounded-full bg-gray-800 text-white border-yellow-400 hover:bg-gray-700"
        >
          <i className="fas fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default CategorySlideshow;