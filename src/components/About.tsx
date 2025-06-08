
const About = () => {
  return (
    <section className="py-20 bg-sand-beige parchment-texture relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Decorative line com estilo rústico */}
          <div className="w-32 h-2 bg-gradient-to-r from-earth-brown via-brand-red to-rust-orange mx-auto mb-8 rustic-border"></div>
          
          <h2 className="font-gaucho text-4xl md:text-5xl font-bold text-wood-brown mb-12 text-center">
            Nossa História
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="order-2 md:order-1">
              <div className="aspect-square overflow-hidden rounded-lg shadow-wood rustic-border">
                <img 
                  src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Churrasco brasileiro tradicional"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Content on the right */}
            <div className="order-1 md:order-2">
              <div className="space-y-6 text-lg leading-relaxed text-charcoal-gray">
                <div className="rustic-border p-6 bg-smoke-white/50 wood-texture">
                  <p className="font-fazenda text-xl">
                    No Brasa Viva, trazemos o espírito autêntico do churrasco gaúcho para sua mesa. 
                    Nossos mestres churrasqueiros, treinados nas tradições mais puras do Rio Grande do Sul, 
                    preparam cada corte com a paixão e precisão passadas através de gerações.
                  </p>
                </div>
                
                <div className="rustic-border p-6 bg-leather-tan/20 charcoal-texture">
                  <p className="font-churrasco">
                    Desde a picanha mais nobre até nosso cordeiro especial, cada peça é temperada 
                    com nossa mistura exclusiva de sal grosso e ervas, grelhada sobre brasas vivas, 
                    criando o equilíbrio perfeito entre sabor defumado e textura macia que define 
                    o verdadeiro churrasco brasileiro.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block rustic-border p-4 bg-brand-red/10">
                    <p className="font-gaucho text-xl italic text-brand-red fire-glow">
                      "Mais que uma refeição, é uma celebração da cultura brasileira e da arte do fogo."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom elements */}
          <div className="flex justify-center mt-12 space-x-4">
            <div className="w-8 h-8 bg-earth-brown rounded-full rustic-border"></div>
            <div className="w-6 h-6 bg-brand-red rounded-full rustic-border fire-glow"></div>
            <div className="w-4 h-4 bg-rust-orange rounded-full rustic-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
