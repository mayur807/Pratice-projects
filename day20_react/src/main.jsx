import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Root from './Root.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contactus from './components/Contactus.jsx'
import Skill from './components/skill.jsx'

import User from './components/User.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Root/>}>

      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contactus/>} />
      <Route path='skill/:userskill' element={<User/>} />
<Route path="/skill" element={<Skill />} />

    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router}/>


  </StrictMode>,
)
