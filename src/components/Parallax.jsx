import React from 'react';
import { motion } from 'framer-motion';
import field from "../AssetsFolder/field.png";
import archer from "../AssetsFolder/archer.png";
import arrow from "../AssetsFolder/arrow.png";
import target from "../AssetsFolder/target.png";
import stars from "../AssetsFolder/stars.png"

const Parallax = ({ type }) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Title with entrance animation */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`absolute z-10 ${type === "About Us" ? "text-6xl" : "text-5xl"} md:text-8xl lg:text-[8vw] text-white font-bold text-center`}
      >
        {type === "About Us" ? "About Us" : "Our Achievements"}
      </motion.h1>
      
      {/* Static background layers */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom z-0" 
        style={{ backgroundImage: `url(${stars})` }}
      />

      <div 
        className="absolute inset-0 bg-cover bg-bottom z-1" 
        style={{ backgroundImage: `url(${field})` }}
      />

      {/* Static archer element */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ backgroundImage: `url(${archer})` }} 
        className="absolute left-0 bottom-[90px] sm:bottom-[20px] h-[150px] w-[150px] md:h-[30vh] md:w-[30vh] lg:h-[50vh] lg:w-[50vh] bg-contain bg-no-repeat bg-bottom z-20"
      />

      {/* Static arrow element */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        style={{ backgroundImage: `url(${arrow})` }} 
        className="absolute left-[100px] lg:bottom-[240px] bottom-[100px] h-[60px] w-[100px] md:h-[80px] md:w-[150px] lg:h-[120px] lg:w-[200px] bg-contain bg-no-repeat bg-bottom z-60"
      />

      {/* Static target element */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        style={{ backgroundImage: `url(${target})` }} 
        className="absolute right-0 bottom-[40px] h-[180px] w-[90px] md:h-[250px] md:w-[125px] lg:h-[500px] lg:w-[250px] bg-contain bg-no-repeat bg-bottom z-40"
      />
    </div>
  );
};

export default Parallax;