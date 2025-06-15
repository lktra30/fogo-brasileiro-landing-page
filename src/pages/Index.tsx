
import Header from "@/components/Header";
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
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <Promotions />
      <div id="visit">
        <VisitUs />
      </div>
      <div id="about">
        <About />
      </div>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Index;
