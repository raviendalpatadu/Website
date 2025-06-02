import React, { useRef, useState } from 'react'
import "./achievements.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

import Model from '../Model'
import MedalStand from '../MedalStand'
import items from "../../Json Files/Achivements.json"
import OlympicQuotaPlace from "../../public/Olympic quota place.jpeg"
import AllIslandChampionship from "../../public/AllIslandChampionship.jpeg"
import WAAJointTraning from "../../public/WAA Joint Traning.jpeg"
import Olympicmedalist from "../../public/Olympic medalist.jpeg"
import BatteredWall from "../../images/battered-wall-paint.jpg"



// const items = [
//     {
//         id:1,
//         title:"2024 WAA Joint Training",
//         img:WAAJointTraning,
//         des:"Our archers and coach was selected to participate in 2024 WAA Joint Training and Asia Archery Challenge Korea Gyeyang from 24th - 28th August 2024.",
//         "gold": 10,
//         "silver": 15,
//         "bronze": 7,
//         children: [
//       { "category": "U10 Boys", "Gold": "Thisula" },
//       { "category": "U10 Girls", "Silver": "Tenashi", "Bronze": "Kushali" },
//       { "category": "U12 Boys", "Gold": "Senula" },
//       { "category": "U12 Girls", "Gold": "Amalmi" },
//       { "category": "U14 Boys", "Gold": "Dinujaya" },
//       { "category": "U14 Girls", "Gold": "Thenuki" },
//       { "category": "U18 Boys", "Gold": "Dewmina" },
//       { "category": "U18 Girls", "Gold": "Nithuli" },
//       { "category": "60M Cadet Boys","Gold": "Dewmina","Silver": "Dinujaya","Bronze": "Bihandu" },
//       { "category": "60M Cadet Girls", "Gold": "Thenuki" },
//       { "category": "70M Boys", "Silver": "Ravien" },
//       { "category": "Over 40", "Gold": "Chathuranga", "Bronze": "Chamil" }
//     ]
//       },
//     {
//         id:2,
//         title:"Quater Finalist in Archery World Cup",
//         // subtitle:"Ravein Dalapatadu",
//         img:OlympicQuotaPlace ,
//         des:"Once again you made us proud well done Archer. Unfortunately you was not able to grab the Olympic quota place but this is the best Achievement by any Sri Lankan Archer upto now. You had to face many difficulties to achieve this achievement. This was not a silk road for you. You walked through it and did the best you can to make mother Sri Lanka proud. Well done for your achievement. All the best for your future and hoping to see your face in 2024 Olympics you can do it, you will do it.",
//         "gold": 10,
//         "silver": 15,
//         "bronze": 7,
//         children:[]
//     },
//     {
//         id:3,
//         title:"All-Island Championship",
//         img:AllIslandChampionship,
//         des:"The All-Island Wayamba Archery Championships 2023 which attracted archers island wide, was held successfully at the Royal International School ground in Kurunegala recently.Uva Archery Club dominated proceedings winning 11 medals (5 golds, 4 silvers and 3 bronze). The championship saw participants competing in a variety of categories, including recurve and compound for both men and women.",
//         "gold": 10,
//         "silver": 15,
//         "bronze": 7
//     },
//     {
//         id:4,
//         title:"Youth Olympic Dream in Sight",
//         img:Olympicmedalist,
//         des:"Uva Archery Archer Ravien Dalpatadu participated in Youth Olympic Games Argentina 2018. Was able to rank 6th in the individual men's event bringing glory to mother Sri Lanka. Highest achievement in archery history for Sri Lanka in a youth event. All the best from Uva Archery family",
//         "gold": 10,
//         "silver": 15,
//         "bronze": 7
//     }
// ]

const Single = ({item}) =>{
    const ref = useRef();
    const event = items
    console.log("event",event)
    console.log("childre",item.children)
    
    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    const [openPopUp, setOpenPopUp] = useState(false);
    const [gold,setGold] = useState(0);
    const [silver,setSilver] = useState(0);
    const [bronze,setBronze] = useState(0);
    const [data,setdata] = useState([])
    // console.log("data",data)

    const handleMedal = (gold,silver,bronze,data) => {
        setGold(gold);
        setSilver(silver);
        setBronze(bronze);
        setOpenPopUp(true);
        setdata(item.children)
    }

    return (
    <section className="relative z-[2]">
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                {/* <h3>{item.subtitle}</h3> */}
                <p>{item.des}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
   
    ); 
};

const Achievement = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: [ "end end", "start start"],
    });

    const scaleX =  useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className='achievements relative' ref={ref}>
      {/* Battered Wall Texture Overlay */}
      <div 
        className="fixed inset-0 z-[1] mix-blend-soft-light opacity-40"
        style={{
          backgroundImage: `url(${BatteredWall})`,
          backgroundSize: '500px',
          backgroundPosition: 'center',
          imageRendering: 'crisp-edges',
        }}
      />

      {/* Main content with increased z-index */}
      <div className="progress z-[2] relative">
        <h1>Our Achievements</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      
      {/* Wrap items in a container with higher z-index */}
      <div className="relative z-[2]">
        {items.map((item) => (
          <Single item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default Achievement