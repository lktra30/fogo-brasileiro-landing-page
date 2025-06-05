
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import VisitUs from "@/components/VisitUs";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <VisitUs />
      <Promotions />
      <Footer />
    </div>
  );
};

export default Index;
