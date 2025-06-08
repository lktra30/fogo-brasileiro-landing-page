
import { Button } from "@/components/ui/button";
import { Car, DoorOpen, Utensils, Truck } from "lucide-react";

const Promotions = () => {
  const deliveryServices = [
    {
      name: "Uber Eats",
      icon: Car,
      url: "https://www.ubereats.com",
      description: "Entrega rápida em 30-45 minutos"
    },
    {
      name: "iFood",
      icon: DoorOpen,
      url: "https://www.ifood.com.br",
      description: "Serviço de entrega confiável"
    },
    {
      name: "Delivery Próprio",
      icon: Utensils,
      url: "#",
      description: "Pedidos direto da nossa cozinha"
    }
  ];

  return (
    <section className="py-20 bg-charcoal-gray brick-texture relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full flex items-center justify-center">
          <Truck size={200} className="text-rust-orange animate-fire-dance" />
        </div>
      </div>

      {/* Elementos de brasa */}
      <div className="absolute top-10 left-20 w-6 h-6 bg-ember-red rounded-full opacity-60 animate-fire-dance"></div>
      <div className="absolute bottom-16 right-16 w-8 h-8 bg-rust-orange rounded-full opacity-50 animate-fire-dance" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-brand-red rounded-full opacity-70 animate-fire-dance" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-2 bg-gradient-to-r from-rust-orange via-ember-red to-brand-red mx-auto mb-8 rustic-border fire-glow"></div>
          <h2 className="font-gaucho text-4xl md:text-5xl font-bold text-smoke-white mb-8">
            Delivery
          </h2>
          <p className="font-churrasco text-xl text-sand-beige mb-12 opacity-90">
            Desfrute do nosso autêntico churrasco brasileiro no conforto da sua casa
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {deliveryServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-wood-brown/30 p-8 rounded-lg border border-rust-orange/30 rustic-border wood-texture backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-brand-red/20 rounded-full rustic-border">
                      <IconComponent size={48} className="text-sand-beige" />
                    </div>
                  </div>
                  <h3 className="font-fazenda text-2xl font-bold text-smoke-white mb-4">
                    {service.name}
                  </h3>
                  <p className="font-churrasco text-leather-tan mb-6">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-brand-red hover:bg-ember-red text-smoke-white font-bold text-lg py-3 rounded-lg transition-all duration-300 shadow-ember rustic-border fire-glow"
                    onClick={() => service.url !== '#' && window.open(service.url, '_blank')}
                  >
                    PEDIR AGORA
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="bg-earth-brown/20 p-8 rounded-lg rustic-border leather-texture backdrop-blur-sm">
            <h3 className="font-fazenda text-2xl font-bold text-smoke-white mb-4 fire-glow">
              Frete Grátis em Pedidos Acima de R$ 80
            </h3>
            <p className="font-churrasco text-sand-beige text-lg">
              Receba seus pratos brasileiros favoritos frescos e quentinhos na sua porta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
