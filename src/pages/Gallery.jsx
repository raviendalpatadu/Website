import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    // title: 'Competition Day',
    // description: 'National Championship 2023'
  },
  {
    original: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

    // title: 'Training Session',
    // description: 'Advanced Technique Workshop'
  },
  {
    original: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

    // title: 'Team Practice',
    // description: 'Evening Practice Session'
  },
  {
    original: 'https://images.unsplash.com/photo-1519417688386-31394a01c4b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

    // title: 'Equipment Setup',
    // description: 'Professional Grade Equipment'
  },
  {
    original: 'https://images.unsplash.com/photo-1511374322656-8face3d89ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

    // title: 'Youth Program',
    // description: 'Training the Next Generation'
  },
  {
    original: 'https://images.unsplash.com/photo-1515474594679-6a12d48b0468?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

    // title: 'Indoor Range',
    // description: 'State-of-the-art Facilities'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-2 px-4">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-20"
      >
        <h1 className="text-4xl font-bold mb-12">Gallery</h1>

        <div 
          ref={ref} 
          className="glass-effect p-6 rounded-lg"
        >
          {/* {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-white-300">{image.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))} */}

        <ReactImageGallery items={images}/>
        </div>
      </motion.section>
    </div>

  );
};

export default Gallery;