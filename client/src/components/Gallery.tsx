import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sculpture } from "@shared/schema";

const Gallery: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const [selectedFolder, setSelectedFolder] = useState("marble");
  const [visibleItems, setVisibleItems] = useState(6);

  const folders = [
    { id: "marble", name: t("marbleFolder") },
    { id: "bronze", name: t("bronzeFolder") },
    { id: "contemporary", name: t("contemporaryFolder") },
    { id: "classical", name: t("classicalFolder") },
  ];

  const { data: sculptures, isLoading } = useQuery<Sculpture[]>({
    queryKey: ["/api/sculptures"],
  });

  const filteredSculptures = sculptures?.filter(
    (sculpture) => sculpture.folder === selectedFolder
  ) || [];

  const displayedSculptures = filteredSculptures.slice(0, visibleItems);

  const selectFolder = (folder: string) => {
    setSelectedFolder(folder);
    setVisibleItems(6); // Reset visible items when changing folders
  };

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, filteredSculptures.length));
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center">
          {t("galleryTitle")}
        </h2>

        {/* Folder Navigation */}
        <div className="mb-10">
          <h3 className="text-lg font-accent font-medium mb-4 text-primary">
            {t("categories")}
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => selectFolder(folder.id)}
                className={cn(
                  "folder-btn px-4 py-2 rounded-md text-sm font-accent transition duration-200 border border-primary",
                  selectedFolder === folder.id 
                    ? "bg-primary text-white" 
                    : "text-primary hover:bg-gray-100"
                )}
              >
                {folder.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className="gallery-item rounded-lg overflow-hidden shadow-md bg-white">
                <Skeleton className="h-72 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedSculptures.map((sculpture) => (
              <div key={sculpture.id} className="gallery-item rounded-lg overflow-hidden shadow-md bg-white">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={sculpture.imageUrl} 
                    alt={currentLanguage === "de" ? sculpture.titleDe : sculpture.title} 
                    className="w-full h-full object-cover gallery-image hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {currentLanguage === "de" ? sculpture.titleDe : sculpture.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {currentLanguage === "de" ? sculpture.descriptionDe : sculpture.description}
                  </p>
                  <button 
                    className="text-accent hover:text-accent-light text-sm font-accent font-medium inline-flex items-center"
                  >
                    {t("viewDetails")}
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {displayedSculptures.length < filteredSculptures.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              variant="outline"
              className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md font-accent font-medium transition duration-300"
            >
              {t("loadMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
