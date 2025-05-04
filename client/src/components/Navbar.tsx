import { FC, useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const Navbar: FC = () => {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigationLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/newsletter", label: t("newsletter") },
  ];

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <Logo textColor="text-white" size="small" />
              </div>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <div className="flex space-x-8 font-accent">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                    location === link.href 
                      ? "text-yellow-400" 
                      : "text-white hover:text-yellow-400"
                  )}>
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
            
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden bg-gray-900 ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 font-accent">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={cn(
                "block px-3 py-2 text-base font-medium cursor-pointer",
                location === link.href 
                  ? "text-yellow-400" 
                  : "text-white hover:bg-gray-800"
              )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="flex px-3 py-2 space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
