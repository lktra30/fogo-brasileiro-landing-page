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
      backgroundImage: "/lovable-uploads/solaire-loc_11zon.webp"
    },
    {
      name: "Food-Truck Location",
      address: "Golden Arcade Shopping Center \n 804 Rockville Pike - Rockville, MD 20852",
      phone: "(301) 789-8709",
      hours: [
        "Tuesday - Saturday: 11:00 AM - 7:30 PM"
      ],
      backgroundImage: "/lovable-uploads/foodtruck-loc_11zon.webp"
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
              Find the authentic Brazilian restaurant and food truck near you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="rounded-lg shadow-xl overflow-hidden bg-white"
              >
                {/* Image Section */}
                <div className="h-64 relative">
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: location.backgroundImage ? `url(${location.backgroundImage})` : 'none'
                    }}
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 bg-white">
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6 text-center">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="font-body text-gray-700 whitespace-pre-line mb-3">
                          {location.address}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const encodedAddress = encodeURIComponent(location.address.replace(/\n/g, ', '));
                              window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
                            }}
                            className="text-xs hover:bg-brand-red hover:text-white transition-colors"
                          >
                            Open in Google Maps
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const encodedAddress = encodeURIComponent(location.address.replace(/\n/g, ', '));
                              window.open(`https://waze.com/ul?q=${encodedAddress}`, '_blank');
                            }}
                            className="text-xs hover:bg-brand-red hover:text-white transition-colors"
                          >
                            Open in Waze
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">📞</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                        <p className="font-body text-gray-700 mb-3">{location.phone}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const phoneNumber = location.phone.replace(/[^\d]/g, '');
                            window.open(`sms:${phoneNumber}`, '_self');
                          }}
                          className="text-xs hover:bg-brand-red hover:text-white transition-colors"
                        >
                          Send SMS
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">🕐</span>
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-gray-900 mb-1">Hours</h4>
                        <div className="font-body text-gray-700 space-y-1">
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
