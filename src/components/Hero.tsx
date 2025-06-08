
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
      
      {/* Overlay com textura de fumaça */}
      <div className="absolute inset-0 bg-black bg-opacity-50 smoke-effect" />
      
      {/* Elementos de brasa/fogo decorativos */}
      <div className="absolute bottom-20 left-10 w-8 h-8 bg-ember-red rounded-full opacity-60 animate-fire-dance"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-rust-orange rounded-full opacity-70 animate-fire-dance" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-brand-red rounded-full opacity-50 animate-fire-dance" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-16">
        <div className="rustic-border p-8 bg-black/20 backdrop-blur-sm">
          <h1 className="font-gaucho text-5xl md:text-7xl lg:text-8xl font-black text-smoke-white mb-6 animate-fade-in leading-tight fire-glow">
            BRASA VIVA
          </h1>
          <div className="w-32 h-1 bg-brand-red mx-auto mb-6 rustic-border"></div>
          <p className="font-fazenda text-xl md:text-2xl lg:text-3xl text-sand-beige mb-8 max-w-3xl animate-fade-in opacity-90">
            Sabores Autênticos do Churrasco Brasileiro
          </p>
          <p className="font-churrasco text-lg text-leather-tan mb-8 max-w-2xl">
            Onde a tradição gaúcha encontra a paixão pela carne perfeita
          </p>
        </div>
        
        <Button 
          className="bg-brand-red hover:bg-ember-red text-smoke-white font-bold text-lg px-12 py-4 rounded-lg shadow-ember transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 rustic-border fire-glow"
          size="lg"
        >
          RESERVE SUA MESA
        </Button>
      </div>
      
      {/* Scroll indicator com tema rústico */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sand-beige animate-bounce">
        <div className="w-6 h-10 border-2 border-sand-beige rounded-full flex justify-center rustic-border">
          <div className="w-1 h-3 bg-brand-red rounded-full mt-2 animate-pulse fire-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
