
const About = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div className="w-24 h-1 bg-brand-red mx-auto mb-8" />
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Nossa História
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="font-serif">
              At Brasa Viva, we bring the authentic spirit of Brazilian churrasco to your table. 
              Our master grill chefs, trained in the traditional gaucho methods, prepare each cut 
              with the passion and precision that has been passed down through generations.
            </p>
            
            <p className="font-sans">
              From the finest picanha to our signature lamb, every piece of meat is seasoned with 
              our special blend of rock salt and grilled over open flames, creating the perfect 
              balance of smoky flavor and tender texture that defines true Brazilian barbecue.
            </p>
            
            <p className="font-serif italic text-brand-dark-red">
              "More than a meal, it's a celebration of Brazilian culture and the art of fire."
            </p>
          </div>
          
          {/* Decorative bottom line */}
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
};

export default About;
