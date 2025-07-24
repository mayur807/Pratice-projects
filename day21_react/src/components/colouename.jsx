import React, { useContext, useEffect, useState } from 'react'
import colourcontext from '../context/usecolourcontext'

function Colouename() {
  const { colourname } = useContext(colourcontext)
  const [fromusercolour, setfromusercolour] = useState()
  const [fromuserheight, setfromuserheight] = useState()
  const [fromuserwidth, setfromuserwidth] = useState()
  const [fromuserradius, setfromuserradius] = useState()
  const [fromuserborder, setfromuserborder] = useState()
  const [fromuserbordercolour, setfromuserbordercolour] = useState()
  const [canvascolour, setcanvascolour] = useState()

  useEffect(() => {
    if (colourname && colourname.colour && colourname.height && colourname.width) {
      setfromusercolour(colourname.colour)
      setfromuserheight(colourname.height)
      setfromuserwidth(colourname.width)
      setfromuserradius(colourname.borderround)
      setfromuserborder(colourname.border)
      setfromuserbordercolour(colourname.bordercolor)
      setcanvascolour(colourname.canvas)
    }
  }, [colourname])

  if (!colourname) return <div className='w-full text-center p-4 text-sm sm:text-base'>Canvas</div>

  return <div
    className='p-2 sm:p-3 mt-2 mb-2 sm:mt-4 gap-4 sm:gap-10 border flex items-center justify-center flex-col mx-2 sm:mx-0'
    style={{
      backgroundColor: canvascolour,
    }}
  >
    <div className='flex flex-col items-center gap-2 w-full'>
      <h1 className='text-sm sm:text-base font-semibold mb-1'>Canvas</h1>
      
      {/* Mobile: Stack vertically, Desktop: Horizontal */}
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-white bg-gray-900 p-2 sm:p-1.5 rounded w-full sm:w-auto text-xs sm:text-sm overflow-hidden'>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
          Colour: {fromusercolour}
        </span>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
          Height: {fromuserheight}px
        </span>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
          Width: {fromuserwidth}px
        </span>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
          Border: {fromuserborder}px
        </span>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
          Border-Colour: {fromuserbordercolour}
        </span>
        <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
          Border-radius: {fromuserradius}%
        </span>
      </div>
    </div>

    {/* Shape container with responsive sizing */}
    <div className='flex justify-center items-center w-full overflow-hidden'>
      <div
        className='max-w-full max-h-96 sm:max-h-none'
        style={{
          width: `${Math.min(fromuserwidth, window.innerWidth - 40)}px`,
          height: `${Math.min(fromuserheight, 400)}px`,
          backgroundColor: fromusercolour,
          borderColor: `${fromuserbordercolour}`,
          borderRadius: `${fromuserradius}%`,
          borderWidth: `${fromuserborder}px`,
          borderStyle: 'solid',
        }}
      ></div>
    </div>
  </div>
}

export default Colouename