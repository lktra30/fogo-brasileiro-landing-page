
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VisitUs = () => {
  const locations = [
    {
      name: "Solaire Social Food Hall",
      address: "SOLAIRE SOCIAL FOOD HALL \n 8200 Dixon Ave - Silver Spring, MD 20910",
      phone: "(240) 579-0308",
      hours: [
        "Sunday - Thursday: 11:00 AM - 9:00 PM",
        "Friday - Saturday: 11:00 AM - 10:00 PM",
      ],
      backgroundImage: "/lovable-uploads/solaire-loc.jpeg"
    },
    {
      name: "Food-Truck Location",
      address: "Golden Arcade Shopping Center \n 804 Rockville Pike - Rockville, MD 20852",
      phone: "(301) 789-8709",
      hours: [
        "Tuesday - Saturday: 11:00 AM - 7:30 PM"
      ],
      backgroundImage: "/lovable-uploads/foodtruck-loc.jpg"
    }
  ];

  return (
    <section className="py-24 bg-brand-beige relative border-t-4 border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-wide drop-shadow-md">
            Our Locations
          </h2>
          <p className="font-body text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Find us the authentic Brazilian restaurant and food truck near you
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {locations.map((location, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden h-full border-4 border-gray-800">
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={location.backgroundImage} 
                        alt={location.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-8 bg-brand-cream">
                      <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6 tracking-wide text-center">
                        {location.name}
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">📍</span>
                          </div>
                          <div>
                            <h4 className="font-display text-lg font-semibold text-gray-900 mb-1">Address</h4>
                            <p className="font-body text-gray-800 whitespace-pre-line">
                              {location.address}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">📞</span>
                          </div>
                          <div>
                            <h4 className="font-display text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                            <p className="font-body text-gray-800">{location.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">🕐</span>
                          </div>
                          <div>
                            <h4 className="font-display text-lg font-semibold text-gray-900 mb-1">Hours</h4>
                            <div className="font-body text-gray-800 space-y-1">
                              {location.hours.map((hour, hourIndex) => (
                                <p key={hourIndex}>{hour}</p>
                              ))}
                            </div>
                          </div>
                        </div>
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
      </div>
      
      {/* Divisor */}
      <div className="w-32 h-2 bg-gray-800 mx-auto mt-16 shadow-lg" />
    </section>
  );
};

export default VisitUs;
