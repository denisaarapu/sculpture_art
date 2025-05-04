import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

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
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <img 
                  src="/buddha.png" 
                  alt="Buddha sculpture" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 md:w-1/2">
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
