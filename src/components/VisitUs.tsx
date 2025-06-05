
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  return (
    <section className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Venha Nos Visitar
            </h2>
            <p className="font-sans text-xl text-gray-600">
              Find us in the heart of the city, where authentic Brazilian flavors await
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="bg-gray-300 h-80 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <p className="text-gray-700 font-serif">Interactive Map</p>
                <p className="text-gray-600 text-sm">123 Churrasco Avenue</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <h3 className="font-slab text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="font-sans text-gray-700">
                    123 Churrasco Avenue<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <h3 className="font-slab text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="font-sans text-gray-700">(555) 123-MEAT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🕐</span>
                </div>
                <div>
                  <h3 className="font-slab text-xl font-bold text-gray-900 mb-2">Hours</h3>
                  <div className="font-sans text-gray-700 space-y-1">
                    <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p>Sunday: 4:00 PM - 9:00 PM</p>
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
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
