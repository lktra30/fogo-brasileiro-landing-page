
import { Button } from "@/components/ui/button";

const Promotions = () => {
  return (
    <section className="py-20 bg-brand-dark-red relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-8xl">🔥</div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            Ofertas Especiais
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black bg-opacity-30 p-8 rounded-lg border border-red-300">
              <h3 className="font-slab text-2xl font-bold text-white mb-4">
                Happy Hour da Brasa
              </h3>
              <p className="font-serif text-white text-lg mb-4">
                Monday - Friday, 5:00 PM - 7:00 PM
              </p>
              <p className="font-sans text-red-200 mb-6">
                30% off all appetizers and premium caipirinhas. Perfect for starting your Brazilian feast!
              </p>
              <div className="text-3xl font-bold text-white">
                30% OFF
              </div>
            </div>

            <div className="bg-black bg-opacity-30 p-8 rounded-lg border border-red-300">
              <h3 className="font-slab text-2xl font-bold text-white mb-4">
                Rodízio Weekend
              </h3>
              <p className="font-serif text-white text-lg mb-4">
                Saturday & Sunday All Day
              </p>
              <p className="font-sans text-red-200 mb-6">
                Unlimited cuts served tableside by our gauchos, including salad bar and traditional sides.
              </p>
              <div className="text-3xl font-bold text-white">
                $65/person
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-lg mb-8">
            <h3 className="font-slab text-3xl font-bold text-white mb-4">
              Birthday Celebration Special
            </h3>
            <p className="font-serif text-white text-xl mb-6">
              Celebrate your special day with us! Free dessert and a special serenade from our Brazilian musicians.
            </p>
            <p className="font-sans text-red-200 text-lg">
              *Valid with party of 4 or more. ID required. Reservations recommended.
            </p>
          </div>

          <Button 
            className="bg-white hover:bg-gray-100 text-black font-bold text-lg px-12 py-4 rounded-lg border-2 border-white transition-all duration-300"
            size="lg"
          >
            BOOK YOUR CELEBRATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
