
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientDashboard from "./pages/client/Dashboard";
import Aftercare from "./pages/Aftercare";
import FAQ from "./pages/FAQ";

// Dashboard Pages
import DashboardOverview from "./pages/dashboard/Index";
import DashboardAppointments from "./pages/dashboard/Appointments";
import DashboardClients from "./pages/dashboard/Clients";
import DashboardAnalytics from "./pages/dashboard/Analytics";
import DashboardChatBot from "./pages/dashboard/ChatBot";
import DashboardBlog from "./pages/dashboard/Blog";
import DashboardSettings from "./pages/dashboard/Settings";
import DashboardGallery from "./pages/dashboard/Gallery";
import DashboardServices from "./pages/dashboard/Services";
import DashboardReports from "./pages/dashboard/Reports";
import DashboardLiveChat from "./pages/dashboard/LiveChat";
import DashboardWhatsApp from "./pages/dashboard/WhatsApp";

// Service Pages
import TattooService from "./pages/services/TattooService";
import EyebrowsService from "./pages/services/EyebrowsService";
import PiercingsService from "./pages/services/PiercingsService";
import TouchUpsService from "./pages/services/TouchUpsService";
import ConsultationsService from "./pages/services/ConsultationsService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/aftercare" element={<Aftercare />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Service Detail Pages */}
            <Route path="/services/tattoos" element={<TattooService />} />
            <Route path="/services/eyebrows" element={<EyebrowsService />} />
            <Route path="/services/piercings" element={<PiercingsService />} />
            <Route path="/services/touch-ups" element={<TouchUpsService />} />
            <Route path="/services/consultations" element={<ConsultationsService />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Client Dashboard Routes */}
            <Route path="/client" element={<ClientDashboard />} />
            
            {/* Admin/Staff Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/dashboard/appointments" element={<DashboardAppointments />} />
            <Route path="/dashboard/clients" element={<DashboardClients />} />
            <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
            <Route path="/dashboard/chatbot" element={<DashboardChatBot />} />
            <Route path="/dashboard/blog" element={<DashboardBlog />} />
            <Route path="/dashboard/settings" element={<DashboardSettings />} />
            <Route path="/dashboard/gallery" element={<DashboardGallery />} />
            <Route path="/dashboard/services" element={<DashboardServices />} />
            <Route path="/dashboard/reports" element={<DashboardReports />} />
            <Route path="/dashboard/livechat" element={<DashboardLiveChat />} />
            <Route path="/dashboard/whatsapp" element={<DashboardWhatsApp />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
