
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-smoke-white/95 backdrop-blur-sm border-b border-earth-brown/20 shadow-rustic wood-texture">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-gaucho text-2xl font-bold text-brand-red hover:text-ember-red transition-colors fire-glow"
            >
              BRASA VIVA
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium relative group"
            >
              Nossa História
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium relative group"
            >
              Cardápio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('visit')}
              className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium relative group"
            >
              Localização
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-earth-brown hover:text-brand-red transition-colors rustic-border"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-earth-brown/20 parchment-texture">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium text-left"
              >
                Nossa História
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium text-left"
              >
                Cardápio
              </button>
              <button 
                onClick={() => scrollToSection('visit')}
                className="font-churrasco text-earth-brown hover:text-brand-red transition-colors font-medium text-left"
              >
                Localização
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
