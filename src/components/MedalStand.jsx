import React from 'react'

const MedalStand = ({gold,silver,bronze}) => {
  return (
    <div className='p-4 md:p-5 space-y-4'>
    <h2 className="text-2xl font-bold mb-4">Medal Stand</h2>

    <div className="flex items-end justify-center gap-6">
    <div className="flex flex-col items-center">
    <div className="w-40 h-40 bg-gray-400 rounded-t-lg flex items-center justify-center text-white text-xl font-bold">
    🥈 Silver
    </div>
    <p className="mt-2 text-lg font-semibold">{silver}</p>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-40 h-40 bg-yellow-400 rounded-t-lg flex items-center justify-center text-white text-xl font-bold">
    🥇 Gold
    </div>
    <p className="mt-2 text-lg font-semibold">{gold}</p>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-40 h-40 bg-orange-600 rounded-t-lg flex items-center justify-center text-white text-xl font-bold">
    🥉 Bronze
    </div>
    <p className="mt-2 text-lg font-semibold">{bronze}</p>
    </div>
    </div>
    </div>
  )
}

export default MedalStand