import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/20 selection:text-primary">
      <Hero />
      <About />
      <Catalog />
      <Advantages />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
