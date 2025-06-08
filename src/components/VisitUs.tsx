
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  const locations = [
    {
      name: "Unidade Centro",
      address: "Rua do Churrasco, 123\nCentro Histórico\nCidade, Estado 12345",
      phone: "(55) 123-CARNE",
      hours: [
        "Segunda - Quinta: 17:00 - 22:00",
        "Sexta - Sábado: 17:00 - 23:00", 
        "Domingo: 16:00 - 21:00"
      ]
    },
    {
      name: "Unidade Zona Sul",
      address: "Avenida Gaúcha, 456\nBairro Tradicional\nCidade, Estado 12346",
      phone: "(55) 456-BRASA",
      hours: [
        "Segunda - Quinta: 16:00 - 22:00",
        "Sexta - Sábado: 16:00 - 23:00",
        "Domingo: 15:00 - 21:00"
      ]
    }
  ];

  return (
    <section className="py-20 bg-sand-beige parchment-texture relative">
      {/* Elementos decorativos */}
      <div className="absolute top-16 left-16 w-8 h-8 bg-earth-brown rounded-full opacity-30 rustic-border"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-rust-orange rounded-full opacity-40 rustic-border"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-32 h-2 bg-gradient-to-r from-earth-brown via-brand-red to-rust-orange mx-auto mb-8 rustic-border"></div>
            <h2 className="font-gaucho text-4xl md:text-5xl font-bold text-wood-brown mb-4">
              Nossas Casas
            </h2>
            <p className="font-churrasco text-xl text-charcoal-gray">
              Encontre-nos no coração da cidade, onde os sabores autênticos brasileiros te esperam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-smoke-white rounded-lg shadow-wood p-8 rustic-border wood-texture">
                <h3 className="font-fazenda text-2xl font-bold text-wood-brown mb-6 text-center">
                  {location.name}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 rustic-border fire-glow">
                      <span className="text-smoke-white text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-fazenda text-lg font-bold text-wood-brown mb-2">Endereço</h4>
                      <p className="font-churrasco text-charcoal-gray whitespace-pre-line">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 rustic-border fire-glow">
                      <span className="text-smoke-white text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="font-fazenda text-lg font-bold text-wood-brown mb-2">Telefone</h4>
                      <p className="font-churrasco text-charcoal-gray">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 rustic-border fire-glow">
                      <span className="text-smoke-white text-sm">🕐</span>
                    </div>
                    <div>
                      <h4 className="font-fazenda text-lg font-bold text-wood-brown mb-2">Horários</h4>
                      <div className="font-churrasco text-charcoal-gray space-y-1">
                        {location.hours.map((hour, hourIndex) => (
                          <p key={hourIndex}>{hour}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-brand-red hover:bg-ember-red text-smoke-white font-bold text-lg py-3 shadow-ember transition-all duration-300 rustic-border fire-glow"
                    size="lg"
                  >
                    COMO CHEGAR
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
