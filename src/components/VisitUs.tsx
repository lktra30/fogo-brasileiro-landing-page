
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  const locations = [
    {
      name: "Downtown Location",
      address: "123 Churrasco Avenue\nDowntown District\nCity, State 12345",
      phone: "(555) 123-MEAT",
      hours: [
        "Monday - Thursday: 5:00 PM - 10:00 PM",
        "Friday - Saturday: 5:00 PM - 11:00 PM",
        "Sunday: 4:00 PM - 9:00 PM"
      ]
    },
    {
      name: "Westside Location",
      address: "456 Brazilian Way\nWestside Plaza\nCity, State 12346",
      phone: "(555) 456-GRILL",
      hours: [
        "Monday - Thursday: 4:00 PM - 10:00 PM",
        "Friday - Saturday: 4:00 PM - 11:00 PM",
        "Sunday: 3:00 PM - 9:00 PM"
      ]
    }
  ];

  return (
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="font-sans text-xl text-gray-600">
              Find us in the heart of the city, where authentic Brazilian flavors await
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-slab text-2xl font-bold text-gray-900 mb-6 text-center">
                  {location.name}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-slab text-lg font-bold text-gray-900 mb-2">Address</h4>
                      <p className="font-sans text-gray-700 whitespace-pre-line">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h4 className="font-slab text-lg font-bold text-gray-900 mb-2">Phone</h4>
                      <p className="font-sans text-gray-700">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🕐</span>
                    </div>
                    <div>
                      <h4 className="font-slab text-lg font-bold text-gray-900 mb-2">Hours</h4>
                      <div className="font-sans text-gray-700 space-y-1">
                        {location.hours.map((hour, hourIndex) => (
                          <p key={hourIndex}>{hour}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-brand-red hover:bg-red-700 text-white font-bold text-lg py-3"
                    size="lg"
                  >
                    GET DIRECTIONS
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
