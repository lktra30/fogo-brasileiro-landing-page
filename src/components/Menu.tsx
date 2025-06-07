
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
      description: "The crown jewel of Brazilian barbecue, seasoned with rock salt and grilled to perfection over roaring flames",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cordeiro Especial",
      description: "Tender lamb marinated in exotic herbs and slow-roasted over ancient open coals with traditional Brazilian spices",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Costela Defumada",
      description: "Legendary smoked beef ribs with our mystical signature dry rub, fall-off-the-bone tender and soul-stirring",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-brand-red via-brand-dark-red to-brand-black concrete-texture-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-brand-cream rotate-45 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-4 border-brand-beige rotate-12"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border-6 border-brand-cream rounded-full rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-8 border-brand-beige rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-cream opacity-30 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-brand-beige opacity-20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          {/* Ornate header with multiple decorative elements */}
          <div className="relative inline-block">
            <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-brand-cream rotate-45 opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-3 border-brand-beige rotate-12 opacity-80"></div>
            <h2 className="font-bold text-7xl md:text-8xl font-bold text-brand-cream mb-6 transform -rotate-2 drop-shadow-2xl">
              ★ MENU ★
            </h2>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 border-4 border-brand-cream rotate-45 opacity-70"></div>
            <div className="absolute -bottom-6 -right-8 w-18 h-18 border-3 border-brand-beige rotate-12 opacity-50"></div>
          </div>
          
          {/* Decorative border around subtitle */}
          <div className="relative max-w-4xl mx-auto mt-8">
            <div className="absolute inset-0 border-4 border-brand-cream border-dashed rotate-1 rounded-lg opacity-60"></div>
            <div className="relative bg-brand-dark-red border-8 border-brand-beige rounded-lg p-8 transform rotate-1 shadow-2xl">
              <p className="font-rustic text-2xl md:text-3xl text-brand-cream leading-tight font-bold">
                ✦ LEGENDARY PREMIUM CUTS ✦<br/>
                PREPARED WITH ANCIENT BRAZILIAN FIRE TECHNIQUES<br/>
                ★ SERVED WITH AUTHENTIC MYSTICAL SIDES ★
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Ornate carousel wrapper */}
          <div className="relative bg-gradient-to-r from-brand-cream to-brand-beige p-8 rounded-3xl border-8 border-brand-dark-red shadow-2xl transform rotate-1">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-red rotate-45"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-red rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-brand-red rotate-45"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-brand-red rotate-45"></div>
            
            <Carousel className="w-full">
              <CarouselContent className="-ml-6">
                {menuItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="relative group">
                      {/* Decorative frame around each card */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-brand-red to-brand-dark-red rounded-2xl rotate-2 opacity-80"></div>
                      <div className="absolute -inset-2 bg-brand-black rounded-xl rotate-1"></div>
                      
                      <div className="relative bg-brand-cream rounded-xl shadow-2xl overflow-hidden h-full border-6 border-brand-dark-red transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-1">
                        {/* Image with decorative overlay */}
                        <div className="relative aspect-square overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/30 to-transparent z-10"></div>
                          <div className="absolute top-4 left-4 z-20">
                            <div className="bg-brand-red text-brand-cream px-3 py-1 rounded-full font-bold text-sm rotate-12 shadow-lg">
                              ★ PREMIUM ★
                            </div>
                          </div>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Decorative corner elements */}
                          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-brand-red"></div>
                          <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-brand-dark-red"></div>
                        </div>
                        
                        <div className="p-8 bg-gradient-to-br from-brand-cream to-brand-beige">
                          {/* Ornate title styling */}
                          <div className="relative mb-6">
                            <div className="absolute -top-2 -left-2 w-full h-full bg-brand-red opacity-20 rounded-lg rotate-2"></div>
                            <h3 className="relative font-bold text-2xl font-bold text-brand-black text-center bg-brand-beige py-3 px-4 rounded-lg border-4 border-brand-dark-red shadow-lg transform -rotate-1">
                              {item.name}
                            </h3>
                          </div>
                          
                          {/* Decorated description */}
                          <div className="relative mb-8">
                            <div className="absolute inset-0 border-2 border-brand-red border-dashed rounded-lg opacity-50 rotate-1"></div>
                            <p className="relative font-slab text-lg text-brand-black leading-relaxed font-bold p-4 bg-white/50 rounded-lg">
                              ✦ {item.description} ✦
                            </p>
                          </div>
                          
                          {/* Maximalist button */}
                          <div className="flex justify-center">
                            <div className="relative group/btn">
                              <div className="absolute -inset-2 bg-gradient-to-r from-brand-red to-brand-dark-red rounded-xl rotate-2 group-hover/btn:rotate-6 transition-transform duration-300"></div>
                              <div className="absolute -inset-1 bg-brand-black rounded-lg rotate-1 group-hover/btn:-rotate-3 transition-transform duration-300"></div>
                              <Button 
                                className="relative bg-gradient-to-r from-brand-red to-brand-dark-red hover:from-brand-dark-red hover:to-brand-red text-brand-cream font-bold text-xl px-8 py-4 rounded-lg border-4 border-brand-cream shadow-2xl transform group-hover/btn:scale-110 transition-all duration-300"
                              >
                                ★ ORDER NOW ★
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Ornate carousel controls */}
              <div className="relative">
                <CarouselPrevious className="left-0 w-16 h-16 bg-gradient-to-r from-brand-red to-brand-dark-red border-4 border-brand-cream text-brand-cream hover:scale-125 shadow-2xl" />
                <CarouselNext className="right-0 w-16 h-16 bg-gradient-to-r from-brand-red to-brand-dark-red border-4 border-brand-cream text-brand-cream hover:scale-125 shadow-2xl" />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Maximalist CTA section */}
        <div className="text-center mt-24">
          <div className="relative inline-block">
            {/* Multiple decorative layers */}
            <div className="absolute -inset-8 bg-gradient-to-r from-brand-red via-brand-dark-red to-brand-red rounded-3xl rotate-3 opacity-60"></div>
            <div className="absolute -inset-6 bg-brand-black rounded-2xl rotate-2"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-cream to-brand-beige rounded-xl rotate-1"></div>
            
            <Button 
              className="relative bg-gradient-to-r from-brand-red via-brand-dark-red to-brand-red hover:from-brand-dark-red hover:via-brand-red hover:to-brand-dark-red text-brand-cream font-bold text-3xl px-16 py-8 rounded-2xl border-8 border-brand-cream shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-500"
              size="lg"
            >
              ★★★ VIEW COMPLETE LEGENDARY MENU ★★★
            </Button>
            
            {/* Floating decorative elements around button */}
            <div className="absolute -top-6 -left-6 w-6 h-6 bg-brand-cream rotate-45 animate-pulse"></div>
            <div className="absolute -top-4 -right-8 w-4 h-4 bg-brand-beige rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-8 h-8 bg-brand-cream rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-brand-beige rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Additional floating decorative elements */}
      <div className="absolute top-1/4 left-0 w-4 h-32 bg-brand-cream opacity-30 rotate-45 animate-pulse"></div>
      <div className="absolute top-3/4 right-0 w-4 h-24 bg-brand-beige opacity-40 rotate-12 animate-pulse"></div>
    </section>
  );
};

export default Menu;
