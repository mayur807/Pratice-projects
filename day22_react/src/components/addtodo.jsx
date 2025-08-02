import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from '../Features/todoslice';
function Addtodo() {
 const dispatch = useDispatch()   
const  [input,setinput] = useState('');

const handleaddtodo =()=>{
    if(input.length == 0){
        // console.log("empty");
        
    }else{

        dispatch(addtodo(input))
        setinput('') 
    }
}



  return (
<>
  <div className="flex gap-2 mb-6">
    <input 
      type="text"
      value={input}
      onChange={(e)=>setinput(e.target.value)}
      className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Add a new todo..."
    />
    <button
      onClick={handleaddtodo}
      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
    >
      Add
    </button>
  </div>
</>

  )
}

export default Addtodo