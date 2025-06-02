import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import video from "../AssetsFolder/RavienVideo.mp4"

const HomeSecond = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
      const TextVariant ={
        initial:{
            opacity:0,
            x:-200,
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:5,
            }
        }
      }
  return (
    <section ref={ref} className="py-6 px-4 relative h-[200vh] md:h-[100vh] snap-start md:snap-center">
      
  <div className="container mx-auto md:h-screen py-12">
  <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-100"
>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        {/* <source  type="video/mov" />
        Your browser does not support the video tag.
      </video> */}
    {/* <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 "
    >
      <motion.div className="glass-effect p-6 rounded-lg" >
        <h3 className="text-xl font-bold mb-4">Expert Training</h3>
        <p className="text-white-300">Learn from experienced coaches and improve your archery skills</p>
        <motion.img src={`${img1}`} alt="img1" className="w-full h-auto"/>
      </motion.div>
      <motion.div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Modern Facilities</h3>
        <p className="text-white-300">Access to state-of-the-art equipment and training facilities</p>
        <motion.img src={`${img2}`} alt="img2" className="w-full h-auto"/>
      </motion.div>
      <motion.div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Regular Competitions</h3>
        <p className="text-white-300">Participate in tournaments and showcase your skills</p>
        <motion.img src={`${img3}`} alt="img3" className="w-full h-auto" />
      </motion.div>
    </motion.div>*/}
    {/* <motion.h1
    className="text-3xl md:text-5xl font-bold text-shadow-xl flex items-center justify-center mt-10 md:mt-20 z-10"
    variants={TextVariant}
    initial="initial"
    animate="animate"
  >
    Be a part of the Best
  </motion.h1>  */}
  </div>

  
</section>

  )
}

export default HomeSecond