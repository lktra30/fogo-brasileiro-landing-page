
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/02bfcd84-442a-4e3f-90d1-860aae62201c.png')`
        }}
      />
      
      {/* Dark Overlay with wood texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-wood-dark/85 to-brand-black/90" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-16">
        <div className="animate-fade-in w-full min-w-[1000px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <img 
            src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png" 
            alt="Fire Pit Logo"
            className="w-full h-auto object-cover mx-auto drop-shadow-2xl rounded-lg border-4 border-brand-red shadow-2xl shadow-brand-red/30"
          />
        </div>
        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-brand-cream mb-5 max-w-4xl animate-fade-in font-bold tracking-wide drop-shadow-2xl text-shadow-lg">
          Experience the <span className="text-brand-red font-black">Authentic Fire & Passion</span> of Brazilian Churrasco
        </p>
        <Button 
          className="font-display bg-brand-red hover:bg-brand-dark-red text-white font-black text-xl px-20 py-8 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border-4 border-brand-dark-red hover:border-brand-red uppercase tracking-wider"
          size="lg"
          onClick={scrollToMenu}
        >
          VIEW MENU
        </Button>
      </div>
    </section>
  );
};

export default Hero;
