import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import NewsletterForm from "@/components/NewsletterForm";

const Newsletter: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="newsletter" className="py-16 bg-black text-white min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-white">
            {t("stayUpdatedTitle")}
          </h2>
          <p className="text-white mb-8">
            {t("stayUpdatedDescription")}
          </p>
          
          <NewsletterForm />
          
          <div className="mt-12 text-center">
            <Link href="/">
              <div className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-accent font-medium rounded-md transition duration-300 cursor-pointer">
                {t("backToHome")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
