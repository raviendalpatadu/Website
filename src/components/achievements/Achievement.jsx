import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Image imports
const OlympicQuotaPlace = "/Olympic_quota_place.jpeg";
const AllIslandChampionship = "/AllIslandChampionship.jpeg";
const WAAJointTraning = "/WAA_Joint_Traning.jpeg";
const Olympicmedalist = "/Olympic medalist.jpeg";

// Achievements data
const achievements = [
  {
    id: 1,
    title: "2024 WAA Joint Training",
    img: WAAJointTraning,
    description: "Our archers and coach were selected to participate in 2024 WAA Joint Training and Asia Archery Challenge Korea Gyeyang from 24th - 28th August 2024.",
    year: "2024",
    category: "International Training",
    gold: 10,
    silver: 4,
    bronze: 3,
    highlights: [
      "Selected for prestigious international training program",
      "Represented Sri Lanka in Korea Gyeyang",
      "Multiple medal winners across age categories"
    ],
    medals: [
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
    title: "World Cup Quarter Finalist",
    img: OlympicQuotaPlace,
    description: "Historic achievement - the highest placement by any Sri Lankan archer in World Cup competition. A proud moment that brings us closer to Olympic dreams.",
    year: "2023",
    category: "World Championship",
    gold: 0,
    silver: 0,
    bronze: 1,
    highlights: [
      "Highest achievement by any Sri Lankan archer",
      "Quarter-finalist in Archery World Cup",
      "Olympic qualification pathway"
    ],
    medals: [
      { category: "Men's Individual Recurve", Bronze: "Ravien Dalpatadu" }
    ]
  },
  {
    id: 3,
    title: "All-Island Championship Dominance",
    img: AllIslandChampionship,
    description: "Uva Archery Club dominated the 2023 All-Island Championship with 11 medals at Royal International School ground, Kurunegala.",
    year: "2023",
    category: "National Championship",
    gold: 4,
    silver: 4,
    bronze: 3,
    highlights: [
      "11 total medals won",
      "Dominated across all age categories",
      "National championship excellence"
    ],
    medals: [
      { category: "Senior Men Recurve", Gold: "Ravien Dalpatadu" },
      { category: "Junior Men Recurve", Gold: "Dewmina Senadeera", Silver: "Dinujaya Fernando" },
      { category: "Cadet Girls Recurve", Gold: "Thenuki Gamage" },
      { category: "Under 12 Boys", Gold: "Senula Kavinda" },
      { category: "Under 12 Girls", Silver: "Amalmi Hansika" },
      { category: "Under 10 Boys", Silver: "Thisula Mihiran", Bronze: "Sahan Viraj" },
      { category: "Under 10 Girls", Silver: "Tenashi Fernando", Bronze: "Kushali Sandareka" },
      { category: "Compound Senior", Bronze: "Chathuranga Silva" }
    ]
  },
  {
    id: 4,
    title: "Youth Olympic Excellence",
    img: Olympicmedalist,
    description: "Ravien Dalpatadu ranked 6th at Youth Olympic Games 2018 in Argentina — Sri Lanka's highest youth archery placement.",
    year: "2018",
    category: "Youth Olympics",
    gold: 0,
    silver: 0,
    bronze: 0,
    highlights: [
      "6th place at Youth Olympic Games",
      "Argentina 2018 representation",
      "Youngest Sri Lankan Olympic archer"
    ],
    medals: [
      { category: "Youth Olympic Games 2018", result: "6th Place - Ravien Dalpatadu" }
    ]
  }
];

const Achievement = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'International Training': return 'from-blue-500 to-cyan-500';
      case 'World Championship': return 'from-purple-500 to-pink-500';
      case 'National Championship': return 'from-green-500 to-emerald-500';
      case 'Youth Olympics': return 'from-red-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
          Our Achievements
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Years of dedication, training, and passion have led us to remarkable victories on national and international stages.
        </p>
      </motion.div>

      {/* Achievement Cards */}
      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-2/5">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={achievement.img}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white text-sm font-medium`}>
                    {achievement.category}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
                    📅 {achievement.year}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">{achievement.title}</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">{achievement.description}</p>
                  </div>
                </div>

                {/* Medal Summary */}
                <div className="flex items-center space-x-6 mb-6">
                  {achievement.gold > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400 text-2xl">🏆</span>
                      <span className="text-white font-bold">{achievement.gold}</span>
                    </div>
                  )}
                  {achievement.silver > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300 text-2xl">🥈</span>
                      <span className="text-white font-bold">{achievement.silver}</span>
                    </div>
                  )}
                  {achievement.bronze > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400 text-2xl">🥉</span>
                      <span className="text-white font-bold">{achievement.bronze}</span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {achievement.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleCard(achievement.id)}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="font-medium">
                    {expandedCard === achievement.id ? 'Show Less' : 'View Details'}
                  </span>
                  <span className={`transition-transform duration-300 ${expandedCard === achievement.id ? 'rotate-180' : ''}`}>
                    ⬇️
                  </span>
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedCard === achievement.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10 bg-white/5"
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      👥 Medal Winners
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievement.medals.map((medal, medalIndex) => (
                        <div key={medalIndex} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="font-medium text-white mb-2">{medal.category}</div>
                          <div className="space-y-1">
                            {medal.Gold && (
                              <div className="flex items-center space-x-2">
                                <span className="text-yellow-400">🏆</span>
                                <span className="text-gray-300 text-sm">{medal.Gold}</span>
                              </div>
                            )}
                            {medal.Silver && (
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-300">🥈</span>
                                <span className="text-gray-300 text-sm">{medal.Silver}</span>
                              </div>
                            )}
                            {medal.Bronze && (
                              <div className="flex items-center space-x-2">
                                <span className="text-orange-400">🥉</span>
                                <span className="text-gray-300 text-sm">{medal.Bronze}</span>
                              </div>
                            )}
                            {medal.result && (
                              <div className="flex items-center space-x-2">
                                <span className="text-blue-400">🎯</span>
                                <span className="text-gray-300 text-sm">{medal.result}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;