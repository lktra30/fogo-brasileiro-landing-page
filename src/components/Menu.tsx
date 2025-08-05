import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Menu = () => {
  // Menu URLs for each location
  const menuLocations = [
    {
      name: "Solaire Social Food Hall",
      url: "/menu-solaire.png" // Substitua pela URL real do PDF
    },
    {
      name: "Food-Truck Location", 
      url: "/golder-arcade.png" // Substitua pela URL real do PDF
    }
  ];

  const menuItems = [
    {
      name: "Picanha Premium",
      description: "The crown jewel of Brazilian barbecue, top sirloin cap grilled to perfection",
      image: "/lovable-uploads/picanha_11zon.jpeg"
    },
    {
      name: "Brazilian Bowl",
      description: "White rice, savory beans, potato salad, farofa, vinaigrette salad, and your meat choice",
      image: "/lovable-uploads/pote_11zon.webp"
    },
    {
      name: "On the Bun",
      description: "8 inches italian sub bun with 4 flavorful toppings and your meat choice, perfect for a quick bite",
      image: "/lovable-uploads/bun-sdnw_11zon.webp"
    },
  ];

  // State to control CTA visibility
  const [showCTA, setShowCTA] = useState(false);
  // Carousel API ref for autoplay
  const carouselApiRef = useRef<CarouselApi | null>(null);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      carouselApiRef.current?.scrollNext();
    }, 4000); // 4 s entre slides

    return () => clearInterval(interval);
  }, []);

  // Detect first scroll to reveal CTA
  useEffect(() => {
    const onScroll = () => {
      setShowCTA(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-4 bg-brand-beige relative border-t-4 border-gray-800 min-h-screen overflow-hidden">
      {/* Background texture elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px)`,
        }}></div>
      </div>
      
      {/* Smoke/charcoal gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/3 to-gray-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/5 via-transparent to-gray-800/50"></div>
      </div>
      
      {/* Decorative charcoal marks */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-900/5 rounded-full blur-3xl animate-smoke"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-900/5 rounded-full blur-3xl animate-charcoal"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-900/5 rounded-full blur-2xl animate-smoke"></div>
      
      <div className="container mx-auto px-1 sm:px-4 max-w-7xl h-full flex flex-col justify-between min-h-[calc(80vh-1rem)] relative z-10">
        {/* Título horizontal centralizado */}
        <div className="mb-2 text-center py-2 sm:py-2 md:py-2 w-full flex-shrink-0">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 tracking-wide drop-shadow-md relative inline-block">
            BEST SELLERS
            {/* Underline */}
            <span className="block w-24 sm:w-32 h-1 bg-brand-red rounded-full mt-2 mx-auto"></span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full mx-auto flex-1 flex items-center min-h-0 pb-1 sm:pb-2">
          <Carousel
            className="w-full"
            setApi={(api) => (carouselApiRef.current = api)}
            opts={{ loop: true }}
          >
            <CarouselContent className="-ml-1 sm:-ml-4">
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="pl-1 sm:pl-4 basis-full">
                  <div className="relative overflow-hidden flex flex-col justify-center items-center">
                    {/* Imagem do produto */}
                    <div className="relative overflow-hidden shadow-lg group h-[80vh] w-[80vh] max-w-[90vw] max-h-[90vw] rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="800"
                      />
                      
                      {/* Texto sobreposto na parte inferior da imagem */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                        {/* Título */}
                        <h3 className="font-display text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-4 text-center drop-shadow-2xl">
                          {item.name.toUpperCase()}
                        </h3>
                        
                        {/* Descrição */}
                        <p className="font-body text-white text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Setas responsivas */}
            <CarouselPrevious 
              className="-left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10 bg-brand-red hover:bg-brand-dark-red text-white rounded-full shadow-xl"
            />
            <CarouselNext 
              className="-right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10 bg-brand-red hover:bg-brand-dark-red text-white rounded-full shadow-xl"
            />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className={`text-center flex-shrink-0 transition-all duration-700 ${showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                className="font-display bg-brand-red hover:bg-brand-dark-red text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105 border-0 shadow-lg"
                size="lg"
              >
                View Full Menu
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-56 mt-2 bg-white shadow-xl border border-gray-200 rounded-lg"
            >
              {menuLocations.map((location, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => window.open(location.url, '_blank')}
                  className="font-body text-gray-700 hover:bg-brand-red hover:text-white cursor-pointer px-4 py-3 transition-colors duration-200"
                >
                  {location.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default Menu;
