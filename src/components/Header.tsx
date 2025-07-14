import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="rounded-b-none md:rounded-b-full fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-sm p-3 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-10 overflow-visible">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-26 -mb-2"
            >
              <picture>
                <source srcSet="/lovable-uploads/LOGO.png" type="image/png" />
                <img
                  src="/lovable-uploads/LOGO.png"
                  alt="Fire Pit Logo"
                  className="w-full h-full object-contain rounded"
                  width="208"
                  height="144"
                />
              </picture>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-brand-red transition-colors font-light"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-brand-red transition-colors font-light"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('catering')}
              className="text-white hover:text-brand-red transition-colors font-light"
            >
              Catering
            </button>
            <button 
              onClick={() => scrollToSection('visit')}
              className="text-white hover:text-brand-red transition-colors font-light"
            >
              Locations
            </button>
            <button 
              onClick={() => scrollToSection('promotions')}
              className="text-white hover:text-brand-red transition-colors font-light"
            >
              Delivery
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-brand-red transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/30">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-brand-red transition-colors font-medium text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-white hover:text-brand-red transition-colors font-medium text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('catering')}
                className="text-white hover:text-brand-red transition-colors font-medium text-left"
              >
                Catering
              </button>
              <button 
                onClick={() => scrollToSection('visit')}
                className="text-white hover:text-brand-red transition-colors font-medium text-left"
              >
                Locations
              </button>
              <button 
                onClick={() => scrollToSection('promotions')}
                className="text-white hover:text-brand-red transition-colors font-medium text-left"
              >
                Delivery
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
