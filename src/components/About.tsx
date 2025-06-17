const About = () => {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-24 bg-brand-cream relative border-t-4 border-brand-red">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Decorative line */}
          <div className="w-32 h-2 bg-brand-red mx-auto mb-10 shadow-lg" />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 md:mb-16 text-center tracking-wide drop-shadow-md">
            Our History
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image on the left - hidden on mobile */}
            <div className="order-2 md:order-1 flex justify-center md:block mb-8 md:mb-0">
              <div className="aspect-square h-72 sm:h-60 md:h-auto overflow-hidden rounded-lg shadow-2xl border-4 border-gray-800 max-w-xs md:max-w-none">
                <img 
                  src="/lovable-uploads/about-us.jpeg" 
                  alt="Brazilian flags and meat preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content on the right */}
            <div className="order-1 md:order-2">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 bg-white p-6 sm:p-8 rounded-lg shadow-xl border-l-4 sm:border-l-8 border-brand-red">
                <p className="font-body font-medium">
                At Fire Pit, a Southern Brazilian family brings authentic churrasco and warm traditions. Our grill chefs season premium cuts with rock salt and sear them over open flames, delivering smoky flavor and tender texture in every bite.
                </p>
                
                <p className="font-body italic text-brand-dark-red font-semibold text-2xl">
                  "We bring the heart of Southern Brazil to our community through authentic Brazilian barbecue at affordable prices."
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="w-32 h-2 bg-gray-800 mx-auto mt-16 shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
