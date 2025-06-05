
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=3648&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-16">
        <h1 className="font-slab text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 animate-fade-in leading-tight">
          BRASA VIVA
        </h1>
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-3xl animate-fade-in opacity-90">
          Experience the Authentic Fire & Passion of Brazilian Churrasco
        </p>
        <Button 
          className="bg-brand-red hover:bg-red-700 text-white font-bold text-lg px-12 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          size="lg"
        >
          RESERVE YOUR TABLE
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
