
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-brand-wood-dark" id="visit">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-brand-cream mb-4">
              Our <span className="text-brand-red">Locations</span>
            </h2>
            <p className="font-body text-xl text-brand-parchment font-bold">
              Find us the authentic Brazilian restaurant and food truck near you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="rounded-lg shadow-2xl overflow-hidden bg-brand-charcoal border-4 border-brand-wood"
              >
                {/* Image Section */}
                <div className="h-64 relative">
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: location.backgroundImage ? `url(${location.backgroundImage})` : 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 to-transparent" />
                </div>
                
                {/* Content Section */}
                <div className="p-8 bg-brand-charcoal">
                  <h3 className="font-display text-2xl font-bold text-brand-cream mb-6 text-center">
                    <span className="text-brand-red">{location.name}</span>
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 border-2 border-brand-dark-red">
                        <span className="text-white text-lg font-bold">📍</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-brand-red mb-2">Address</h4>
                        <p className="font-body text-brand-parchment whitespace-pre-line font-medium">
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 border-2 border-brand-dark-red">
                        <span className="text-white text-lg font-bold">📞</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-brand-red mb-2">Phone</h4>
                        <p className="font-body text-brand-parchment font-bold">{location.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 border-2 border-brand-dark-red">
                        <span className="text-white text-lg font-bold">🕐</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-brand-red mb-2">Hours</h4>
                        <div className="font-body text-brand-parchment space-y-2 font-medium">
                          {location.hours.map((hour, hourIndex) => (
                            <p key={hourIndex}>{hour}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Divisor */}
      <div className="w-32 h-3 bg-brand-charcoal mx-auto mt-16 shadow-2xl border-2 border-brand-wood" />
    </section>
  );
};

export default VisitUs;
