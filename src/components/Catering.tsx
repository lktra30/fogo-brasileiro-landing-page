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
              <div className="group relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9h.01M15 9h.01" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-red-600 transition-colors duration-300">
                  Delivery & Pickup (Trays)
                </h3>
                
                <ul className="text-gray-700 space-y-4 text-lg relative z-10">
                  <li className="flex items-center group/item">
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full mr-4 shadow-md group-hover/item:shadow-lg transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover/item:text-gray-900 transition-colors duration-200">Menu priced per person</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full mr-4 shadow-md group-hover/item:shadow-lg transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover/item:text-gray-900 transition-colors duration-200">Select trays for pickup or delivery</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full mr-4 shadow-md group-hover/item:shadow-lg transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover/item:text-gray-900 transition-colors duration-200">Perfect for events of 20 or more guests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="group relative bg-gradient-to-br from-white via-gray-50 to-white p-8 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                  On-Site Experience
                </h3>
                
                <ul className="text-gray-700 space-y-4 text-lg relative z-10">
                  <li className="flex items-center group/item">
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mr-4 shadow-md group-hover/item:shadow-lg transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover/item:text-gray-900 transition-colors duration-200">Fully staffed service with our Fire Pit experts</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mr-4 shadow-md group-hover/item:shadow-lg transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover/item:text-gray-900 transition-colors duration-200">Pricing available upon request</span>
                  </li>
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