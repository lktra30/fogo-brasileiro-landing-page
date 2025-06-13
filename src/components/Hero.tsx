
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-brand-graphite">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/02bfcd84-442a-4e3f-90d1-860aae62201c.png')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-16">
        <div className="animate-fade-in w-full min-w-[1000px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <img 
            src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png" 
            alt="Fire Pit Logo"
            className="w-full h-auto object-cover mx-auto drop-shadow-2xl rounded-lg"
          />
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-5 max-w-4xl animate-fade-in opacity-95 font-body font-medium tracking-wide drop-shadow-lg">
          Experience the Authentic Fire & Passion of Brazilian Churrasco
        </p>
        <Button 
          className="bg-brand-red hover:bg-red-700 text-white font-bold text-xl px-16 py-6 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-4 border-red-800 font-body"
          size="lg"
        >
          RESERVE YOUR TABLE
        </Button>
      </div>
    </section>
  );
};

export default Hero;
