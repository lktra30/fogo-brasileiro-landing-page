
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <div className="mb-8 animate-fade-in w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img 
            src="/lovable-uploads/4cd06a21-5648-4101-a069-37ee1a48c689.png" 
            alt="Fire Pit Logo"
            className="w-full h-full object-cover mx-auto drop-shadow-2xl rounded-lg"
          />
        </div>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-10 max-w-4xl animate-fade-in opacity-95 font-medium tracking-wide drop-shadow-lg">
          Experience the Authentic Fire & Passion of Brazilian Churrasco
        </p>
        <Button 
          className="bg-brand-red hover:bg-red-700 text-white font-bold text-xl px-16 py-6 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-4 border-red-800"
          size="lg"
        >
          RESERVE YOUR TABLE
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center shadow-lg">
          <div className="w-2 h-4 bg-white rounded-full mt-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
