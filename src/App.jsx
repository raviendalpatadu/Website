import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements1";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import HomeSecond from "./pages/HomeSecond";
import NewGallery from "./pages/NewGallery";
import Achievement from "./components/achievements/Achievement";
import Contact from "./components/contact/Contact";
import Loader from "./components/loader/loader";
import { useState, useEffect } from "react";

// Import all images
import test3 from "../src/images/img.jpg";
import test2 from "../src/images/test2.jpg";
import test4 from "../src/images/test4.jpg";
import test1Mobile from "../src/images/test1-mobile.jpg";
import test2Mobile from "../src/images/test2-mobile.jpg";
import test3Mobile from "../src/images/test3-mobile.jpg";
import img1 from "../src/public/img1.jpeg";
import img2 from "../src/public/img2.jpeg";
import img3 from "../src/public/img3.jpeg";
import field from "../src/public/field.png";
import archer from "../src/public/archer.png";
import arrow from "../src/public/arrow.png";
import target from "../src/public/target.png";
import stars from "../src/public/stars.png";
import logo from "../src/public/logo.jpeg";

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
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
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
          </div>
        ) : (
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <section
                        id="Home"
                        className="relative h-[100vh] md:h-screen snap-start md:snap-center"
                      >
                        <Home />
                      </section>
                      <section className="relative h-[180vh] md:h-screen snap-start md:snap-center">
                        <HomeSecond />
                      </section>
                      <section className="relative h-[100vh] md:h-screen snap-start md:snap-center">
                        <Parallax type="About Us" />
                      </section>
                      {/* <section
                        id="About"
                        className="px-4 relative h-[180vh] md:h-screen snap-start md:snap-center"
                      >
                        <About />
                      </section> */}
                      <section
                        className="py-4 relative h-[100vh] md:h-screen snap-start md:snap-center"
                        id="Achievements"
                      >
                        <Parallax type="Achievements" />
                      </section>
                      <Achievement />
                      <section
                        id="Gallery"
                        className="px-4 relative h-[60vh] md:h-screen md:snap-center"
                      >
                        <Gallery />
                      </section>
                      {/* <section
                        id="Contact"
                        className="px-4 relative h-[140vh] snap-start md:h-screen md:snap-center"
                      >
                        <Contact />
                      </section> */}
                    </>
                  }
                />
                <Route path="/newgallery" element={<NewGallery />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
