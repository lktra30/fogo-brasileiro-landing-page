
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-brand-red mb-4">
              FIRE PIT
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Authentic Brazilian churrasco experience in the heart of the city. 
              Where tradition meets passion, one perfect cut at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#menu" className="block text-gray-300 hover:text-brand-red transition-colors duration-300">
                Menu
              </a>
              <a href="#reservations" className="block text-gray-300 hover:text-brand-red transition-colors duration-300">
                Reservations
              </a>
              <a href="#events" className="block text-gray-300 hover:text-brand-red transition-colors duration-300">
                Private Events
              </a>
              <a href="#catering" className="block text-gray-300 hover:text-brand-red transition-colors duration-300">
                Catering
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p>123 Churrasco Avenue</p>
              <p>Downtown District</p>
              <p>(555) 123-MEAT</p>
              <p>info@firepit.com</p>
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <span className="text-white font-semibold">T</span>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-wide">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-wide">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-wide">
                Accessibility
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 Fire Pit. All rights reserved. | Authentic Brazilian Churrasco Experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
