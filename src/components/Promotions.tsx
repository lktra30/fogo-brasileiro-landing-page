
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
    <section className="py-20 bg-brand-black relative overflow-hidden" style={{
      backgroundImage: `
        radial-gradient(ellipse 800px 400px at 10% 20%, rgba(75, 52, 41, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse 600px 300px at 90% 80%, rgba(45, 27, 14, 0.5) 0%, transparent 60%),
        radial-gradient(ellipse 1000px 500px at 50% 0%, rgba(62, 42, 26, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse 400px 200px at 30% 70%, rgba(28, 28, 28, 0.6) 0%, transparent 40%),
        radial-gradient(ellipse 700px 350px at 70% 30%, rgba(42, 42, 42, 0.4) 0%, transparent 65%),
        radial-gradient(ellipse 300px 150px at 85% 60%, rgba(74, 52, 41, 0.5) 0%, transparent 45%),
        linear-gradient(135deg, #0A0A0A 0%, #2D1B0E 25%, #1C1C1C 50%, #0A0A0A 75%, #2A2A2A 100%)
      `,
      backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%'
    }}>
      {/* Enhanced smoke particles with wooden tones */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-brand-wood-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-32 right-1/3 w-24 h-24 bg-brand-bark rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-brand-ash rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-brand-wood rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '4.5s' }}></div>
      </div>

      {/* Background watermark */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full flex items-center justify-center">
          <Truck size={128} className="text-brand-wood" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-cream mb-8">
            <span className="text-brand-red">Delivery</span>
          </h2>
          <p className="font-body text-xl text-brand-parchment mb-12 font-bold">
            Enjoy our authentic Brazilian churrasco from the comfort of your home
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {deliveryServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-brand-charcoal bg-opacity-90 p-8 rounded-lg border-4 border-brand-wood backdrop-blur-sm shadow-2xl">
                  <div className="flex justify-center mb-4">
                    <IconComponent size={64} color="#F7F3E9" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-4">
                    <span className="text-brand-red">{service.name}</span>
                  </h3>
                  <p className="font-body text-brand-parchment mb-6 font-medium">
                    {service.description}
                  </p>
                  <Button 
                    className="font-body w-full bg-brand-red hover:bg-brand-dark-red text-white font-black text-lg py-4 rounded-lg transition-all duration-300 border-2 border-brand-dark-red uppercase tracking-wider"
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
      <div className="w-32 h-3 bg-brand-charcoal mx-auto mt-16 shadow-2xl border-2 border-brand-wood" />
    </section>
  );
};

export default Promotions;
