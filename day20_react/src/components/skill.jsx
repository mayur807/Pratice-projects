import React from 'react'
import { useParams } from 'react-router-dom'
function Skill({ userid }) {
  // const {userid} = useParams()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <h1  className="flex items-center gap-2.5 text-2xl font-bold text-gray-800 mb-4">
          Try searching this   <div className="text-lg text-blue-600 font-mono bg-gray-50 p-1 rounded border">
          /skill/Yourskill
        </div>
        </h1>
    </div>
  )
}

export default Skill