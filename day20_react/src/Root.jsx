import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function Root() {
  return (
  <>
<Header></Header>
<Outlet/>
  </>
  )
}

export default Root