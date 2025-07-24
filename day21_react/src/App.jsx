import { useState } from 'react'
import './App.css'
import Usecolourcontextprovider from './context/usecolourcontextprovider'
import Colour from './components/colour'
import Colouename from './components/colouename'

function App() {
 

  return (
    <Usecolourcontextprovider>
<Colour/>
<Colouename/>
    </Usecolourcontextprovider>
  )
}

export default App
