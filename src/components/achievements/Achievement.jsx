import React, { useRef, useState } from 'react';
import './achievements.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Image imports
const OlympicQuotaPlace = "/Olympic_quota_place.jpeg";
const AllIslandChampionship = "/AllIslandChampionship.jpeg";
const WAAJointTraning = "/WAA Joint Traning.jpeg";
const Olympicmedalist = "/Olympic medalist.jpeg";
import BatteredWall from "../../images/battered-wall-paint.jpg";

// Detect mobile
const isMobile = window.innerWidth < 768;

// Achievements data
const items = [
  {
    id: 1,
    title: "2024 WAA Joint Training",
    img: WAAJointTraning,
    des: "Our archers and coach were selected to participate in 2024 WAA Joint Training and Asia Archery Challenge Korea Gyeyang from 24th - 28th August 2024.",
    gold: 10, silver: 15, bronze: 7,
    children: [
      { category: "U10 Boys", Gold: "Thisula" },
      { category: "U10 Girls", Silver: "Tenashi", Bronze: "Kushali" },
      { category: "U12 Boys", Gold: "Senula" },
      { category: "U12 Girls", Gold: "Amalmi" },
      { category: "U14 Boys", Gold: "Dinujaya" },
      { category: "U14 Girls", Gold: "Thenuki" },
      { category: "U18 Boys", Gold: "Dewmina" },
      { category: "U18 Girls", Gold: "Nithuli" },
      { category: "60M Cadet Boys", Gold: "Dewmina", Silver: "Dinujaya", Bronze: "Bihandu" },
      { category: "60M Cadet Girls", Gold: "Thenuki" },
      { category: "70M Boys", Silver: "Ravien" },
      { category: "Over 40", Gold: "Chathuranga", Bronze: "Chamil" }
    ]
  },
  {
    id: 2,
    title: "Quarter Finalist in Archery World Cup",
    img: OlympicQuotaPlace,
    des: "You made us proud, Archer. Though you missed the Olympic quota, this is the highest achievement by any Sri Lankan archer so far. All the best for 2024 Olympics!",
    gold: 10, silver: 15, bronze: 7,
    children: []
  },
  {
    id: 3,
    title: "All-Island Championship",
    img: AllIslandChampionship,
    des: "Uva Archery Club dominated the 2023 All-Island Championship with 11 medals at Royal International School ground, Kurunegala.",
    gold: 10, silver: 15, bronze: 7
  },
  {
    id: 4,
    title: "Youth Olympic Dream in Sight",
    img: Olympicmedalist,
    des: "Ravien Dalpatadu ranked 6th at Youth Olympic Games 2018 in Argentina — Sri Lanka’s highest youth archery placement.",
    gold: 10, silver: 15, bronze: 7
  }
];

// Single Achievement Card
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [data, setData] = useState([]);

  const handleMedal = (gold, silver, bronze, data) => {
    setGold(gold);
    setSilver(silver);
    setBronze(bronze);
    setOpenPopUp(true);
    setData(item.children);
  };

  return (
    <section className="relative z-[2] p-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          <div className="imageContainer w-3/4 max-w-xs mx-auto md:w-1/2 md:max-w-full" ref={ref}>
            <img
              src={item.img}
              alt=""
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          {isMobile ? (
            <div className="textContainer w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="mb-4">{item.des}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                See Demo
              </button>
            </div>
          ) : (
            <motion.div className="textContainer w-full md:w-1/2" style={{ y }}>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="mb-4">{item.des}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                See Demo
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// Main Component
const Achievement = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="achievements relative" ref={ref}>
      {/* Background texture overlay */}
      <div
        className="fixed inset-0 z-[1] mix-blend-soft-light opacity-40"
        style={{
          backgroundImage: `url(${BatteredWall})`,
          backgroundSize: "500px",
          backgroundPosition: "center",
          imageRendering: "crisp-edges",
        }}
      />

      {/* Mobile progress bar (visible on mobile only) */}
        {/* Mobile header */}
        <div className="progressmobile md:hidden sticky top-0 z-20 p-4 flex flex-col items-center justify-center">
        <h1>Our Achievements</h1>
        <motion.div style={{ scaleX }} className="progressBarmobile mt-2 rounded w-full"></motion.div>
        </div>

        {/* Desktop header */}
        <div className="progress hidden md:flex sticky top-0 z-20 p-4 flex-col items-center justify-center text-center">
        <h1>Our Achievements</h1>
        <motion.div style={{ scaleX }} className="progressBar mt-2 rounded w-full"></motion.div>
        </div>



      {/* Scrollable content */}
      <div className="relative z-0 flex flex-col items-center justify-center gap-6 m-4 pt-20">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
