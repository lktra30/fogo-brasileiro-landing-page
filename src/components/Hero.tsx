import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('delivery');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/hero-photo.jpeg" 
          alt="Fire Pit Experience"
          className="w-full h-full object-cover"
        />
        {/* Overlay escuro para melhor contraste do texto */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 lg:px-12">
        {/* Texto principal */}
        <div className="text-center mb-12 max-w-5xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 font-black tracking-tight leading-tight">
            {/* Texto moderno e minimalista */}
            <span className="text-white">
              EXPERIENCE THE
            </span>
            <span className="block text-white relative" >
              BRAZILIAN
              {/* Underline vermelho moderno */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-1 bg-red-600 rounded-full"></div>
            </span>
            <span className="block text-white mt-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
              FLAVOR
            </span>
          </h1>
          
          {/* Subtitle minimalista */}
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Authentic Brazilian BBQ Experience
          </p>
        </div>
        
        {/* Botões CTA - Design moderno */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botão branco com texto vermelho */}
          <Button 
            className="font-display bg-white hover:bg-gray-50 text-red-600 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105 border-2 border-white hover:border-gray-200"
            size="lg"
            onClick={scrollToMenu}
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
