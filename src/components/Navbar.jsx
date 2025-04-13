import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../public/logo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '#About', label: 'About Us' },
    { path: '#Achievements', label: 'Achievements' },
    { path: '#Gallery', label: 'Gallery' },
    { path: '#Contact', label: 'Contact' },
  ];
  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
      const sectionId = path.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu
      }
    } else {
      // Navigate normally for pages
      window.location.href = path;
    }
  };
  return (
    <nav className="glass-effect fixed w-full z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center pr-[50px]">
        <Link to="/" className="text-2xl font-bold text-white flex grid gris-cols-2 items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center space-x-3'
          >
            <img src={`${logo}`} className='h-[40px] w-[40px]'/>
            <p>Archery Club of Uva</p>
          </motion.span>
        </Link>

        <div className="hidden md:flex space-x-8 mr-4">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`relative ${
              location.pathname === link.path ? 'text-accent' : 'text-white hover:text-accent'
              } transition-colors duration-300`}>
            {link.label}
             </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black shadow-lg"
        >
          <div className="px-4 py-2">
            {links.map((link) => (
              <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className="block py-2 text-white hover:text-accent">
            {link.label}
             </button>
              // <Link
              //   key={link.path}
              //   to={link.path}
              //   
              //   onClick={() => setIsOpen(false)}
              // >
              //   {link.label}
              // </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;