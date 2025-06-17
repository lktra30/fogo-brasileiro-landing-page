import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Suspense, lazy } from "react";
import Footer from "@/components/Footer";

// Seções abaixo da primeira dobra carregadas sob demanda
const About = lazy(() => import("@/components/About"));
const Menu = lazy(() => import("@/components/Menu"));
const VisitUs = lazy(() => import("@/components/VisitUs"));
const Promotions = lazy(() => import("@/components/Promotions"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>

      <Suspense fallback={null}>
        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="promotions">
          <Promotions />
        </div>

        <div id="visit">
          <VisitUs />
        </div>
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;
