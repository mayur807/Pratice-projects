import { useState } from 'react'

import './App.css'
let bool = true;
let bool1 = true;
let bool2 = true;
function App() {
  // let [count, setCount] = useState(0)
  // const increase = () => {
  //   if (count == 20) {

  //     console.log
  //       ('cant increase anymore')
  //   } else {
  //     setCount(count + 1)

  //   }
  // }
  // const decreasing = () => {
  //   if (count == 0) {

  //     console.log
  //       ('cant decrease anymore')
  //   } else {
  //     setCount(count - 1)

  //   }

  // }
  let [background, setbackground] = useState('light is on');
  let [myStyle, setmystyle] = useState({
    background: 'radial-gradient(circle at 30% 30%, rgba(255, 220, 100, 0.9) 0%, rgba(255, 200, 50, 0.8) 30%, rgba(255, 180, 0, 0.6) 60%, rgba(200, 150, 0, 0.4) 100%)',
    borderColor: 'rgba(255, 220, 100, 0.5)',
    boxShadow: 'inset -3px -3px 8px rgba(180, 120, 0, 0.3), inset 3px 3px 8px rgba(255, 255, 200, 0.4), 0 0 30px rgba(255, 200, 50, 0.6), 0 0 50px rgba(255, 180, 0, 0.3)'
  });


  const bgchange = () => {
    if (bool) {
      setbackground('light is off');
      setmystyle({
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        border: '2px solid rgba(200,200,200,0.3)',
        boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1), inset 5px 5px 10px rgba(255,255,255,0.1), 0 0 20px rgba(0,0,0,0.2)'
      });

      bool = false;

    } else {
      bool = true;
      setbackground('light is on');
      setmystyle({
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 220, 100, 0.9) 0%, rgba(255, 200, 50, 0.8) 30%, rgba(255, 180, 0, 0.6) 60%, rgba(200, 150, 0, 0.4) 100%)',
        borderColor: 'rgba(255, 220, 100, 0.5)',
        boxShadow: 'inset -3px -3px 8px rgba(180, 120, 0, 0.3), inset 3px 3px 8px rgba(255, 255, 200, 0.4), 0 0 30px rgba(255, 200, 50, 0.6), 0 0 50px rgba(255, 180, 0, 0.3)'

      });
    }
    //         setmystyle({
    //   backgroundColor: bool ?'black' : 'yellow',}
    // )
  }

  let [hideunhide, sethideunhide] = useState({ visibility: 'visible', })
  let [pass, setpass] = useState("hide")
  const passtoggle = () => {
    if (bool1) {
      setpass('show')
      sethideunhide(hideunhide = {
        visibility: 'hidden',
      })
      bool1 = false
    } else {
      bool1 = true
      setpass('hide')

      sethideunhide(hideunhide = {
        visibility: 'visible'
      })
    }
  }
  let randomcolour = Math.floor(Math.random() * 7)
  let coloursarr = ['blue', 'indigo', 'black', 'yellow', 'red', 'purple', 'pink']
let  [checkcolour , setcheckcolour] = useState('black')

let [box, setbox] = useState({
  height: '100px',
  width: '150px',
  backgroundColor: 'black' ,
})

