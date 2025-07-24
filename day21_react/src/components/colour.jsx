import React, { useState } from 'react'
import colourcontext from '../context/usecolourcontext';
import { useContext } from 'react';

function Colour() {
const [colour,setcolour] = useState('');
const [height, setheight] =  useState('')
const [width, setwidth] =  useState('')
const [border,setborder] = useState('')
const [borderround ,setborderround] = useState('')
const [bordercolor, setbordercolour] = useState('')
const [canvas,setcanvas]= useState('')
const {setcolourname} = useContext(colourcontext)

const handlesubmit =(e)=>{
    e.preventDefault()
    setcolourname({canvas, colour,height, width, borderround , border, bordercolor})
}

  return ( <>
    <h1 className='w-full text-center p-2 sm:p-4  bg-black text-white font-bold text-sm sm:text-base'>ContenxtApi</h1>
<div className="w-full flex justify-center mt-0.5 bg-gray-700 px-2 sm:px-0">
  <div className='flex flex-col items-center gap-2 sm:gap-2.5 p-2 sm:p-4 w-full max-w-sm sm:max-w-none'>
    <h1 className='text-white text-sm sm:text-base mb-1 sm:mb-0'>Create Your Shape</h1>
    <input
     className='border-2 p-1.5 sm:p-2 text-white border-black rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={colour}
     onChange={(e) => setcolour(e.target.value)}
     type="text"
     placeholder="Colour"
     />
    <input
     className='border-2 p-1.5 sm:p-2 text-white border-black rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={height}
     onChange={(e) => setheight(e.target.value)}
     type="text"
     placeholder="Height"
     />
    <input
     className='border-2 p-1.5 sm:p-2 border-black text-white rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={width}
     onChange={(e) => setwidth(e.target.value)}
     type="text"
     placeholder="Width"
     />
    <input
     className='border-2 p-1.5 sm:p-2 border-black text-white rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={border}
     onChange={(e) => setborder(e.target.value)}
     type="text"
     placeholder="Border-size"
     />
    <input
     className='border-2 p-1.5 sm:p-2 border-black text-white rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={bordercolor}
     onChange={(e) => setbordercolour(e.target.value)}
     type="text"
     placeholder="Border-Colour"
     />
    <input
     className='border-2 p-1.5 sm:p-2 border-black text-white rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={borderround}
     onChange={(e) => setborderround(e.target.value)}
     type="text"
     placeholder="Border-radius"
     />
    <input
     className='border-2 p-1.5 sm:p-2 border-black text-white rounded w-full sm:w-auto min-w-0 text-sm sm:text-base bg-gray-800'
     value={canvas}
     onChange={(e) => setcanvas(e.target.value)}
     type="text"
     placeholder="Canvas-colour"
     />
    <button className='border-2 bg-gray-600 px-4 py-2 sm:px-3 sm:py-0.5 border-black text-white rounded w-full sm:w-auto text-sm sm:text-base mt-1 hover:bg-gray-500 transition-colors' onClick={handlesubmit}>Done</button>
  </div>
</div>

     </>
  )
}

export default Colour