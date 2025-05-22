import { FC, ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Load preferred language from localStorage on component mount
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
