 function notifrunner(){

   
   const notyf = new Notyf({
     types: [
       {
         type: 'custom',
         background: 'linear-gradient(to right,rgb(125, 125, 125),rgb(249, 249, 249))',
         icon: false,
         duration: 2000,
         dismissible: true,
         
        }
      ]
    });

    notyf.open({
    type: 'custom',
    message: 'Link Copied'
  });
}
let page = 1;
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let mainvideo = document.getElementById('myVideo');
let source = document.getElementById('mySource');
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let input = document.getElementById("input")
let rightslidin= document.getElementById("rightsliding")
let leftslidin= document.getElementById("leftsliding")
const loader = document.getElementById("loader");
const randomsrc = document.getElementById("randomsrc");
const copybtn =  document.getElementById("copyBtn");
 copybtn.addEventListener("click",copying)
function copying(){
   navigator.clipboard.writeText(randomsrc.textContent);
  //  alert(` copied ${randomsrc.textContent}` )
  notifrunner()
}

 let bool = true
let bool2 = true
   function src() {
     randomsrc.textContent = source.src;
      
    }

rightslidin.addEventListener("click", ()=>{
  if(bool){
 left.classList.remove("slideleft-backword")
    left.classList.add("slideleft")
    bool =false
  }else{
    left.classList.remove("slideleft")
    left.classList.add("slideleft-backword")
    bool =  true

  }
})
leftslidin.addEventListener("click", ()=>{
  if(bool2){
 right.classList.remove("slideright-backword")
  right.classList.add("slideright")
    bool2 =false
  }else{
    right.classList.remove("slideright")
    right.classList.add("slideright-backword")
    bool2 =  true

  }
})


input.addEventListener("change",(e)=>{
  

   newkeyword =  e.target.value;
fetchVideos(newkeyword)
   src()
})

let newkeyword = "explore"

const keywords = [
  "forest", "ocean", "water", "mountains", "river", "desert", "rain", "sunset", "snow", "flowers", "sky", "trees",
  "people", "dancing", "exercise", "fitness", "yoga", "fashion", "friends", "travel", "couple", "lifestyle",
  "animals", "cats", "dogs", "birds", "wildlife", "lion", "horse", "elephant", "insects",
  "games", "gaming", "computer", "technology", "coding", "programming", "phone", "virtual reality", "robot",
  "city", "buildings", "streets", "traffic", "architecture", "skyline", "urban",
  "cars", "bike", "motorcycle", "airplane", "train", "travel",
  "abstract", "background", "bokeh", "colors", "light", "motion", "animation",
  "food", "cooking", "coffee", "drinks", "fruits", "kitchen",
  "office", "laptop", "studying", "school", "business", "meeting", "books",
  "birthday", "wedding", "celebration", "party", "festival",
  "fire", "smoke", "slow motion", "time lapse", "drone", "underwater", "aerial","cartoon"
];

console.log(keywords.length);



keywords.forEach((e, i) => {
  if (i < 42) {
    // console.log(e);

    let span = document.createElement("span")
    span.classList.add("leftspans")
    // console.log(span); 
    span.innerHTML = e;
    left.appendChild(span)

    span.addEventListener("click" ,(e)=>{
   newkeyword =  e.target.textContent;
fetchVideos(newkeyword)
     src()
     
      
    })
  }
  
  
  if(i > 41){
    // console.log("second",e);
    
        let span = document.createElement("span")
        span.classList.add("rightspans")
        // console.log(span); 
        span.innerHTML = e;
        right.appendChild(span)

           span.addEventListener("click" ,(e)=>{
   newkeyword =  e.target.textContent;
fetchVideos(newkeyword)
 
         src()
      
    })
    
  }
  
})

fetchVideos(newkeyword)
function fetchVideos(keyword){
   
   loader.style.opacity = '1';
fetch(`https://api.pexels.com/videos/search?query=${keyword}&per_page=80&page=${page}`, {
  headers: {
    Authorization: "WQxlBiAWuH7Y6asmAsaTCS4vFOkuMGKhC9i8W6vAPqqKUmeKYsj9AThg"  }
})
  .then(response => response.json())
  .then(data => {
     
    let arr = data.videos



      .filter(element => element.video_files.length > 0)
      .map(element => element.video_files[0].link)


    let currentIndex = 0;

    if (arr.length > 0) {
      source.src = arr[currentIndex];
      mainvideo.load()
    }

    next.addEventListener("click", () => {
      console.log("next");
      currentIndex = (currentIndex + 1) % arr.length
      source.src = arr[currentIndex];
      mainvideo.load();
      src()
    })
    prev.addEventListener("click", () => {
      console.log("next");
      currentIndex = (currentIndex - 1 + arr.length) % arr.length;
      source.src = arr[currentIndex];
      mainvideo.load();
      src()
    })
    loader.style.opacity = '0';
 
    

  })
  .catch(error => {
    loader.style.opacity = '0';
    console.error("Error fetching from Pexels API:", error);
  });
}