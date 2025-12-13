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
import FleetPage from "./pages/fleet";
import ContactPage from "./pages/contact";
import StoryPage from "./pages/about";
import HomePage from "./pages/home";
import LoadingScreen from "./components/loadingScreen";
import GalleryPage from "./pages/gallery";

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
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 mansfield-font">
          <style jsx>{`
            /* Grift Font Face - Light */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-light.otf") format("opentype"),
                url("./fonts/grift-light.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Regular */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/NiveauGroteskRegular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Bold */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/Niveau Grotesk Bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Thin */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Thin-iF66c703e503e5b.ttf") format("truetype");
              font-weight: 100;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Thin Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Thin-Italic-iF66c703e4edb9c.ttf") format("truetype");
              font-weight: 100;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Extra Light */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Extra-Light-iF66c703e49cb27.ttf") format("truetype");
              font-weight: 200;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Extra Light Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Extra-Light-Italic-iF66c703e491cc4.ttf") format("truetype");
              font-weight: 200;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Light */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Light-iF66c703e4baba9.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Light Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Light-Italic-iF66c703e4b09c0.ttf") format("truetype");
              font-weight: 300;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Regular */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-iF66c703e50e674.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Italic-iF66c703e4a6951.ttf") format("truetype");
              font-weight: 400;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Medium */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Medium-iF66c703e4cf4a2.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Medium Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Medium-Italic-iF66c703e4c5283.ttf") format("truetype");
              font-weight: 500;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Semi Bold */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Semi-Bold-iF66c703e4e3977.ttf") format("truetype");
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Semi Bold Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Semi-Bold-Italic-iF66c703e4d92e5.ttf") format("truetype");
              font-weight: 600;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Bold */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Bold-iF66c703e473e0c.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Bold Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Bold-Italic-iF66c703e469c14.ttf") format("truetype");
              font-weight: 700;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Extra Bold */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Extra-Bold-iF66c703e487e58.ttf") format("truetype");
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Extra Bold Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Extra-Bold-Italic-iF66c703e47ddeb.ttf") format("truetype");
              font-weight: 800;
              font-style: italic;
              font-display: swap;
            }

            /* Mansfield Font Face - Black */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Black-iF66c703e45fe6e.ttf") format("truetype");
              font-weight: 900;
              font-style: normal;
              font-display: swap;
            }

            /* Mansfield Font Face - Black Italic */
            @font-face {
              font-family: "Mansfield";
              src: url("./fonts/Mansfield-Black-Italic-iF66c703e454469.ttf") format("truetype");
              font-weight: 900;
              font-style: italic;
              font-display: swap;
            }

            /* Font utility classes */
            .grift-font {
              font-family: "Grift", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .niveau-font {
              font-family: "Niveau Grotesk", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .mansfield-font {
              font-family: "Mansfield", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <ScrollToTop />

          <PageWrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
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