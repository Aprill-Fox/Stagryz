import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import ServicesIndex from "./pages/ServicesIndex";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import FleetPage from "./pages/FleetPage";
import GalleryPage from "./pages/GalleryPage";
import ReviewsPage from "./pages/ReviewsPage";
import FaqPage from "./pages/FaqPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./lib/theme";

function PageWrap({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const loc = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={loc.pathname} location={loc}>
        <Route path="/" element={<PageWrap><HomePage /></PageWrap>} />
        <Route path="/services" element={<PageWrap><ServicesIndex /></PageWrap>} />
        <Route path="/services/:slug" element={<PageWrap><ServicePage /></PageWrap>} />
        <Route path="/about" element={<PageWrap><AboutPage /></PageWrap>} />
        <Route path="/fleet" element={<PageWrap><FleetPage /></PageWrap>} />
        <Route path="/gallery" element={<PageWrap><GalleryPage /></PageWrap>} />
        <Route path="/reviews" element={<PageWrap><ReviewsPage /></PageWrap>} />
        <Route path="/faq" element={<PageWrap><FaqPage /></PageWrap>} />
        <Route path="/blog" element={<PageWrap><BlogPage /></PageWrap>} />
        <Route path="/blog/:slug" element={<PageWrap><BlogPostPage /></PageWrap>} />
        <Route path="/contacts" element={<PageWrap><ContactsPage /></PageWrap>} />
        <Route path="*" element={<PageWrap><NotFoundPage /></PageWrap>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
          <Toaster position="top-center" richColors closeButton />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
