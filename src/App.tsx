import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { FinanceBasicsPage, HalalInvestingPage, EthicalInvestingPage, ExpatFinancePage, FireWealthPage } from "./pages/CategoryPages";
import ToolsPage from "./pages/ToolsPage";
import ReviewsPage from "./pages/ReviewsPage";
import NewsletterPage from "./pages/NewsletterPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPage from "./pages/PrivacyPage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/finance-basics" element={<FinanceBasicsPage />} />
          <Route path="/halal-investing" element={<HalalInvestingPage />} />
          <Route path="/ethical-investing" element={<EthicalInvestingPage />} />
          <Route path="/expat-finance" element={<ExpatFinancePage />} />
          <Route path="/fire-wealth" element={<FireWealthPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
