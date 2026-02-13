import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { trackPageView } from "@/utils/analytics";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import About from "@/pages/About";
import Areas from "@/pages/Areas";
import Quote from "@/pages/Quote";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/not-found";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition = {
  duration: 0.2,
  ease: "easeInOut",
};

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    if (!location.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
}

function Router() {
  const [location] = useLocation();

  // Track SPA page views on route changes
  useEffect(() => {
    trackPageView(location, document.title);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/:serviceId" component={ServiceDetail} />
          <Route path="/about" component={About} />
          <Route path="/areas" component={Areas} />
          <Route path="/quote" component={Quote} />
          <Route path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
