const skills1 = sessionStorage.getItem("skill1");
const about1= sessionStorage.getItem("about1");
const skills2 = sessionStorage.getItem("skill2");
const about2= sessionStorage.getItem("about2");
const skills3 = sessionStorage.getItem("skill3");
const about3= sessionStorage.getItem("about3");




document.querySelector("#name").textContent = skills1
document.querySelector("#about").textContent = about1

let  bgl = document.createElement("div")
bgl.classList.add("blogcontainer");
let h1 = document.createElement("h1");
h1.innerHTML = `Blogs by <span id="name"> ${skills2}</span>`;
bgl.appendChild(h1);
let  e2 = document.createElement("div")
e2.classList.add("blogitem");
e2.innerHTML = `
       <p><span id="about">${about2}</span></p>
                    <button class="btn btn-sm">Read More</button>
`
bgl.appendChild(e2)

let main = document.querySelector(".main");
main.appendChild(bgl)

let  bgl2 = document.createElement("div")
bgl2.classList.add("blogcontainer");
let h12 = document.createElement("h1");
h12.innerHTML = `Blogs by <span id="name"> ${skills3}</span>`;
bgl2.appendChild(h12);
let  e23 = document.createElement("div")
e23.classList.add("blogitem");
e23.innerHTML = `
       <p><span id="about">${about3}</span></p>
                    <button class="btn btn-sm">Read More</button>
`
bgl2.appendChild(e23)

// let main = document.querySelector(".main");
main.appendChild(bgl2)