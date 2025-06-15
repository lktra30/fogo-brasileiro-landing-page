
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
    <section className="py-20 bg-black relative overflow-hidden" style={{
      backgroundImage: `
        radial-gradient(ellipse 800px 400px at 10% 20%, rgba(60, 60, 60, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse 600px 300px at 90% 80%, rgba(40, 40, 40, 0.5) 0%, transparent 60%),
        radial-gradient(ellipse 1000px 500px at 50% 0%, rgba(80, 80, 80, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse 400px 200px at 30% 70%, rgba(50, 50, 50, 0.6) 0%, transparent 40%),
        radial-gradient(ellipse 700px 350px at 70% 30%, rgba(35, 35, 35, 0.4) 0%, transparent 65%),
        radial-gradient(ellipse 300px 150px at 85% 60%, rgba(45, 45, 45, 0.5) 0%, transparent 45%),
        linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0d0d0d 50%, #000000 75%, #0a0a0a 100%)
      `,
      backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%'
    }}>
      {/* Animated smoke particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gray-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-24 h-24 bg-gray-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gray-700 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gray-600 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '4.5s' }}></div>
      </div>

      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex items-center justify-center">
          <Truck size={128} className="text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
            Delivery
          </h2>
          <p className="font-body text-xl text-white mb-12 opacity-90">
            Enjoy our authentic Brazilian churrasco from the comfort of your home
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {deliveryServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-black bg-opacity-70 p-8 rounded-lg border border-gray-800 backdrop-blur-sm shadow-2xl">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={64} color="white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="font-body text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Button 
                    className="font-body w-full bg-brand-red hover:bg-brand-dark-red text-white font-semibold text-lg py-3 rounded-lg transition-all duration-300 border-2 border-red-800"
                    onClick={() => window.open(service.url, '_blank')}
                  >
                    ORDER NOW
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Divisor */}
      <div className="w-32 h-2 bg-gray-800 mx-auto mt-16 shadow-lg" />
    </section>
  );
};

export default Promotions;
