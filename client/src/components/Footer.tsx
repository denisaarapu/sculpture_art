import { FC } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="flex items-center mb-4">
                <Logo size="small" textColor="text-white" accentColor="text-accent" />
              </a>
            </Link>
            <p className="text-gray-400 text-sm">
              {t("footerTagline")}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-accent font-medium mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/">
                  <a className="hover:text-accent transition duration-200">
                    {t("home")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#gallery">
                  <a className="hover:text-accent transition duration-200">
                    {t("gallery")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-accent transition duration-200">
                    {t("about")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/newsletter">
                  <a className="hover:text-accent transition duration-200">
                    {t("newsletter")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-accent font-medium mb-4">
              {t("contactUs")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-accent"></i>
                <span>{t("address")}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-accent"></i>
                <a href="mailto:info@sculpturegallery.com" className="hover:text-accent transition duration-200">
                  info@sculpturegallery.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2 text-accent"></i>
                <a href="tel:+1234567890" className="hover:text-accent transition duration-200">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-accent font-medium mb-4">
              {t("followUs")}
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-accent-light bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition duration-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-accent-light bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition duration-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-accent-light bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-accent-light bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition duration-200">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-accent font-medium mb-2">
                {t("language")}
              </h5>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Sculpture Gallery. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
