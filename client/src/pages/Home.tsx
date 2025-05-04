import { FC } from "react";
import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";

const Home: FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Hero />
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 text-center text-yellow-400">
              The History of Sculpture
            </h2>
            
            <div className="space-y-6 text-gray-200 text-lg">
              <p>
                Sculpture is one of humanity's oldest art forms, dating back to prehistoric times. 
                Early examples were created from stone, clay, and other natural materials, often 
                serving religious or ceremonial purposes.
              </p>
              
              <p>
                The classical period brought remarkable achievements in marble sculpting from 
                ancient Greece and Rome, establishing techniques and aesthetic principles that 
                would influence artists for centuries to come.
              </p>
              
              <p>
                Renaissance masters like Michelangelo and Donatello revived classical traditions 
                while introducing innovations in form and expression. From Baroque's dynamic 
                movement to modernism's abstraction and contemporary experimental approaches, 
                sculpture continues to evolve while maintaining its powerful ability to communicate 
                ideas through three-dimensional form.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
