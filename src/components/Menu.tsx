
import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuItems = [
    {
      name: "Picanha Premium",
      description: "The crown jewel of Brazilian barbecue, seasoned with rock salt and grilled to perfection",
      price: "$38",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cordeiro Especial",
      description: "Tender lamb marinated in herbs and slow-roasted over open coals",
      price: "$42",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Costela Defumada",
      description: "Smoked beef ribs with our signature dry rub, fall-off-the-bone tender",
      price: "$35",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cardápio Especial
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Premium cuts prepared with traditional Brazilian techniques and served with authentic sides
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-80 object-cover rounded-lg shadow-2xl"
                />
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="font-slab text-3xl font-bold text-gray-900 mb-4">
                  {item.name}
                </h3>
                <p className="font-serif text-lg text-gray-700 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6">
                  <span className="font-slab text-2xl font-bold text-brand-red">
                    {item.price}
                  </span>
                  <Button 
                    variant="outline" 
                    className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Add to Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-10 py-3 rounded-lg"
            size="lg"
          >
            VIEW FULL MENU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
