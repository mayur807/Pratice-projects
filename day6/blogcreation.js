const username = sessionStorage.getItem("username");
console.log(username);

// document.querySelector("#name").textContent = username;
// document.querySelector("#name").textContent = username;

let input  =  document.querySelector("#myform").addEventListener("submit",function(e){
e.preventDefault()


const skills1 = document.querySelector("textarea[name='skills1']").value;
const about1 = document.querySelector("textarea[name='about1']").value;

const skills2 = document.querySelector("textarea[name='skills2']").value;
const about2 = document.querySelector("textarea[name='about2']").value;

const skills3 = document.querySelector("textarea[name='skills3']").value;
const about3 = document.querySelector("textarea[name='about3']").value;



sessionStorage.setItem("skill1", skills1);
sessionStorage.setItem("about1", about1);
sessionStorage.setItem("skill2", skills2);
sessionStorage.setItem("about2", about2);
sessionStorage.setItem("skill3", skills3);
sessionStorage.setItem("about3", about3);


// const url = `blog.html?skillls1=${encodeURIComponent(skills1)}&about1=${encodeURIComponent(about1)}&skills2=${encodeURIComponent(skills2)}&about2=${encodeURIComponent(about2)}&skills3=${encodeURIComponent(skills3)}&about3=${encodeURIComponent(about3)}`

const url2 = `create.html`
window.location.href =  url2;


})