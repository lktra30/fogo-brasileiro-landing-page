
const About = () => {
  return (
    <section className="py-24 bg-brand-wood-dark relative border-t-4 border-brand-red">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Decorative line */}
          <div className="w-32 h-3 bg-brand-red mx-auto mb-10 shadow-2xl border-2 border-brand-dark-red" />
          
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-cream mb-16 text-center tracking-wide drop-shadow-2xl">
            Our <span className="text-brand-red">History</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image on the left - hidden on mobile */}
            <div className="order-2 md:order-1 hidden md:block">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl border-6 border-brand-charcoal">
                <img 
                  src="/lovable-uploads/12436d78-3c5d-481e-a0bb-fe557b9cd27a.png" 
                  alt="Brazilian flags and meat preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content on the right */}
            <div className="order-1 md:order-2">
              <div className="space-y-8 text-xl leading-relaxed text-brand-cream bg-brand-charcoal p-10 rounded-lg shadow-2xl border-l-8 border-brand-red">
                <p className="font-body font-semibold text-brand-parchment">
                At <span className="text-brand-red font-bold">Fire Pit</span>, we are a Brazilian family from Southern Brazil bringing the authentic spirit of Brazilian churrasco and traditional family values. Our grill chefs, trained in traditional gaucho methods, prepare each cut with passion and precision passed down through generations.
                </p>
                
                <p className="font-body font-normal text-brand-cream">
                  From the finest picanha to our signature lamb, every piece of meat is seasoned with our special blend of rock salt and grilled over open flames, creating the perfect balance of smoky flavor and tender texture that defines true Brazilian barbecue.
                </p>
                
                <p className="font-body italic text-brand-red font-black text-2xl border-t-2 border-brand-red pt-6">
                  "We bring the heart of Southern Brazil to our community through authentic Brazilian barbecue at affordable prices."
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="w-32 h-3 bg-brand-charcoal mx-auto mt-16 shadow-2xl border-2 border-brand-wood" />
        </div>
      </div>
    </section>
  );
};

export default About;
