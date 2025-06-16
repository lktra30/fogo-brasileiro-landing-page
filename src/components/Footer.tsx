
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-cream py-16 border-t-4 border-brand-red">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4 w-20 h-16 mx-auto md:mx-0 border-2 border-brand-red rounded">
              <img 
                src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png" 
                alt="Fire Pit Logo"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <p className="font-body text-brand-parchment leading-relaxed font-medium">
              Authentic Brazilian churrasco experience in the heart of the city. 
              Where tradition meets passion, one perfect cut at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-xl font-black mb-6 text-brand-red">Quick Links</h4>
            <div className="space-y-3">
              <a href="#menu" className="font-body block text-brand-parchment hover:text-brand-red transition-colors duration-300 font-bold">
                Menu
              </a>
              <a href="#reservations" className="font-body block text-brand-parchment hover:text-brand-red transition-colors duration-300 font-bold">
                Reservations
              </a>
              <a href="#events" className="font-body block text-brand-parchment hover:text-brand-red transition-colors duration-300 font-bold">
                Private Events
              </a>
              <a href="#catering" className="font-body block text-brand-parchment hover:text-brand-red transition-colors duration-300 font-bold">
                Catering
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-xl font-black mb-6 text-brand-red">Contact</h4>
            <div className="space-y-3 text-brand-parchment">
              <p className="font-body font-bold">8200 Dixon Ave - Silver Spring, MD 20910</p>
              <p className="font-body font-black text-brand-red">(240) 579-0308</p>
              <div className="bg-brand-red w-full h-2 border border-brand-dark-red" />
              <p className="font-body font-bold">804 Rockville Pike - Rockville, MD 20852</p>
              <p className="font-body font-black text-brand-red">(301) 789-8709</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 justify-center md:justify-end">
              <a 
                href="https://www.instagram.com/firepit.brbbq/" 
                className="w-12 h-12 bg-brand-charcoal border-2 border-brand-wood rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-brand-cream" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-brand-charcoal border-2 border-brand-wood rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-brand-cream" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t-2 border-brand-charcoal pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="font-body text-brand-wood-light hover:text-brand-cream transition-colors duration-300 uppercase tracking-wide font-bold">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-brand-wood-light hover:text-brand-cream transition-colors duration-300 uppercase tracking-wide font-bold">
                Terms of Service
              </a>
              <a href="#" className="font-body text-brand-wood-light hover:text-brand-cream transition-colors duration-300 uppercase tracking-wide font-bold">
                Accessibility
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t-2 border-brand-wood-dark">
            <p className="font-body text-brand-wood-light font-bold">
              © 2024 <span className="text-brand-red">Fire Pit</span>. All rights reserved. | Authentic Brazilian Churrasco Experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
