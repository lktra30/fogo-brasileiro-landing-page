import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Loading from "@/components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let windowLoaded = false;
    let chunksLoaded = false;

    const checkReady = () => {
      if (windowLoaded && chunksLoaded) {
        setLoading(false);
      }
    };

    // 1) Espera evento window.load para garantir recursos estáticos (css, imgs iniciais)
    const handleLoad = () => {
      windowLoaded = true;
      checkReady();
    };

    if (document.readyState === "complete") {
      windowLoaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    // 2) Pré-carrega chunks das seções lazy
    Promise.all([
      import("@/components/About"),
      import("@/components/Menu"),
      import("@/components/VisitUs"),
      import("@/components/Promotions"),
    ]).then(() => {
      chunksLoaded = true;
      checkReady();
    });

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) return <Loading />;

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
