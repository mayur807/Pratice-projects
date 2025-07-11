import { use } from 'react';
import { useState,useEffect ,useRef} from 'react'
import './App.css'

function App() {
let [Component, setComponent] = useState({
  visibility:'visible'
});
useEffect(()=>{
 let time =  setTimeout(() => {
  setComponent( {
    visibility:'hidden'
  })
 return () =>  clearTimeout(time)
}, 3000);
}, [])

let [counter, setcounter]  = useState(0)
useEffect(()=>{


  const  increament =  setInterval(() => {

    setcounter((prev) =>{ // 0// 9

      
      if(prev == 9){  //false // false
        clearInterval(increament) 
      }
        return prev + 1  // 1 //9+1 = 10
    })
  }, 1000); // so it dose not go anywhere untill this block of setinverval is finished, right? ur saying like that?
  // it wont even check below line first it will wait for it to gets cleard and dose not check anything


  return ()=> clearInterval(increament)

},[])





let [currenttime, setcurrenttime] = useState("");
useEffect(()=>{
 let currtime =  setInterval(() => {
    
    let currdate = new Date().toLocaleTimeString();
    setcurrenttime(currdate)
  }, 1000);

  return ()=> currtime
},[])

  let checkstop = useRef(false);
let [colourbox, setcolourbox] = useState(
  {
  height: "100px",
  width: "100px",
  backgroundColor: "black"
}
);

useEffect(()=>{

 let  colourinvertal =   setInterval(() => {
   if(checkstop.current){
     clearInterval(colourinvertal);
     return
    } 
     let randomcolour = `#${Math.round(Math.random()*33)}${Math.round(Math.random()*66)}${Math.round(Math.random()*99)}`
     setcolourbox({
      height: "100px",
      width: "100px",
      backgroundColor: randomcolour,
    });
  }, 1000);




  return  ()=> clearInterval(colourinvertal)
},[])
  let stopbtn =  () =>{
    checkstop.current = true;
console.log("clicked");
  }



  // let scorll = document.getElementById('refe');
  const scrollRef = useRef(null);
let [scolled , setscolled ] = useState(0);

const scolledshow = ()=>{

const el = scrollRef.current;
  if(el){
    const sctop = el.scrollTop;
   setscolled(sctop);
   
   if(sctop > 300){
  
     el.scrollTop = 0;
  }}}

  
let [windowW , setwindowW] = useState(window.innerWidth)
let[viewtype, setviewtype] = useState('computer')
useState(()=>{
 let clrwid =  setInterval(() => {
setwindowW((prev => {
if(prev > 700){
  setviewtype("computer")
}else{
  setviewtype("mobile")
  
}


  if(prev > window.innerWidth || prev < window.innerWidth){
   setwindowW(window.innerWidth)
  }
  return window.innerWidth
}))}, 500);




  return ()=> clrwid

},[])

let [x, setx] = useState('')
let [y, sety] = useState('')

useEffect(()=>{

  const handledectectmouveXandY =(event)=>{
    
    setx(event.clientX);
    sety(event.clientY);
    
  }
    document.addEventListener('mousemove', handledectectmouveXandY)
  
  
  return ()=>  document.addEventListener('mousemove', handledectectmouveXandY)
},[])


let [counterval, setcounterval] = useState(0);
let [localval , setlocalval] = useState();


  const inceval =() =>{
    console.log('clicked');
    
    setcounterval((prev) =>{
 
      let update  =  prev + 1
      localStorage.setItem('num',update)
      
      return update
      
      
      
    })  
  }
useEffect(()=>{



   setlocalval( localStorage.getItem('num'))
},[])

let [jokes , setjokes] = useState('')


let nextjoke = ()=>{

  fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' }
  })
  .then(res => res.json())
  .then(data =>
    
    setjokes(data.joke))
  
}

useEffect(() => {
  nextjoke();  // run once on mount
}, []);

let [timer, settimer] = useState(10);
  
