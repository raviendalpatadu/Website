import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements1';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Parallax from './components/Parallax';
import HomeSecond from './pages/HomeSecond';
import Achievement from './components/achievements/Achievement';



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
        <section id="Home" className="relative h-[100vh] md:h-screen snap-start md:snap-center">
        <Home/>
      </section>
      <section className="relative h-[180vh] md:h-screen snap-start md:snap-center">
        <HomeSecond/>
      </section>
        <section className="relative h-[100vh] md:h-screen snap-start md:snap-center">
        <Parallax type="About Us"/>
      </section>
      <section id="About" className="px-4 relative h-[180vh] md:h-screen snap-start md:snap-center">
        <About/>  
      </section>
      <section  className="py-4 relative h-[100vh] md:h-screen snap-start md:snap-center" id="Achievements">
        <Parallax type="Achievements"/>
      </section>
      <Achievement />
      <section id="Gallery" className="px-4 relative h-[60vh] md:h-screen md:snap-center">
        <Gallery/>  
      </section>
      <section id="Contact" className="px-4 relative h-[140vh] snap-start md:h-screen md:snap-center">
        <Contact/>  
      </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;