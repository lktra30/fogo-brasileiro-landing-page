
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
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="font-body text-xl text-gray-600">
              Find us the authentic Brazilian restaurant and food truck near you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="rounded-lg shadow-xl overflow-hidden relative h-[600px]"
              >
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: location.backgroundImage ? `url(${location.backgroundImage})` : 'none'
                  }}
                />
                
                {/* Frosted overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
                
                <div className="absolute top-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                  <h3 className="font-display text-2xl font-semibold text-white mb-0 text-center">
                    {location.name}
                  </h3>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-white mb-1">Address</h4>
                        <p className="font-body text-gray-200 whitespace-pre-line">
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">📞</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="font-body text-gray-200">{location.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">🕐</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-white mb-1">Hours</h4>
                        <div className="font-body text-gray-200 space-y-1">
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
      <div className="w-32 h-2 bg-gray-800 mx-auto mt-16 shadow-lg" />
    </section>
  );
};

export default VisitUs;
