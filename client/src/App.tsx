import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CybersecurityPage from "@/pages/cybersecurity";
import PythonPage from "@/pages/python";
import GitPage from "@/pages/git";
import SecurityProtocolsPage from "@/pages/security-protocols";
import ContentFilterPage from "@/pages/content-filter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cybersecurity" component={CybersecurityPage} />
      <Route path="/python" component={PythonPage} />
      <Route path="/git" component={GitPage} />
      <Route path="/security-protocols" component={SecurityProtocolsPage} />
      <Route path="/content" component={ContentFilterPage} />
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
