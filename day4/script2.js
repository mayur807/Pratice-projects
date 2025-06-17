let word2 = "Supernatural";
let  summeris2 = [];

fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${word2}&srlimit=50&format=json&origin=*`)
  .then(res => res.json())
  .then(data => {
    let results2 = data.query.search;

    results2.forEach(item2 => {
      let title2 = item2.title;

      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title2)}`)
        .then(res => res.json())
        .then(summary2 => {

if (summary2.thumbnail && summary2.thumbnail.source) {
  summeris2.push(summary2);
}


        });
    });
  });
console.log("hey");


let alreadyTriggered2 = false;

const inver2 = setInterval(() => {
  if(summeris2.length > 0 && !alreadyTriggered2){
    alreadyTriggered2 = true

setTimeout(() => {
 let  taking2 = summeris2

  for (let index = 0; index <  Math.min(4, taking2.length); index++) {
    let arr2 = [];
  arr2 =   taking2[index]



  let blogpost = document.createElement("div")
blogpost.classList.add("articles", "more-post");
blogpost.innerHTML = 
`  
        <div class="articles-img">
            <img  style="
    width: 200px;
    height: 200px; " src="${arr2.thumbnail.source}" alt="">
        </div>
<div class="article-content font1 center center2">
<a href="blogpost.html"> 

<div>${arr2.title}</div>
</a>
<h3 class="blogadjust"> ${arr2.extract} </h3>
    <span>${arr2.timestamp}}</span> 
</div>
 
`
document.getElementById("row").appendChild(blogpost)




  }

  clearInterval(inver2)
}, 10000);


  }


}, 1000);
