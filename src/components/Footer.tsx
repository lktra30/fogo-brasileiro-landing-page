
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-gray text-smoke-white py-16 brick-texture relative">
      {/* Elementos decorativos de brasa */}
      <div className="absolute top-8 left-8 w-4 h-4 bg-ember-red rounded-full opacity-60 animate-fire-dance"></div>
      <div className="absolute top-12 right-12 w-6 h-6 bg-rust-orange rounded-full opacity-50 animate-fire-dance" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-gaucho text-3xl font-bold text-brand-red mb-4 fire-glow">
              BRASA VIVA
            </h3>
            <div className="w-24 h-1 bg-rust-orange mb-4 rustic-border"></div>
            <p className="font-churrasco text-sand-beige leading-relaxed">
              Experiência autêntica de churrasco brasileiro no coração da cidade. 
              Onde a tradição encontra a paixão, um corte perfeito de cada vez.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-fazenda text-xl font-bold mb-6 text-leather-tan">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#menu" className="block font-churrasco text-sand-beige hover:text-brand-red transition-colors duration-300 relative group">
                Cardápio
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#reservations" className="block font-churrasco text-sand-beige hover:text-brand-red transition-colors duration-300 relative group">
                Reservas
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#events" className="block font-churrasco text-sand-beige hover:text-brand-red transition-colors duration-300 relative group">
                Eventos Privados
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#catering" className="block font-churrasco text-sand-beige hover:text-brand-red transition-colors duration-300 relative group">
                Catering
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-fazenda text-xl font-bold mb-6 text-leather-tan">Contato</h4>
            <div className="space-y-3 font-churrasco text-sand-beige">
              <p>Rua do Churrasco, 123</p>
              <p>Centro Histórico</p>
              <p>(55) 123-CARNE</p>
              <p>contato@brasaviva.com</p>
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-earth-brown/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-earth-brown/50 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110 rustic-border"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-earth-brown/50 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110 rustic-border"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-earth-brown/50 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 transform hover:scale-110 rustic-border"
                aria-label="TikTok"
              >
                <span className="text-smoke-white font-bold">T</span>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-leather-tan hover:text-smoke-white transition-colors duration-300 uppercase tracking-wide font-churrasco">
                Política de Privacidade
              </a>
              <a href="#" className="text-leather-tan hover:text-smoke-white transition-colors duration-300 uppercase tracking-wide font-churrasco">
                Termos de Serviço
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-earth-brown/20">
            <p className="text-leather-tan font-churrasco">
              © 2024 Brasa Viva. Todos os direitos reservados. | Experiência Autêntica de Churrasco Brasileiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
