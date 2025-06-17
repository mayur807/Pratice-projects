let word = "HUMAN";
let  summeris = [];

let img = document.createElement("img");
img.classList.add("loader2")
fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${word}&srlimit=50&format=json&origin=*`)
  .then(res => res.json())
  .then(data => {
    let results = data.query.search;

img.src = "Spinner@1x-0.8s-85px-85px.gif";
document.querySelector(".home-articles").appendChild(img);
    results.forEach(item => {
      let title = item.title;

      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
        .then(res => res.json())
        .then(summary => {

if (summary.thumbnail && summary.thumbnail.source) {
  summeris.push(summary);
}


        });
    });
  });
console.log("hey");

let taking = []
let alreadyTriggered = false;

const inver = setInterval(() => {
  if(summeris.length > 0 && !alreadyTriggered){
    alreadyTriggered = true

setTimeout(() => {
  taking = summeris

  for (let index = 0; index <  Math.min(4, taking.length); index++) {
    let arr = [];
  arr =   taking[index]
if(index > 0){
  img.remove()
}



  let articles =  document.createElement("div");
articles.classList.add("articles")

articles.innerHTML = `
 
        <div class="articles-img">
            <img  style="
    width: 200px;
    height: 200px; " src="${arr.thumbnail.source}" alt="">
        </div>
<div class="article-content font1">
<a id="atag" href="blogpost.html" > 
 
${arr.title}

</a>
<div  class="content-fix"  
> <p>${arr.extract} </p></div>
<span>${arr.timestamp} </span> 
</div>


`
document.querySelector(".allarticles").appendChild(articles)




  }

  clearInterval(inver)
}, 10000);


  }


}, 1000);



// let summeris2 = [];
// let word2 = "Supernatural";

// fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${word2}&srlimit=50&format=json&origin=*`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   let result  = data.query.search;
  
// result.forEach(item =>{
//       let title = item.title;

//       fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
//         .then(res => res.json())
//         .then(summary => {

// if(summary.thumbnail && summary.thumbnail.source){
//     summeris2.push(summary);
// }

//         })




// })

//   })



let input = document.querySelector(".form-input")
input.addEventListener("input",(e)=>{
  console.log(e);
  
  console.log(e.textContent);
  
})