import { motion, useScroll, useTransform } from 'framer-motion';
import Archer from "../public/archer.png";
import { useRef } from 'react';
import logo from "../public/logo.jpeg"

const Home = () => {
  const textVariants ={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            staggerChildren:1,
            duration:1,
        }
    },
    
}
const imgVariant ={
  initial:{
      x:500,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          staggerChildren:1,
          duration:1,
      }
  },
  
}
const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
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
const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
const figureBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="min-h-screen relative absolute inset-0">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative w-full overflow-hidden z-20">
      <motion.div
      ref={ref}
  className="text-center flex flex-col md:grid lg:grid-cols-2 md:grid-cols-3 items-center justify-center z-2 lg:mb-60 md:mb-50 lg:ml-40"
  >
  <motion.div variants={textVariants} initial="initial" animate="animate">
    <motion.h1 className="text-2xl md:text-6xl font-bold mb-6 text-shadow-xl" variants={textVariants} style={{x:yBg}}>
      Welcome to <motion.p style={{x:yBg}}>Archery Club of Uva</motion.p>
    </motion.h1>
    <motion.p className="text-l text-white-300 mb-8" style={{x:yBg}}>
      Discover the art of precision and discipline through archery
    </motion.p>
  </motion.div>

  {/* Center image only on mobile */}
  <motion.img 
    src={Archer} 
    className="lg:h-[50vh] lg:w-[30vw] h-[40vh] w-[80%] mx-auto md:w-[20vw] md:mx-0 z-20 "
    variants={imgVariant} initial="initial" animate="animate" style={{x:figureBg}}/>
</motion.div>
        <motion.div className="absolute text-[30vh]  bottom-0 text-white/10 whitespace-nowrap font-bold w-full z-10" variants={slidingText} initial="initial" animate="animate">
            Archery Club of Uva
        </motion.div>
      </section>
    </div>
  );
};

export default Home;