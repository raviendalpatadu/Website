import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-12"
      >
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-white-300 mb-6">
              Founded in 2010, the Archery Club of Uva has been at the forefront of 
              promoting archery as a sport of precision and discipline. Our club has 
              grown from a small group of enthusiasts to one of the most prestigious 
              archery clubs in the region.
            </p>
            <p className="text-white-300">
              We pride ourselves on providing world-class training facilities and 
              expert coaching to archers of all skill levels, from beginners to 
              competitive athletes.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-effect p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <ul className="space-y-4 text-white-300">
              <li>• Promote archery as a sport of precision and discipline</li>
              <li>• Provide world-class training facilities</li>
              <li>• Foster a community of passionate archers</li>
              <li>• Develop competitive athletes</li>
              <li>• Make archery accessible to everyone</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-white-300">
                Striving for perfection in every arrow released
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-white-300">
                Building strong bonds through shared passion
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-white-300">
                Embracing modern techniques and technology
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;