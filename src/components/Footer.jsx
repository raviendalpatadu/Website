import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="glass-effect py-8 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Archery Club of Uva</h3>
            <p className="text-gray-300">
              Empowering archers, fostering excellence, and promoting the noble sport of archery.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-300 hover:text-accent">About Us</a></li>
              <li><a href="/#achievements" className="text-gray-300 hover:text-accent">Achievements</a></li>
              <li><a href="/#gallery" className="text-gray-300 hover:text-accent">Gallery</a></li>
              <li><a href="/#contact" className="text-gray-300 hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300">
            Rotoruwa, Kabillawela North,<br />
            Bandarawela, Sri Lanka<br/>
              Email: uvaarchery@gmail.com<br />
              Phone: +94 123 456 789
            </p>
          </div>
        </motion.div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© 2024 Archery Club of Uva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;