let colourchange = () => {
  setbox({
    height: '100px',
    width: '150px',
      backgroundColor: `${coloursarr[randomcolour]}`,
    })
    setcheckcolour(`${coloursarr[randomcolour]}`)
  }
  

  let [likes, setlikes] = useState('NO likes Yet')


  let likecounter = () => {
    if (typeof likes == 'string') {
      setlikes(likes = 1)
    } else
      if (typeof likes == 'number') {
        setlikes(likes = likes + 1)
        if (likes == 11) {
          setlikes("YOU liked it")
        }
      }
  }

  let [namechange, setnamechange] = useState("Guest")
  let [hidingbtn, sethidingbtn] = useState()

  let username = () => {
    sethidingbtn({
      visibility: 'hidden',
    })
    setnamechange("Mayur")
  }

  let [fontcounter, setfountcounter] = useState(16)
  let [fontsizechange, setfontsizechange] = useState({
    fontSize: `${fontcounter}px`,
  })

  let fontincrease = () => {


    if (fontcounter <= 29) {

      setfountcounter(fontcounter = fontcounter + 1)

      setfontsizechange({
        fontSize: `${fontcounter}px`,
      })
    } else {

      setfontsizechange({
        fontSize: `${30}px`,
      })
    }

  }
  let fontdecrease = () => {
    console.log(fontcounter);

    if (fontcounter >= 11) {

      setfountcounter(fontcounter = fontcounter - 1)
      setfontsizechange({
        fontSize: `${fontcounter}px`,
      })

    } else {
      setfontsizechange({
        fontSize: `${10}px`,
      })

    }
  }
  let [winner, setwinner] = useState('None');
  let [dogscounter, setdogscounter] = useState(0);
  let [catscounter, setcatscounter] = useState(0);

  let dogs = () => {
    setdogscounter(dogscounter = dogscounter + 1)

    if (dogscounter == catscounter) {
      setwinner("None")
    }
    if (dogscounter > catscounter) {

      setwinner("dog")
    }
  }

  let cats = () => {
    setcatscounter(catscounter = catscounter + 1)


    if (dogscounter == catscounter) {
      setwinner("None")
    }
    if (catscounter > dogscounter) {

      setwinner("cat")
    }
  }

  let emojiarr = ['🙂', '😐', '😢', '😠']

  let [emojicounter, setemojicounter] = useState(0)
  let [showemoji, setshowemoji] = useState(emojiarr[0])
  let [emojitext, setemojittext] = useState("Happy")

  let changeemoji = () => {
    setemojicounter(emojicounter = emojicounter + 1)

    if (emojicounter == 4) {
      setemojicounter(emojicounter = 0)
    }
    setshowemoji(emojiarr[emojicounter])
    if (emojicounter == 0) {
      setemojittext("Happy")
    }
    else if (emojicounter == 1) {
      setemojittext("Neutral")
    } else if (emojicounter == 2) {
      setemojittext("Sad")
    }
    else if (emojicounter == 3) {
      setemojittext("Angry")
    }
  }

  let [isloggedin, setisloggedin] = useState("Logged In")
  let [logintext, setlogintext] = useState("You Are Logged In")

  let checklogin = () => {
    if (bool2) {
      setisloggedin("Log_Out")
      setlogintext("You Are Log_Out")
      bool2 = false
    } else {
      setisloggedin("Logged In")
      setlogintext("You Are Logged In")
      bool2 = true;
    }
  }


  let [traficchange, settraficchange] = useState("Stop")
  let [traficcounter, settraficcounter] = useState(0)
  let [traficlight, settraficlight] = useState({
    height: '150px',
    width: '50px',
    borderRadius: '50%',
    backgroundColor: 'Red',

  })


  let traficcolourchange = () => {
    settraficcounter(traficcounter = traficcounter + 1)

    if (traficcounter == 3) {
      settraficcounter(traficcounter = 0)
    }

    if (traficcounter == 0) {
      settraficlight({
        height: '150px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: 'red'

      })
      settraficchange('Stop')

    }
    else if (traficcounter == 1) {
      settraficlight({
        height: '150px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: 'yellow'

      })
      settraficchange('Ready')
      settraficchange('Ready')

    } else if (traficcounter == 2) {

      settraficlight({
        height: '150px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: 'green'


      })
      settraficchange('Go')
    }



  }



















  return (
    <>
       {/* <button onClick={increase}>increasing{count}</button>
      <button onClick={decreasing}>desreasing{count}</button>
      
      
      <button onClick={bgchange}>{background}</button>
      */}






      <div className='introline'>
        <h2>Learn Reacts   <strong>Use State</strong> hook with these projects </h2>
      </div>
      <div class="container">
        <div className="item">
          <h1>🧠 1. **Light Switch**</h1>
          <div >
            <p><strong>Main Task:</strong> Make a button that toggles a light ON and OFF (text only: "Light is ON" / "Light is OFF").</p>
            <p><strong>Extra:</strong> Change the background color (like yellow when ON, black when OFF).</p>
          </div>

          {/* <div style={myStyle}
      >bulb</div> */}

          <div class="bulb bulb-on">
            <div style={myStyle} class="bulb-glass">
              <div class="filament"></div>
            </div>
            <div class="bulb-base"></div>
          </div>
          <button  onClick={bgchange}>{background}</button>
        </div>

        <div className="item">
          <h1>🧠 2. **Show/Hide Password**</h1>
          <p><strong>Main Task:</strong> A text field with a password and a button that shows/hides the password.</p>
          <p><strong>Extra:</strong> Change button text dynamically to "Show" or "Hide".</p>
          <button className='pt-5' onClick={passtoggle}>{pass}</button>
              <div className='top-gap' style={hideunhide}>Password:1234</div>  

        </div>

        <div className="item">
          <h1>🧠 3. **Color Box**</h1>
          <p><strong>Main Task:</strong> Clicking a button changes the color of a box randomly (choose from an array of colors).</p>
          <p><strong>Extra:</strong> Also show the current color name (like "Color: Blue").</p>
      <button className='pt-5' onClick={colourchange}>Change  colour</button> 

<div className='colour-change-box' style={box}>{checkcolour}</div>
  
        </div>

        <div className="item">
          <h1>🧠 4. **Like Button**</h1>
          <p><strong>Main Task:</strong> A button that shows how many times you've liked (e.g. "Likes: 4").</p>
          <p><strong>Extra:</strong> If likes go above 10, show a message "You're loving it!" If likes are 0, show "No likes yet".</p>
               
      <button onClick={likecounter}>{likes}</button> 
        </div>

        <div className="item">
          <h1>🧠 5. **Name Changer**</h1>
          <p><strong>Main Task:</strong> Have a name (e.g., "Hello, Guest") and a button "Change Name". On click, change it to your name.</p>
          <p><strong>Extra:</strong> After name is changed once, disable the button (so user can't change again).</p>

      <button className='pt-5' style={hidingbtn}  onClick={username}>Mayur</button> 
                <p className='pt-5' >Hello, {namechange}</p>
        </div>

        <div className="item">
          <h1>🧠 6. **Font Size Changer**</h1>
          <p><strong>Main Task:</strong> Two buttons: Increase and Decrease font size of a text.</p>
          <p><strong>Extra:</strong> Limit font size between 10px and 30px.</p>
<div className='pt-2'>

     <button  onClick={fontincrease}>increase</button> <br />
     <button onClick={fontdecrease}>decrease</button> 
</div>
     <p className='pt-1' style={fontsizechange}>Font Size Changer</p>

        </div>

        <div className="item">
          <h1>🧠 7. **Simple Poll**</h1>
          <p><strong>Main Task:</strong> Two buttons: "Cats" and "Dogs" Each click increases the vote count for that option.</p>
          <p><strong>Extra:</strong> Show which one is leading (e.g., "Cats are winning!").</p>
<div className="pt-2">

<button onClick={dogs}>Dogs {dogscounter}</button>
<button onClick={cats}>Cats {catscounter}</button>
</div>
          <p className='pt-3'>{winner} Are Winning</p>

        </div>

        <div className="item">
          <h1>🧠 8. **Emoji Mood Tracker**</h1>
          <p><strong>Main Task:</strong> A button that cycles through different emoji moods (🙂😐😢😠).</p>
          <p><strong>Extra:</strong> Also show a text like "Happy", "Neutral", "Sad", "Angry" based on emoji.</p>
<button className='pt-2' onClick={changeemoji}>{showemoji}</button>

<p className='pt-3'>{emojitext}</p>  

        </div>

        <div className="item">
          <h1>🧠 9. **Login Button Toggle**</h1>
          <p><strong>Main Task:</strong> Button says "Login" — after clicking, change it to "Logout".</p>
          <p><strong>Extra:</strong> Show text: "You are logged in" or "You are logged out".</p>


 <button className='pt-2' onClick={checklogin}>{isloggedin}</button>
<p className='pt-3'>{logintext}</p>

        </div>

        <div className="item">
          <h1>🧠 10. **Traffic Light**</h1>
          <p><strong>Main Task:</strong> A button changes a colored circle: Red → Yellow → Green → Red → …</p>
          <p><strong>Extra:</strong> Also display text like "Stop", "Ready", "Go" with each color.</p>

<button className='pt-2' onClick={traficcolourchange}> {traficchange} </button> 
           <div className='pt-1' style={traficlight}></div>

        </div>
      </div>

    </>
  )
}

export default App
