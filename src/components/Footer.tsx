import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4 w-20 h-16 mx-auto md:mx-0">
              <img 
                src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png" 
                alt="Fire Pit Logo"
                className="w-full h-full object-cover rounded"
              />
            </div>
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
              <p>8200 Dixon Ave - Silver Spring, MD 20910</p>
              <p>(240) 579-0308</ p>
              <div className="bg-red-500 w-full h-1" />
              <p>804 Rockville Pike - Rockville, MD 20852</p>
              <p>(301) 789-8709</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 justify-center md:justify-end">
              <a 
                href="https://www.instagram.com/firepit.brbbq/" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <span className="text-white font-semibold">T</span>
              </a> */}
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
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
