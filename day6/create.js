let input  =  document.querySelector("#myform").addEventListener("submit",function(e){
e.preventDefault();

const username = document.querySelector("input[name='username']").value;
const img = document.querySelector("input[name='url']").value;
const skills = document.querySelector("textarea[name='skills']").value;
const about = document.querySelector("textarea[name='about']").value;

// ?username=${encodeURIComponent(username)}&img=${encodeURIComponent(img)}&skillsset=${encodeURIComponent(skills)}&about=${encodeURIComponent(about)}`

sessionStorage.setItem("username", username);
sessionStorage.setItem("img", img);
sessionStorage.setItem("skillsset", skills);
sessionStorage.setItem("about", about)

const url = `blogcreation.html`


window.location.href = url;
})