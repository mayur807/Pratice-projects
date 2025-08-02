import { createSlice ,nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos :  JSON.parse( localStorage.getItem('todos')) || [],
}

export  const todoslice = createSlice({
  name:'todo',
  initialState,
  reducers:{
addtodo:(state,action)=>{
  const fromusertodo =  {id:nanoid(), text : action.payload ,iscompleted:false }
  
 state.todos.push(fromusertodo)
},
deletetodo: (state,action) =>{
  
  state.todos =    state.todos.filter((restTodo)=> restTodo.id !== action.payload)
},
edittodo:(state,action)=>{

const {id,newtodo} = action.payload;

 let todoedit = state.todos.find((todo)=> todo.id == id)

 if(todoedit){
    todoedit.text = newtodo;
 }
},
isTodoCompleted:(state,action)=>{
// const {id}= action.payload;

const checkingIsTodoCompleted = state.todos.find((todo) => todo.id == action.payload);
if(checkingIsTodoCompleted){
  checkingIsTodoCompleted.iscompleted = !checkingIsTodoCompleted.iscompleted
}

}

  }  
})

export const {addtodo ,deletetodo,edittodo, isTodoCompleted} = todoslice.actions
export default todoslice.reducer