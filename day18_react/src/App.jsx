import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from './profile';

function FormPage() {
    const navigateurl = useNavigate();
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setcharaterAllowed] = useState(false)
  const [password, setpassword] = useState('')
  let passwordref = useRef(null)
  let [uniquename , setuniquename] = useState('')
  let [uniquepass , setuniquepass] = useState('')
  const nameref = useRef(null)
  const [namelength , setnamelength] = useState(0)
let [uniqueNumberId , setuniqueNumberId] = useState(1)
const tiggerpass =()=>{

if(nameref.current){
nameref.current.value = password;
}

}
const usegenepass =(e)=>{
e.preventDefault()
if(nameref.current){
nameref.current.value = password;
}

// window.location.href = 'https://example.com';


}


  useEffect(()=>{

    
    
    
  },[namelength])
  
  
  const openProfile = (e)=>{
    e.preventDefault(); // Prevent actual reload

localStorage.setItem('Name', uniquename)
if(uniquepass ){
  localStorage.setItem('Pass', uniquepass)
}else{
  localStorage.setItem('Pass', password)
}


  navigateurl("/profile");
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numberAllowed, characterAllowed, setpassword])

  useEffect(() => {
    passwordGenerator()


  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 my-8 text-white bg-gray-800'>
<h1 className='text-white text-center my-3'>Password Generator</h1>
<div className='flex  shadow rounded-lg overflow-hidden mb-4'>
<input 
type="text"
value={password}
className='outline-none  w-full py-1  px-3'
placeholder='Password'
readOnly
ref={passwordref}
/>
<button onClick={copyPasswordToClipboard}  className='outline-none bg-green-600 text-white px-3 py-05 shrink-0'>Copy</button>
</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>

<input 
type="range"
min={8}
max={16}
value={length}
className='cursor-pointer'
onChange={(e)=>{
  setlength(e.target.value)
}}
/>
<label>Length :{length}</label>
</div>
<div className='flex items-center gap-x-1'>

<input 
type="checkbox"
defaultChecked={numberAllowed}
id='numberInput'
onChange={()=>{
  setNumberAllowed((prev) => !prev)
}}

/>

<label>Numbers</label>
</div>
<div className='flex items-center gap-x-1'>
<input 
type="checkbox"
defaultChecked ={characterAllowed}
id='characterInput'
onChange={()=>{
  setcharaterAllowed((prev) => !prev)
}}
/>
<label>Character</label>

</div>


</div>

</div>

      <div className="flex w-full max-w-4xl gap-8  mx-auto">

        {/* <div className="flex-1 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">Password</label>
                    <input type="password" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div>
                    <label className="block text-gray-300 mb-2">OTP</label>
                    <input type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
            </form>
        </div> */}


        <div className="flex-1 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Account</h2>
          <form onSubmit={openProfile} className="space-y-4">
            <div>
              <label  className="block text-gray-300 mb-2">Name</label>
              <input
                required
                 onChange={(e)=>{                
                setuniquename(e.target.value);
              }} 
               type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <div>
              <label  className="block text-gray-300 mb-2">Password</label>
              <input 
                  required
                onChange={(e)=>{                
                setuniquepass(e.target.value);
              }}    
               ref={nameref} onClick={tiggerpass}  type="text" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500" /> <button className='mt-4 bg-green-600' onClick={usegenepass}>Use Generated Password</button>
            </div>
         
            <button  type='submit' className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Create Account</button>
          </form>
        </div>
      </div>

    </>
  )
  
}

function App(){
 return <Routes>
  <Route path="/" element={<FormPage />} /> 
  <Route path="/profile" element={<Profile />} />
</Routes>
}

export default App
