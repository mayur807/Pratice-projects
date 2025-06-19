// const username = sessionStorage.getItem("username");
// const img = sessionStorage.getItem("img");
// const skills = sessionStorage.getItem("skillsset");
// const about = sessionStorage.getItem("about");


const skills1 = sessionStorage.getItem("skill1");
const about1= sessionStorage.getItem("about1");
const skills2 = sessionStorage.getItem("skill2");
const about2= sessionStorage.getItem("about2");
const skills3 = sessionStorage.getItem("skill3");
const about3= sessionStorage.getItem("about3");

// console.log(skills)

document.querySelector("#aboutme").textContent = about1;
document.querySelector(".skillitem").textContent = skills1;

let aboutme =  document.createElement("div");
aboutme.classList.add("intro");
aboutme.innerHTML =  `
 <h1>About me</h1>
                <p id="aboutme">${about2}</p>
                <h2>My skills</h2>
                <div class="skillcontainer">
                  <div class="skillitem">
                  ${skills2} 
                         </div>
                 
              </div>

`

let main = document.querySelector(".main");
main.appendChild(aboutme)

let aboutme2 =  document.createElement("div");
aboutme2.classList.add("intro");
aboutme2.innerHTML =  `
 <h1>About me</h1>
                <p id="aboutme">${about3}</p>
                <h2>My skills</h2>
                <div class="skillcontainer">
                  <div class="skillitem">
                  ${skills3} 
                         </div>
                 
              </div>

`
main.appendChild(aboutme2)

//   <div class="intro">

//                 <h1>About me</h1>
//                 <p id="aboutme">This is dummy about me</p>
//                 <h2>My skills</h2>
//                 <div class="skillcontainer">
//                    <div class="skillitem"> 
             
//                 </div>
                 
//                 </div>
//             </div>