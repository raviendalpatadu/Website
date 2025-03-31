import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import field from "../public/field.png";
import archer from "../public/archer.png";
import arrow from "../public/arrow.png";
import target from "../public/target.png";
import stars from "../public/stars.png"

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth<768){
        setIsMobile(true) ; // Set true if width is less than 768px (Mobile)
      }
        
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const archerBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const arrowBg = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const smArrowBg = useTransform(scrollYProgress,[0,1], ["0%","200%"])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const targetBg = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const archerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div 
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      ref={ref}
    >
      <motion.h1 
        style={{ x: yText, opacity: archerOpacity }} 
        className={`absolute z-10 ${type === "About Us" ? "text-6xl" : "text-5xl"} md:text-8xl lg:text-[8vw] text-white`}
      >
        {type === "About Us" ? "About Us" : "Our Achivements"}
      </motion.h1>
      <motion.div 
        className="absolute inset-0 bg-cover bg-bottom z-0" 
        style={{ backgroundImage: `url(${stars})` }}
      />

      <motion.div 
        className="absolute inset-0 bg-cover bg-bottom z-1" 
        style={{ backgroundImage: `url(${field})` }}
      />

      {/* Archer element - improved mobile visibility */}
      <motion.div 
        style={{ 
          x: archerBg, 
          opacity: archerOpacity, 
          backgroundImage: `url(${archer})` 
        }} 
        className="absolute left-0 bottom-[90px] sm:bottom-[20px] h-[150px] w-[150px] md:h-[30vh] md:w-[30vh] lg:h-[50vh] lg:w-[50vh] bg-contain bg-no-repeat bg-bottom z-20"
      />

      {/* Arrow element - improved mobile visibility */}
      <motion.div 
        style={{ 
          x: isMobile ? smArrowBg : arrowBg, 
          opacity: arrowOpacity, 
          backgroundImage: `url(${arrow})` 
        }} 
        className="absolute left-[100px] lg:bottom-[240px] bottom-[100px] h-[60px] w-[100px] md:h-[80px] md:w-[150px] lg:h-[120px] lg:w-[200px] bg-contain bg-no-repeat bg-bottom z-60"
      />

      {/* Target element - improved mobile visibility */}
      <motion.div 
        style={{ 
          x: targetBg, 
          backgroundImage: `url(${target})` 
        }} 
        className="absolute right-0 bottom-[40px] h-[180px] w-[90px] md:h-[250px] md:w-[125px] lg:h-[500px] lg:w-[250px] bg-contain bg-no-repeat bg-bottom z-40"
      />
    </div>
  );
};

export default Parallax;