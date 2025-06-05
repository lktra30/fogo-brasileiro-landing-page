
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-serif text-2xl font-bold text-brand-red hover:text-brand-dark-red transition-colors"
            >
              BRASA VIVA
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('visit')}
              className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-brand-red transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('visit')}
                className="font-sans text-gray-700 hover:text-brand-red transition-colors font-medium text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
