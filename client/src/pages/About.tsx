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
                  src="https://images.pexels.com/photos/1839337/pexels-photo-1839337.jpeg" 
                  alt="Gallery interior with sculptures" 
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
          

          
          {/* Categories Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-yellow-400 text-center">
              {t("categoriesSectionTitle")}
            </h3>
            <p className="text-gray-200 mb-8 text-center">
              {t("categoriesDescription")}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-3">
                  <i className="fas fa-university"></i>
                </div>
                <h4 className="text-lg font-heading font-semibold">
                  {t("categoryClassical")}
                </h4>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-3">
                  <i className="fas fa-palette"></i>
                </div>
                <h4 className="text-lg font-heading font-semibold">
                  {t("categoryRenaissance")}
                </h4>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-3">
                  <i className="fas fa-cubes"></i>
                </div>
                <h4 className="text-lg font-heading font-semibold">
                  {t("categoryModern")}
                </h4>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-3">
                  <i className="fas fa-vector-square"></i>
                </div>
                <h4 className="text-lg font-heading font-semibold">
                  {t("categoryContemporary")}
                </h4>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-3">
                  <i className="fas fa-shapes"></i>
                </div>
                <h4 className="text-lg font-heading font-semibold">
                  {t("categoryAbstract")}
                </h4>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-3">
                  <i className="fas fa-user"></i>
                </div>
                <h4 className="text-lg font-heading font-semibold">
                  {t("categoryFigurative")}
                </h4>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-3xl mb-4">
                <i className="fas fa-hammer"></i>
              </div>
              <h4 className="text-lg font-heading font-semibold mb-2">
                {t("materialTitle")}
              </h4>
              <p className="text-gray-300 text-sm">
                {t("materialDescription")}
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-3xl mb-4">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h4 className="text-lg font-heading font-semibold mb-2">
                {t("originsTitle")}
              </h4>
              <p className="text-gray-300 text-sm">
                {t("originsDescription")}
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 text-3xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h4 className="text-lg font-heading font-semibold mb-2">
                {t("periodsTitle")}
              </h4>
              <p className="text-gray-300 text-sm">
                {t("periodsDescription")}
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/#gallery">
              <a className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-accent font-medium rounded-md transition duration-300">
                {t("exploreCollection")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
