import { Button } from "@/components/ui/button";

const Catering = () => {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background texture and patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(139,69,19,.3) 20px, rgba(139,69,19,.3) 22px),
                          repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(139,69,19,.3) 20px, rgba(139,69,19,.3) 22px)`,
        }}></div>
      </div>
      
      {/* Smoke effect gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-900/5 via-transparent to-amber-900/3"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/2 to-gray-900/4"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gray-800/4 rounded-full blur-3xl transform rotate-45 animate-charcoal"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-amber-700/5 rounded-full blur-3xl animate-smoke"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-800/4 rounded-full blur-2xl animate-charcoal"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Decorative line */}
          <div className="w-32 h-2 bg-red-600 mx-auto mb-10 shadow-lg" />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center tracking-wide drop-shadow-md">
            Catering Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* First Large Image */}
            <div className="lg:col-span-2">
              <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-2xl border-4 border-gray-800">
                <img
                  src="/lovable-uploads/catering1.jpeg"
                  alt="Catering setup with Brazilian BBQ"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Delivery & Pickup (Trays)
                </h3>
                <ul className="text-gray-600 space-y-3 text-lg">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Menu priced per tray and portion
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Select trays for pickup or delivery.
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Perfect for events of 20 or more guests
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-xl border-l-8 border-red-600">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  On-Site Experience
                </h3>
                <ul className="text-gray-600 space-y-3 text-lg">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Fully staffed service with our Fire Pit experts
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Pricing available upon request
                  </li>
                  {/* <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    Flexible guest counts
                  </li> */}
                </ul>
              </div>
            </div>
            
            {/* Second Large Image */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-2xl border-4 border-gray-800">
                <img
                  src="/lovable-uploads/catering2.jpeg"
                  alt="Brazilian BBQ catering for private events"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-white p-8 rounded-lg shadow-xl border-2 border-red-600">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Plan Your Event?
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your catering needs and create an unforgettable Brazilian BBQ experience for your guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                size="lg"
                asChild
              >
                <a href="#visit">Get Quote</a>
              </Button>
              <Button 
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                size="lg"
                asChild
              >
                <a href="https://drive.google.com/drive/folders/1567TmUbpYRhg0bg9Wk00IuJ-RyjDCS0T">View Menu</a>
              </Button>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="w-32 h-2 bg-gray-800 mx-auto mt-16 shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Catering; 