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
      image: "/lovable-uploads/combinado.webp"
    },
    {
      name: "Brazilian Bowl",
      description: "White rice, savory beans, potato salad, farofa, vinaigrette salad, and your meat choice",
      image: "/lovable-uploads/br-bowl.webp"
    },
    {
      name: "On the Bun",
      description: "8 inches italian sub bun with 4 flavorful toppings and your meat choice, perfect for a quick bite",
      image: "/lovable-uploads/bun-sdnw.webp"
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-brand-beige relative border-t-4 border-gray-800 flex flex-col">
      <div className="container mx-auto px-2 sm:px-4 flex-1 flex flex-col py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-wide drop-shadow-md">
            Menu
          </h2>
          <p className="font-body text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Premium cuts prepared with traditional Brazilian techniques and served with authentic sides
          </p>
        </div>

        {/* Carousel - Flex grow to fill available space */}
        <div className="relative w-full px-2 sm:px-6 mx-auto flex-1 flex items-center">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-8">
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden h-full border-2 sm:border-4 border-gray-800">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="300"
                      />
                    </div>
                    
                    <div className="p-3 sm:p-4 md:p-6 bg-brand-cream">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 tracking-wide text-center">
                        {item.name}
                      </h3>
                      <p className="font-body text-sm sm:text-base text-gray-800 leading-tight sm:leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Setas responsivas */}
            <CarouselPrevious 
              className="-left-1 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 h-7 w-7 sm:h-8 sm:w-8 border-2 sm:border-4 border-black bg-white/90 backdrop-blur-md hover:bg-white shadow-md"
            />
            <CarouselNext 
              className="-right-1 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 h-7 w-7 sm:h-8 sm:w-8 border-2 sm:border-4 border-black bg-white/90 backdrop-blur-md hover:bg-white shadow-md"
            />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button 
            className="font-display bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105 border-0"
            size="lg"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
