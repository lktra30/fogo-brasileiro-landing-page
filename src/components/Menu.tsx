
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
      description: "The crown jewel of Brazilian barbecue, top sirloin cap grilled to perfection",
      image: "/lovable-uploads/picanha.jpeg"
    },
    {
      name: "Brazilian Bowl",
      description: "Pack of flavor; White rice, savory beans, potato salad, farofa, vinaigrette salad, and your meat choice",
      image: "/lovable-uploads/br-bowl.jpeg"
    },
    {
      name: "On the Bun",
      description: "8 inches italian sub bun with 4 flavorful toppings and your meat choice, perfect for a quick bite",
      image: "/lovable-uploads/on-the-bun.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-brand-ash relative border-t-4 border-brand-charcoal" id="menu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-cream mb-6 tracking-wide drop-shadow-2xl">
            <span className="text-brand-red">Menu</span>
          </h2>
          <p className="font-body text-2xl text-brand-parchment max-w-3xl mx-auto font-bold">
            Premium cuts prepared with <span className="text-brand-red">traditional Brazilian techniques</span> and served with authentic sides
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-brand-charcoal rounded-lg shadow-2xl overflow-hidden h-full border-4 border-brand-wood">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-8 bg-brand-wood-dark">
                      <h3 className="font-display text-2xl font-bold text-brand-cream mb-4 tracking-wide">
                        <span className="text-brand-red">{item.name}</span>
                      </h3>
                      <p className="font-body text-lg text-brand-parchment mb-6 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 border-4 border-brand-charcoal bg-brand-wood hover:bg-brand-wood-light text-brand-cream" />
            <CarouselNext className="right-4 border-4 border-brand-charcoal bg-brand-wood hover:bg-brand-wood-light text-brand-cream" />
          </Carousel>
        </div>

        <div className="text-center mt-20">
          <Button 
            className="font-display bg-brand-red hover:bg-brand-dark-red text-white font-black text-2xl px-20 py-6 rounded-lg shadow-2xl border-4 border-brand-dark-red hover:border-brand-red uppercase tracking-wider transform hover:-translate-y-1 transition-all duration-300"
            size="lg"
          >
            VIEW FULL MENU
          </Button>
        </div>
      </div>
      
      {/* Divisor */}
      <div className="w-32 h-3 bg-brand-charcoal mx-auto mt-16 shadow-2xl border-2 border-brand-wood" />
    </section>
  );
};

export default Menu;
