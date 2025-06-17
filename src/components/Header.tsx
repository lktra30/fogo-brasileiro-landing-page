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
    <header className="rounded-b-none md:rounded-b-full fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm shadow-sm p-3 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-10 overflow-visible">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity w-32 h-24 sm:w-40 sm:h-28 md:w-52 md:h-36 -mb-6"
            >
              <img 
                src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.webp" 
                alt="Fire Pit Logo"
                className="w-full h-full object-contain rounded"
              />
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
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-white hover:text-brand-red transition-colors font-medium text-left"
              >
                Menu
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
