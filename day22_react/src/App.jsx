import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/addtodo'
import Todos from './components/todos'
import Taskinfo from './components/Taskinfo'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-start justify-center w-full md:items-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-2 sm:p-4 md:p-6 rounded-xl shadow-xl bg-gray-800 mx-2 overflow-auto">
        <Addtodo/>
        <Todos/>
        <Taskinfo/>
      </div>
    </div>
  )
}

export default App
