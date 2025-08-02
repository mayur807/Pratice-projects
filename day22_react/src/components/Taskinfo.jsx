import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


function Taskinfo() {
   const arr = []
   const todos = useSelector((state) => state.todoRef.todos)
const total = todos.length;
const completed = todos.filter(todo => todo.iscompleted).length;
const remaining = todos.filter(todo => !todo.iscompleted).length;
   
  return (
<>
  <div className="mt-6 p-4 rounded-lg bg-gray-700 text-gray-100 flex justify-between items-center">
    <p className="font-semibold">Total Todos: <span className="text-blue-400">{total}</span></p>
    <p className="font-semibold">Completed: <span className="text-green-400">{completed}</span></p>
    <p className="font-semibold">Remaining: <span className="text-yellow-400">{remaining}</span></p>
  </div>
</>
  )
}

export default Taskinfo