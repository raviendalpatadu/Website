import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import NewGallery from "./pages/NewGallery";
import Contact from "./components/contact/Contact";
import Loader from "./components/loader/loader";
import { useState, useEffect } from "react";
import Achievement from "./components/achievements/Achievement";
import DynamicBackground from "./components/DynamicBackground";
import { 
  HeroBackground, 
  AboutBackground, 
  AchievementsBackground, 
  GalleryBackground, 
  ContactBackground 
} from "./components/ArcheryBackgrounds";

// Import all images
import test3 from "../src/images/img.jpg";
import test2 from "../src/images/test2.jpg";
import test4 from "../src/images/test4.jpg";
import test1Mobile from "../src/images/test1-mobile.jpg";
import test2Mobile from "../src/images/test2-mobile.jpg";
import test3Mobile from "../src/images/test3-mobile.jpg";
import img1 from "../src/AssetsFolder/img1.jpeg";
import img2 from "../src/AssetsFolder/img2.jpeg";
import img3 from "../src/AssetsFolder/img3.jpeg";
import field from "../src/AssetsFolder/field.png";
import archer from "../src/AssetsFolder/archer.png";
import arrow from "../src/AssetsFolder/arrow.png";
import target from "../src/AssetsFolder/target.png";
import stars from "../src/AssetsFolder/stars.png";
import logo from "../src/AssetsFolder/logo.jpeg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const preloadImages = async () => {
      // List of all images that need to be preloaded
      const images = [
        // Home page images
        test3,
        test2,
        test4,
        test1Mobile,
        test2Mobile,
        test3Mobile,
        // HomeSecond images
        img1,
        img2,
        img3,
        // Parallax images
        field,
        archer,
        arrow,
        target,
        stars,
        // Other images
        logo,
      ];

      let loadedCount = 0;
      const totalImages = images.length;

      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
            resolve();
          };
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        await Promise.all(images.map(loadImage));
        // Add a small delay to ensure smooth transition
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        // If there's an error, still show the website after a delay
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    preloadImages();
  }, []);  return (
    <Router>
      <div className="min-h-screen flex flex-col relative z-10">
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-white text-center flex items-center justify-center flex-col">
              <Loader />
              <p className="text-lg mt-4">Loading amazing shots...</p>
              <p className="text-sm text-gray-400 mt-2">Please wait a moment</p>
              <div className="w-48 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">{loadingProgress}%</p>
            </div>
          </div>        ) : (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
            <Navbar />
            <main>
              <Routes>
                <Route
                  path="/Website"
                  element={
                    <div className="space-y-0">                      {/* Hero Section - Keep original design */}
                      <section id="Home" className="relative">
                        <HeroBackground />
                        <Home />
                      </section>
                      
                      {/* Modern About Section */}
                      <section id="About" className="bg-gradient-to-b from-gray-900 to-slate-800 relative">
                        <AboutBackground />
                        <About />
                      </section>
                      
                      {/* Redesigned Achievements Section */}
                      <section id="Achievements" className="bg-gradient-to-b from-slate-800 to-gray-900 relative">
                        <AchievementsBackground />
                        <Achievement />
                      </section>
                      
                      {/* Contemporary Gallery Section */}
                      <section id="Gallery" className="bg-gradient-to-b from-gray-900 to-slate-800 relative">
                        <GalleryBackground />
                        <NewGallery />
                      </section>
                      
                      {/* Modern Contact Section */}
                      <section id="Contact" className="bg-gradient-to-b from-slate-800 to-black relative">
                        <ContactBackground />
                        <Contact />
                      </section>
                    </div>
                  }
                />
                <Route path="/newgallery" element={<NewGallery />} />
              </Routes>            </main>
            <footer className="relative">
              <DynamicBackground section="footer" />
              <Footer />
            </footer>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
