
const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      review: "Absolutamente incrível! A picanha estava perfeitamente grelhada e o atendimento foi excepcional. Me senti como se estivesse de volta ao Brasil.",
      rating: 5,
      location: "São Paulo"
    },
    {
      name: "Carlos Rodriguez",
      review: "Melhor churrasco brasileiro fora do Brasil. A qualidade da carne é excepcional e a preparação tradicional se nota em cada garfada.",
      rating: 5,
      location: "Miami"
    },
    {
      name: "Ana Costa",
      review: "Os sabores autênticos e o ambiente acolhedor tornam este lugar especial. O cordeiro estava macio e perfeitamente temperado.",
      rating: 5,
      location: "Rio de Janeiro"
    },
    {
      name: "João Mendoza",
      review: "Experiência de churrasco excepcional. Os gauchos conhecem seu ofício e isso se mostra na qualidade de cada corte servido.",
      rating: 5,
      location: "Porto Alegre"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-ember-red fire-glow' : 'text-charcoal-gray'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-wood-brown leather-texture relative">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-6 h-6 bg-ember-red rounded-full opacity-60 animate-fire-dance"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-rust-orange rounded-full opacity-50 animate-fire-dance" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-32 h-2 bg-gradient-to-r from-ember-red via-brand-red to-rust-orange mx-auto mb-8 rustic-border fire-glow"></div>
          <h2 className="font-gaucho text-4xl md:text-5xl font-bold text-smoke-white mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="font-churrasco text-xl text-sand-beige max-w-2xl mx-auto">
            Experiências autênticas compartilhadas por nossos queridos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-smoke-white/90 p-8 rounded-lg border border-earth-brown hover:border-brand-red transition-all duration-300 rustic-border wood-texture backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="font-churrasco text-charcoal-gray text-lg mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>
              
              <div className="border-t border-earth-brown/30 pt-4">
                <p className="font-fazenda text-brand-red font-bold text-lg fire-glow">
                  {testimonial.name}
                </p>
                <p className="font-churrasco text-charcoal-gray">
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
