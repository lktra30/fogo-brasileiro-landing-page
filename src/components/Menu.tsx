
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
    <section className="py-24 bg-brand-beige relative border-t-4 border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-wide drop-shadow-md">
            Menu
          </h2>
          <p className="font-body text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Premium cuts prepared with traditional Brazilian techniques and served with authentic sides
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden h-full border-4 border-gray-800">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-8 bg-brand-cream">
                      <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4 tracking-wide">
                        {item.name}
                      </h3>
                      <p className="font-body text-lg text-gray-800 mb-6 leading-relaxed font-normal">
                        {item.description}
                      </p>
                      <div className="flex justify-center">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="font-body border-4 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold text-lg px-8 py-3"
                        >
                          Order
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 border-4 border-black" />
            <CarouselNext className="right-4 border-4 border-black" />
          </Carousel>
        </div>

        <div className="text-center mt-20">
          <Button 
            className="font-display bg-brand-red hover:bg-brand-dark-red text-white font-bold text-2xl px-16 py-4 rounded-lg shadow-2xl border-4 border-red-800"
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
