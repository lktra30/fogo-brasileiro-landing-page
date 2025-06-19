const About = () => {
  return (
    <section className="min-h-screen flex items-center md:py-24 bg-brand-cream relative border-t-4 border-brand-red overflow-hidden">
      {/* Wood grain texture pattern */}
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
      
      {/* Charcoal and fire decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gray-800/4 rounded-full blur-3xl transform rotate-45 animate-charcoal"></div>
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-amber-700/5 rounded-full blur-3xl animate-smoke"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-red-800/4 rounded-full blur-2xl animate-charcoal"></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-orange-900/4 rounded-full blur-2xl animate-smoke"></div>
      
      {/* Subtle grill marks pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(0,0,0,.5) 50px, rgba(0,0,0,.5) 52px),
                         repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(0,0,0,.5) 50px, rgba(0,0,0,.5) 52px)`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
                <picture>
                  <source srcSet="/lovable-uploads/about-us.webp" type="image/webp" />
                  <img
                    src="/lovable-uploads/about-us.jpeg"
                    alt="Brazilian flags and meat preparation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="640"
                  />
                </picture>
              </div>
            </div>
            
            {/* Content on the right */}
            <div className="order-1 md:order-2">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 bg-white p-6 sm:p-8 rounded-lg shadow-xl border-l-4 sm:border-l-8 border-brand-red">
                <p className="font-body font-medium">
                At Fire Pit, a Southern Brazilian family brings authentic barbecue and warm traditions. Our grill chefs season premium cuts with rock salt and sear them over open flames, delivering smoky flavor and tender texture in every bite.
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
