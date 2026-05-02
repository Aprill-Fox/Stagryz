import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster position="top-center" richColors closeButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
