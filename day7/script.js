let bool = true;
document.querySelector("#Burger").addEventListener("click",()=>{
    console.log("clicked");
    
    if(bool){
    document.querySelector("#Burger").src = "cross.png"
    document.querySelector("#vis").style.visibility = "visible";
    document.querySelector("nav").style.height = "25vh";
    // document.querySelector(".logo").style.marginTop = ' 12px';
    // document.querySelector(".icon").style.marginBottom =  "  36px;"
    
    bool = false
}else{
    // document.querySelector(".icon").style.marginTop=  " 8.3px"
    // document.querySelector(".logo").style.marginBottom = ' 12px'
    bool = true
    document.querySelector("nav").style.height = "6.5vh"
    document.querySelector("#vis").style.visibility = "hidden";
    document.querySelector("#Burger").src = "Burger Menu.png"

}
})