
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Menu = () => {
  const menuItems = [
    {
      name: "Picanha Premium",
      description: "A joia da coroa do churrasco brasileiro, temperada com sal grosso e grelhada na perfeição",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cordeiro Especial",
      description: "Cordeiro tenro marinado em ervas e assado lentamente sobre brasas vivas",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Costela Defumada",
      description: "Costela bovina defumada com nosso tempero especial, que se desfaz na boca",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-leather-tan charcoal-texture relative">
      {/* Elementos decorativos de brasa */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-ember-red rounded-full opacity-40 animate-fire-dance"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-rust-orange rounded-full opacity-50 animate-fire-dance" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="w-32 h-2 bg-gradient-to-r from-earth-brown via-brand-red to-rust-orange mx-auto mb-8 rustic-border"></div>
          <h2 className="font-gaucho text-4xl md:text-5xl font-bold text-wood-brown mb-4">
            Nosso Cardápio
          </h2>
          <p className="font-churrasco text-xl text-charcoal-gray max-w-2xl mx-auto">
            Cortes Premium preparados com técnicas tradicionais brasileiras e servidos com acompanhamentos autênticos
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-smoke-white rounded-lg shadow-wood overflow-hidden h-full rustic-border wood-texture">
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay com efeito de brasas */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-ember-red rounded-full opacity-60 animate-fire-dance"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-fazenda text-xl font-bold text-wood-brown mb-3">
                        {item.name}
                      </h3>
                      <p className="font-churrasco text-sm text-charcoal-gray mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex justify-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-2 border-earth-brown text-earth-brown hover:bg-brand-red hover:text-smoke-white hover:border-brand-red transition-all duration-300 rustic-border font-churrasco"
                        >
                          Pedir Agora
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 rustic-border" />
            <CarouselNext className="right-4 rustic-border" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-brand-red hover:bg-ember-red text-smoke-white font-bold text-lg px-10 py-3 rounded-lg shadow-ember transition-all duration-300 hover:shadow-xl rustic-border fire-glow"
            size="lg"
          >
            VER CARDÁPIO COMPLETO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
