let boole = true

document.querySelector(".button1").addEventListener("click",()=>{
if(boole){
 document.querySelector("body").classList.add('body1');
 document.querySelector("nav").classList.add("nav1")
 document.querySelector(".button1").classList.add("button2")
 document.querySelector(".button1").textContent = "Light"
 document.querySelector(".logo").classList.add("logo2")
 document.querySelector(".logo1").classList.add("logo2")
 boole = false
 
 
}else{
    boole= true
    document.querySelector(".button1").textContent = "Dark"
    document.querySelector("body").classList.remove('body1');
    document.querySelector("nav").classList.remove("nav1")
    document.querySelector(".button1").classList.remove("button2")
    document.querySelector(".logo").classList.remove("logo2")
    document.querySelector(".logo1").classList.remove("logo2")
    
}

})