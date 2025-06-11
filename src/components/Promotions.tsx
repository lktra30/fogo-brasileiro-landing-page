
import { Button } from "@/components/ui/button";
import { Car, DoorOpen, Utensils, Truck } from "lucide-react";

import { SiUbereats, SiDoordash } from "react-icons/si";
import { RiBreadLine } from "react-icons/ri";


const Promotions = () => {
  const deliveryServices = [
    {
      name: "Uber Eats",
      icon: SiUbereats,
      url: "https://www.ubereats.com",
      description: "Fast delivery in 30-45 minutes"
    },
    {
      name: "DoorDash",
      icon: SiDoordash,
      url: "https://www.doordash.com",
      description: "Reliable delivery service"
    },
    {
      name: "Toast",
      icon: RiBreadLine,
      url: "https://pos.toasttab.com",
      description: "Order directly from our kitchen"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark-red concrete-texture-dark relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex items-center justify-center">
          <Truck size={128} className="text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            Delivery
          </h2>
          <p className="font-serif text-xl text-white mb-12 opacity-90">
            Enjoy our authentic Brazilian churrasco from the comfort of your home
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {deliveryServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-black bg-opacity-30 p-8 rounded-lg border border-red-300">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={64} color="white" />
                  </div>
                  <h3 className="font-slab text-2xl font-semibold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="font-sans text-red-200 mb-6">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-white hover:bg-gray-100 text-black font-semibold text-lg py-3 rounded-lg transition-all duration-300"
                    onClick={() => window.open(service.url, '_blank')}
                  >
                    ORDER NOW
                  </Button>
                </div>
              );
            })}
          </div>

          {/* <div className="bg-white bg-opacity-10 p-8 rounded-lg">
            <h3 className="font-slab text-2xl font-semibold text-white mb-4">
              Free Delivery on Orders Over $50
            </h3>
            <p className="font-serif text-white text-lg">
              Get your favorite Brazilian dishes delivered fresh and hot to your door
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
