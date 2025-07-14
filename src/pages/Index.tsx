import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Suspense, lazy, useEffect } from "react";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { gtmPageView } from "@/lib/gtm";

// Seções abaixo da primeira dobra carregadas sob demanda
const About = lazy(() => import("@/components/About"));
const Menu = lazy(() => import("@/components/Menu"));
const VisitUs = lazy(() => import("@/components/VisitUs"));
const Promotions = lazy(() => import("@/components/Promotions"));
const Catering = lazy(() => import("@/components/Catering"));

const Index = () => {
  useEffect(() => {
    // Track page view when component mounts
    gtmPageView('/', 'Fire Pit - Authentic Brazilian Barbecue');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>

      <Suspense fallback={<Loading />}>
        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="promotions">
          <Promotions />
        </div>

        <div id="catering">
          <Catering />
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
