
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
      description: "The crown jewel of Brazilian barbecue, seasoned with rock salt and grilled to perfection",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cordeiro Especial",
      description: "Tender lamb marinated in herbs and slow-roasted over open coals",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Costela Defumada",
      description: "Smoked beef ribs with our signature dry rub, fall-off-the-bone tender",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-brand-red concrete-texture relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Menu
          </h2>
          <p className="font-sans text-xl text-brand-cream max-w-2xl mx-auto">
            Premium cuts prepared with traditional Brazilian techniques and served with authentic sides
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-slab text-xl font-bold text-gray-900 mb-3">
                        {item.name}
                      </h3>
                      <p className="font-serif text-sm text-gray-700 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex justify-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                        >
                          Order
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-white hover:bg-brand-cream text-brand-red font-bold text-lg px-10 py-3 rounded-lg"
            size="lg"
          >
            VIEW FULL MENU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
