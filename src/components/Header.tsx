
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-charcoal/90 backdrop-blur-sm border-b-2 border-brand-wood shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity w-40 h-32 border-2 border-brand-red rounded"
            >
              <img 
                src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png" 
                alt="Fire Pit Logo"
                className="w-full h-full object-cover rounded"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg tracking-wide"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg tracking-wide"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg tracking-wide"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('visit')}
              className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg tracking-wide"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-cream hover:text-brand-red transition-colors border-2 border-brand-wood rounded"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-brand-wood bg-brand-wood-dark">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg text-left tracking-wide"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg text-left tracking-wide"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg text-left tracking-wide"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('visit')}
                className="text-brand-cream hover:text-brand-red transition-colors font-bold text-lg text-left tracking-wide"
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
