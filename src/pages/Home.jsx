import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Archer from "../public/archer.png";


const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const slidingText={
    initial:{
        x:0,
    },
    animate:{
        x:"-120%", //this is to move the text to the left
        transition:{
            repeat:Infinity,
            repeatType:"mirror", //this is to repeat the text after ending
            duration:20,
        },
        
    }
}
  return (
    <div className="min-h-screen relative absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative w-full overflow-hidden z-20">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center flex flex-col md:grid lg:grid-cols-2 md:grid-cols-3 items-center justify-center z-2"
>
  <div>
    <h1 className="text-2xl md:text-6xl font-bold mb-6 text-shadow-xl">
      Welcome to the <p>Archery Club of Uva</p>
    </h1>
    <p className="text-l text-white-300 mb-8">
      Discover the art of precision and discipline through archery
    </p>
    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
    >
      Join Us Today
    </motion.a>
  </div>

  {/* Center image only on mobile */}
  <img 
    src={Archer} 
    className="lg:h-[50vh] lg:w-[30vw] h-[40vh] w-[80%] mx-auto md:w-[20vw] md:mx-0 z-20"
  />
</motion.div>

        {/* <div cla */}
        <motion.div className="absolute text-[50vh]  bottom-100 text-white/10 whitespace-nowrap font-bold w-full z-10" variants={slidingText} initial="initial" animate="animate">
            Archery Club of Uva
        </motion.div>
      </section>
    </div>
  );
};

export default Home;