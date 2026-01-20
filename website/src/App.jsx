import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider, useLanguage } from "./lunguageContext";
import { Toaster } from "sonner";
import Navigation from "./components/nav";
import Footer from "./components/footer";
import ServicesPage from "./pages/services";
import FAQPage from "./pages/faq";
import BlogPage from "./pages/blog";
import MembershipPage from "./pages/membership";
import ContactPage from "./pages/contact";
import StoryPage from "./pages/about";
import HomePage from "./pages/home";
import LoadingScreen from "./components/loadingScreen";
import GalleryPage from "./pages/gallery";
import ReviewsPage from "./pages/reviews";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // On initial load, just set loading to false after minimum time
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // For subsequent navigation, show loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location, isInitialLoad]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <ScrollToTop />

          <PageWrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
            <Footer />
          </PageWrapper>

          <Toaster
            position="top-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#581c87",
                color: "#fbbf24",
                border: "1px solid #fbbf24",
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;