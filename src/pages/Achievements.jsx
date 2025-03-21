import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const achievements = [
  {
    year: '2023',
    title: 'National Champions',
    description: 'First place in the National Archery Championship',
    category: 'Team Achievement'
  },
  {
    year: '2022',
    title: 'Asian Games Medal',
    description: 'Silver medal in the Asian Games Archery Competition',
    category: 'International'
  },
  {
    year: '2021',
    title: 'University Games',
    description: 'Gold medal in individual and team events',
    category: 'University Level'
  },
  {
    year: '2020',
    title: 'Regional Tournament',
    description: 'Won the regional archery championship',
    category: 'Regional'
  },
  {
    year: '2019',
    title: 'State Championship',
    description: 'Secured first place in state-level competitions',
    category: 'State Level'
  }
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-12"
      >
        <h1 className="text-4xl font-bold mb-12">Our Achievements</h1>
        
        <div ref={ref} className="space-y-8">
          {(showAll ? achievements : achievements.slice(0, 3)).map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-accent font-semibold">{achievement.year}</span>
                  <h3 className="text-2xl font-bold mt-2">{achievement.title}</h3>
                  <p className="text-gray-300 mt-2">{achievement.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Join Our Winning Team</h2>
          <p className="text-gray-300 mb-8">
            Be part of our success story and achieve greatness in archery
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Achievements;
