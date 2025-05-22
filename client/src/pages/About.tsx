import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import CategorySlideshow from "@/components/CategorySlideshow.tsx";
import SculptureViewer from "@/components/SculptureViewer.tsx";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center">
            {t("aboutTitle")}
          </h2>
          
          <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden mb-10">
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-shrink-0 md:w-1/2">
                <img 
                  src="/buddha.png" 
                  alt="Buddha sculpture" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 md:w-1/2">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-yellow-400">
                  {t("ourMissionTitle")}
                </h3>
                <p className="text-gray-200 mb-4">
                  {t("ourMissionP1")}
                </p>
                <p className="text-gray-200">
                  {t("ourMissionP2")}
                </p>
              </div>
            </div>
          </div>
          
          {/* Categories Section - Slideshow */}
          <CategorySlideshow>
            {/* Classical */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <i className="fas fa-university"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                {t("categoryClassical")}
              </h4>
              <div className="mt-4">
                <SculptureViewer
                  imageSrc="/venus-sculpture.png"
                  title={t("categoryClassical")}
                  description={t("venusDescription")}
                  alt="Venus of Arles sculpture"
                  className="h-64 mx-auto"
                />
                <p className="text-base mt-4 text-gray-200">
                  {t("venusDescription")}
                </p>
              </div>
            </div>
            
            {/* Renaissance */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <i className="fas fa-palette"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                {t("categoryRenaissance")}
              </h4>
              <div className="mt-4">
                <SculptureViewer
                  imageSrc="/david-sculpture.png"
                  title={t("categoryRenaissance")}
                  description={t("davidDescription")}
                  alt="Michelangelo's David sculpture"
                  className="h-64 mx-auto"
                />
                <p className="text-base mt-4 text-gray-200">
                  {t("davidDescription")}
                </p>
              </div>
            </div>
            
            {/* Modern */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <i className="fas fa-cubes"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                {t("categoryModern")}
              </h4>
              <div className="mt-4">
                <SculptureViewer
                  imageSrc="/flute-sculpture.png"
                  title={t("categoryModern")}
                  description={t("fluteDescription")}
                  alt="Modern flute player sculpture"
                  className="h-64 mx-auto"
                />
                <p className="text-base mt-4 text-gray-200">
                  {t("fluteDescription")}
                </p>
              </div>
            </div>
            
            {/* Contemporary */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <i className="fas fa-vector-square"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                {t("categoryContemporary")}
              </h4>
              <div className="mt-4">
                <SculptureViewer
                  imageSrc="/horse-sculpture.png"
                  title={t("categoryContemporary")}
                  description={t("horseDescription")}
                  alt="Abstract horse sculpture"
                  className="h-64 mx-auto"
                />
                <p className="text-base mt-4 text-gray-200">
                  {t("horseDescription")}
                </p>
              </div>
            </div>
            
            {/* Abstract */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <i className="fas fa-shapes"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                {t("categoryAbstract")}
              </h4>
              <div className="mt-4">
                <SculptureViewer
                  imageSrc="/face-sculpture.png"
                  title={t("categoryAbstract")}
                  description={t("faceDescription")}
                  alt="Surreal face sculpture"
                  className="h-64 mx-auto"
                />
                <p className="text-base mt-4 text-gray-200">
                  {t("faceDescription")}
                </p>
              </div>
            </div>
            
            {/* Figurative */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <div className="text-yellow-400 text-5xl mb-4">
                <i className="fas fa-user"></i>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-4">
                {t("categoryFigurative")}
              </h4>
              <div className="mt-4">
                <SculptureViewer
                  imageSrc="/wall-figure-sculpture.png"
                  title={t("categoryFigurative")}
                  description={t("wallFigureDescription")}
                  alt="Figure emerging from wall sculpture"
                  className="h-64 mx-auto"
                />
                <p className="text-base mt-4 text-gray-200">
                  {t("wallFigureDescription")}
                </p>
              </div>
            </div>
          </CategorySlideshow>
          
          <div className="text-center">
            <Link href="/newsletter">
              <div className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-accent font-medium rounded-md transition duration-300 cursor-pointer">
                {t("exploreCollection")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
