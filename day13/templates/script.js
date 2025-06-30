
let btn = document.getElementById("btn");
let input =  document.getElementById("input")
let showup =  document.getElementById("showup")
let timerId;
let array = []

fetch('/timezones')
  .then(res => res.json()) 
  .then(data => {
    array.push(...data)
// data.forEach(element =>{ 
//  array.push(element.countryName);

//    })
   
})
.catch(error => {
    console.error('Error fetching timezones:', error);
});


console.log(array);



function findmatches(wordtomatch, array){
    const shortened = wordtomatch.slice(0, 3).toLowerCase(); 
  return array.filter(place =>{
// console.log(place);
;
      return place.countryName.toLowerCase().includes(shortened) ||
           place.name.toLowerCase().includes(shortened);
  })
}



function displaymatches(){
//  console.log(this.value);
 
 const matcharr =  findmatches(this.value, array)
 
 const html = matcharr.map(place =>{
  showup.innerHTML  = "";
  return` 
  <li class="nam">
<span class="name">${place.countryName}__${place.name}</span>

</li>`
}).join('')
// _<span class="">${place.name}</span>
 
showup.innerHTML = html;

let cl =  document.querySelectorAll(".name");

cl.forEach(el => {
el.addEventListener("click",(e)=>{
h4a.innerHTML = ""
li1.innerHTML = ""
li2.innerHTML = ""
li3.innerHTML = ""
li4.innerHTML = ""

  array.filter(time =>{
    console.log(e.target.textContent);
    console.log(time.name);
    
    if(e.target.textContent ==  `${time.countryName}__${time.name}`){
      h4a.innerHTML  = time.name;
    li1.innerHTML  = time.countryName;
    li2.innerHTML  = time.countryCode;
    li3.innerHTML  = time.continentName;
    li4.innerHTML  = time.continentCode;
    
      change.innerHTML  = ""
      // console.log(time);
      const updatetime = ()=>{
        // let alarmhour = alarm.value.split(":")[0]
        // let alarmin = alarm.value.split(":")[1]
        // if(date.getHours() == alarmhour &&  date.getMinutes() ==alarmin){
// console.log("matched");
let datime =  new Date().toLocaleString(`en-${time. countryCode}`, { timeZone: `${time.name}` });
change.innerHTML = datime;

        }

       
       
        if (timerId) clearInterval(timerId);
        timerId = setInterval(updatetime, 1000)
    }



    
  })

})
  

});

}
let vool = true;
btn.addEventListener("click",()=>{

  if(vool){
    showup.style.display = 'none'
    vool = false
  }else{
    vool = true
    showup.style.display = 'inline-block'
    
  }
})

input.addEventListener('change', displaymatches)
input.addEventListener('keyup', displaymatches)






























//    data.forEach(element => {



//    let el = element.countryName;
//    console.log ( "elemet",el);
   
// //    console.log(el.search('a'));
   


   
//    btn.addEventListener("click",()=>{
//     //    el.search(/${input.value}/)
//     console.log(input.value);
    
// el.includes(`${input.value}`)
 
// console.log(  "el" ,el);

// })
//    });


    // const india = data.find(zone => zone.name === 'Asia/Kolkata');
    // console.log('India time zone object:', india);




    // const currentTime = new Date().toLocaleString(`en-${india.countryCode}`, {
    //   timeZone: india.name
    // });

    // console.log(currentTime);