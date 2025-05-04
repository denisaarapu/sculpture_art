import { FC } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex space-x-4 font-accent font-medium">
        <button
          onClick={() => setLanguage("en")}
          className={cn(
            "language-btn py-2 text-sm transition-all",
            currentLanguage === "en" ? "active-language border-b-2 border-accent" : ""
          )}
          data-lang="en"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("de")}
          className={cn(
            "language-btn py-2 text-sm transition-all",
            currentLanguage === "de" ? "active-language border-b-2 border-accent" : ""
          )}
          data-lang="de"
        >
          DE
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