useEffect(()=>{
 let timerinvertval =  setInterval(() => {
  settimer(prev =>{
    if( prev == 1 ){
      clearInterval(timerinvertval)
  setTimeout(() => settimer("Time’s up!"), 0);
  return 0;
    }
    return prev - 1
  })

  
}, 1000);

return ()=> clearInterval(timerinvertval)

},[])

  return (


    <>










 <div className='introline'>
        <h2>Learn Reacts   <strong>Use Effect & UseRef</strong> hook with these projects </h2>
    </div>
    <div className="container">
        <div className="item">
            <h1>Project #1</h1>
            <div>
                <p><strong>🧠 Main Task:</strong> Show "Component Mounted" on first load</p>
                <p><strong>🌟 Extra Task:</strong> Hide it after 3 seconds using `setTimeout`</p>
            </div>

            <div style={Component}>Compoent mounted</div>
        </div>

        <div className="item">
            <h1>Project #2</h1>
            <p><strong>🧠 Main Task:</strong> Auto-increase a number every 1 sec</p>
            <p><strong>🌟 Extra Task:</strong> Stop when it reaches 10</p>

            <div>{counter}</div>
        </div>

        <div className="item">
            <h1>Project #3</h1>
            <p><strong>🧠 Main Task:</strong> Display current time</p>
            <p><strong>🌟 Extra Task:</strong> Update every second (like a digital clock)</p>

<div>{currenttime}</div>

        </div>

        <div className="item">
            <h1>Project #4</h1>
            <p><strong>🧠 Main Task:</strong> Background color changes every 2 sec</p>
            <p><strong>🌟 Extra Task:</strong> Stop on button click</p>

            <div style={colourbox}></div>
<button onClick={stopbtn}>stop</button>
        </div>

        <div className="item">
          <div>
            
            <h1>Project #5</h1>
            <p><strong>🧠 Main Task:</strong> Show scroll position (px) on scroll</p>
            <p><strong>🌟 Extra Task:</strong> If greater than 300px, show "Scroll back up"</p>
          </div>

            <div  ref={scrollRef}  onScroll={scolledshow} id='refe'  className='h-[100%px] bg-red-50 w-[95%] overflow-auto'>
<div className='bg-red-200  h-[700%] w-full flex flex-col'>
<p className='text-cyan-500'>Lorem ipsum dolor sit amet.</p>
  <p className='text-red-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, itaque..</p>
  <p className='text-violet-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio id accusamus, repellat sit veniam.</p>
<p className='text-blue-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aut corrupti tempora dolores quibusdam totam ipsam minima recusandae veritatis tenetur!</p></div></div>

<p>{scolled}px</p>
        </div>

        <div className="item">
            <h1>Project #6</h1>
            <p><strong>🧠 Main Task:</strong> Show window width (resize listener)</p>
            <p><strong>🌟 Extra Task:</strong> Show "Mobile View" if width less than 768px`</p>

            <div> width: {windowW} viewport : {viewtype}</div>
        </div>

        <div className="item">
            <h1>Project #7</h1>
            <p><strong>🧠 Main Task:</strong> Show mouse X, Y position</p>
            <p><strong>🌟 Extra Task:</strong> Update in real-time as user moves mouse</p>
            <div >x position{x} <br />y position{y}</div>
        </div>

        <div className="item">
            <h1>Project #8</h1>
            <p><strong>🧠 Main Task:</strong> Save a number to `localStorage`</p>
            <p><strong>🌟 Extra Task:</strong> Auto-load the saved number on reload</p>
<button onClick={inceval} >counter {counterval} </button>
<p>prev : {localval}</p>

        </div>

        <div className="item">
            <h1>Project #9</h1>
            <p><strong>🧠 Main Task:</strong> Fetch and show a random joke on load</p>
            <p><strong>🌟 Extra Task:</strong> Refresh joke on button click</p>

            
<div>Random Joke: {jokes ? jokes : 'loading'}</div>
<button onClick={nextjoke}>Get joke</button>
        </div>

        <div className="item">
            <h1>Project #10</h1>
            <p><strong>🧠 Main Task:</strong> Countdown timer from 10</p>
            <p><strong>🌟 Extra Task:</strong> Show "Time's up!" when it hits 0</p>
            

<div>Countdown {timer}</div>
        </div>
    </div>
    </>
  )
}

export default App
