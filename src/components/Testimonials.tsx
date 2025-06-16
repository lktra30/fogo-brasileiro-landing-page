
const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      review: "Absolutely incredible! The picanha was perfectly grilled and the service was exceptional. Felt like I was back in Brazil.",
      rating: 5,
      location: "São Paulo"
    },
    {
      name: "James Rodriguez",
      review: "Best Brazilian barbecue outside of Brazil. The meat quality is outstanding and the traditional preparation shows in every bite.",
      rating: 5,
      location: "Miami"
    },
    {
      name: "Ana Costa",
      review: "The authentic flavors and warm atmosphere make this place special. The lamb was tender and perfectly seasoned.",
      rating: 5,
      location: "Rio de Janeiro"
    },
    {
      name: "Carlos Mendoza",
      review: "Outstanding churrasco experience. The gauchos know their craft and it shows in the quality of every cut served.",
      rating: 5,
      location: "Buenos Aires"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-2xl ${i < rating ? 'text-brand-red' : 'text-brand-wood'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-brand-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-cream mb-4">
            O Que Dizem Nossos <span className="text-brand-red">Clientes</span>
          </h2>
          <p className="text-xl text-brand-parchment max-w-2xl mx-auto font-bold">
            Authentic experiences shared by our valued guests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-brand-wood-dark p-8 rounded-lg border-4 border-brand-wood hover:border-brand-red transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-brand-parchment text-lg mb-6 leading-relaxed italic font-medium">
                "{testimonial.review}"
              </p>
              
              <div className="border-t-2 border-brand-red pt-4">
                <p className="text-brand-red font-black text-lg">
                  {testimonial.name}
                </p>
                <p className="text-brand-wood-light font-bold">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
