let bool = true;
document.querySelector("#Burger").addEventListener("click",()=>{
    console.log("clicked");
    
    if(bool){
    document.querySelector("#Burger").src = "cross.png"
    document.querySelector("#vis").style.visibility = "visible";
    document.querySelector("nav").style.height = "13vh"
    bool = false
}else{
    bool = true
    document.querySelector("nav").style.height = "6.5vh"
    document.querySelector("#vis").style.visibility = "hidden";
    document.querySelector("#Burger").src = "Burger Menu.png"

}
})