import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userskill} = useParams()
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
       
        <div className="text-lg text-black-600 font-mono bg-gray-50 p-4 rounded border">
      Your skill :     {userskill}
        </div>
      </div>
    </div>
  )
}

export default User