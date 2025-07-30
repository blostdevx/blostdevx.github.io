import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CybersecurityComingSoon from "@/pages/cybersecurity-coming-soon";
import GitTutorial from "@/pages/git-tutorial";
import ContentFilterPage from "@/pages/content-filter";
import QATestingCourse from "@/pages/qa-testing-course";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cybersecurity" component={CybersecurityComingSoon} />
      <Route path="/git-tutorial" component={GitTutorial} />
      <Route path="/content" component={ContentFilterPage} />
      <Route path="/qa-testing-course" component={QATestingCourse} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
