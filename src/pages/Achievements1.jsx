import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Model from '../components/Model';
import MedalStand from '../components/MedalStand';
import achievements from '../Json Files/Achivements.json';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showAll, setShowAll] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [gold,setGold] = useState(0);
  const [silver,setSilver] = useState(0);
  const [bronze,setBronze] = useState(0);

  const handleMedal = (gold,silver,bronze) => {
    setGold(gold);
    setSilver(silver);
    setBronze(bronze);
    setOpenPopUp(true);
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-12"
      >
        <h1 className="text-4xl font-bold mb-12">Our Achievements</h1>
        
        <div ref={ref} className="space-y-8 overflow-y-auto max-h-[80vh] md:max-h-[70vh] px-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between" onClick={()=>handleMedal(achievement.gold,achievement.silver,achievement.bronze)}>
                <div>
                  <span className="text-accent font-semibold">{achievement.year}</span>
                  <h3 className="text-2xl font-bold mt-2">{achievement.title}</h3>
                  <p className="text-white-300 mt-2">{achievement.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-accent bg-opacity-100 text-white px-4 py-2 rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </div>
              

            </motion.div>
          ))}
          <Model 
              isOpen={openPopUp}
              onClose={()=>setOpenPopUp(false)}
              title="Achievements"
              >
                <MedalStand gold={gold} silver={silver} bronze={bronze} />

              </Model>
        </div>

        <div className="mt-6 text-center">
          {/* <button
            onClick={() => setShowAll(!showAll)}
            className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {showAll ? 'See Less' : 'See More'}
          </button> */}
        </div>

        
      </motion.section>
    </div>
  );
};

export default Achievements;
