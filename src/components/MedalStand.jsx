import React from 'react'
import PropTypes from 'prop-types'

const MedalStand = ({gold, silver, bronze, data}) => {
  console.log("data", data)
  return (
    <div className='p-4 md:p-6 space-y-6'>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">🏆 Achievement Details</h2>

      {/* Medal podium - responsive design */}
      <div className="flex items-end justify-center gap-3 md:gap-8 mb-8">
        {/* Silver */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-2 border-gray-200">
            <span className="text-lg md:text-2xl">🥈</span>
          </div>
          <div className="mt-2 px-3 py-1 bg-gray-600/80 rounded-full">
            <p className="text-sm md:text-base font-bold text-white">{silver}</p>
          </div>
          <p className="text-xs md:text-sm text-gray-300 mt-1">Silver</p>
        </div>

        {/* Gold - taller podium */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-2 border-yellow-200 transform scale-110">
            <span className="text-xl md:text-3xl">🥇</span>
          </div>
          <div className="mt-2 px-4 py-1 bg-yellow-600/80 rounded-full">
            <p className="text-base md:text-lg font-bold text-white">{gold}</p>
          </div>
          <p className="text-sm md:text-base text-yellow-300 mt-1 font-semibold">Gold</p>
        </div>

        {/* Bronze */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-b from-orange-400 to-orange-700 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-2 border-orange-200">
            <span className="text-lg md:text-2xl">🥉</span>
          </div>
          <div className="mt-2 px-3 py-1 bg-orange-600/80 rounded-full">
            <p className="text-sm md:text-base font-bold text-white">{bronze}</p>
          </div>
          <p className="text-xs md:text-sm text-orange-300 mt-1">Bronze</p>
        </div>
      </div>      {/* Individual Achievements */}
      {data && data.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-white">🎯 Individual Achievements</h3>
          <div className="max-h-60 md:max-h-80 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {data.map((entry, index) => (
                <div key={`${entry.category}-${index}`} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20">
                  <h4 className="font-semibold text-sm md:text-base mb-2 text-white">{entry.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {entry["Gold"] && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm">
                        🥇 {entry["Gold"]}
                      </span>
                    )}
                    {entry["Silver"] && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-gray-400 to-gray-600 text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm">
                        🥈 {entry["Silver"]}
                      </span>
                    )}
                    {entry["Bronze"] && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm">
                        🥉 {entry["Bronze"]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* No individual achievements message */}
      {(!data || data.length === 0) && (
        <div className="text-center text-gray-400 mt-6">
          <p className="text-sm md:text-base">No individual achievement details available.</p>
        </div>
      )}
    </div>
  )
}

MedalStand.propTypes = {
  gold: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  bronze: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

MedalStand.defaultProps = {
  data: []
};

export default MedalStand