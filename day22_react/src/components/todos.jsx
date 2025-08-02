import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo, edittodo, isTodoCompleted} from '../Features/todoslice'
function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoRef.todos)
useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todos))

},[todos])

    const [edit, setedit] = useState([]);
    // const [checkistodocompleted, setcheckistodocompleted] = useState(false)
    const handleedit = (id) => {
        if (edit.includes(id)) {
            setedit(edit.filter((i) => i !== id))
        } else {
            setedit([...edit, id])
        }
    }

    const handleInputChange = (id, newtodo) => {
        dispatch(edittodo({ id, newtodo }))
    }

const toggletodo = (id)=>{
dispatch(isTodoCompleted(id))

}
    return (
        <>
            <div>
                <ul className="space-y-4">
                    {todos.map((todo) =>
                        <li key={todo.id} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-gray-700 rounded-lg px-4 py-2 shadow">
                            <div className="flex flex-row flex-1 items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={todo.iscompleted}
                                    onChange={(()=> toggletodo(todo.id))}
                                    className="accent-blue-600 w-5 h-5"
                                />
                                <input
                                    style={{textDecoration:todo.iscompleted? "line-through" : "none"}}
                                    type="text"
                                    value={todo.text}
                                    onChange={(e) => handleInputChange(todo.id, e.target.value)}


                                    readOnly={!edit.includes(todo.id)}
                                    className={`flex-1 bg-transparent text-gray-100 px-2 py-1 rounded focus:outline-none ${todo.iscompleted ? "line-through" : ""}`}
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                  onClick={() => dispatch(deletetodo(todo.id))}
                                  className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm transition w-full sm:w-auto"
                                >
                                  delete
                                </button>
                                <button
                                  onClick={() => handleedit(todo.id)}
                                  className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm transition w-full sm:w-auto"
                                >
                                  edit
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Todos