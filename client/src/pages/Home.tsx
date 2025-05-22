import { FC } from "react";
import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero.tsx";

const Home: FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Hero />
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center text-yellow-400">
              {t("sculptureHistoryTitle")}
            </h2>
            
            <div className="space-y-6 text-gray-200 text-lg">
              <p>
                {t("sculptureHistoryP1")}
              </p>
              
              <p>
                {t("sculptureHistoryP2")}
              </p>
              
              <p>
                {t("sculptureHistoryP3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
