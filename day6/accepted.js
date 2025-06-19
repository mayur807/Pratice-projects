const username = sessionStorage.getItem("username");
const img = sessionStorage.getItem("img");
const skills = sessionStorage.getItem("skillsset");
const about = sessionStorage.getItem("about");
document.querySelector('.name').textContent = username;
document.querySelector('.pic').src  = img;
document.querySelector('.about').textContent = skills;
document.querySelector('.aboutmore').textContent = about;