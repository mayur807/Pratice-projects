// Get the full query string like ?query=heythere
let params = new URLSearchParams(window.location.search);

// Get the value of "query"
let searchTerm = params.get("query");



console.log(searchTerm); // 👉 "heythere"


let searchable = searchTerm;
let searchablesummeries = [];
let star
let  end
// let img2 = document.createElement("img");
// img2.classList.add("loader")
fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchable}&srlimit=50&format=json&origin=*`)
    .then(res => res.json())
    .then(data => {
        star = performance.now();

//  let intialimg = document.querySelector(".loader2")
//  intialimg.remove()
// img2.src = "Spinner@1x-0.8s-85px-85px.gif";
// document.querySelector(".home-articles").appendChild(img2);

                     
        let searchresult = data.query.search;

        searchresult.forEach(searchitem => {
            let searchtitle = searchitem.title;

            fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchtitle)}`)
                .then(res => res.json())
                .then(searchsummry => {



                    // if (searchsummry.thumbnail && searchsummry.thumbnail.source) {
                    searchablesummeries.push(searchsummry);
                    // }


                });
        });
    });
console.log("hey");


let searched = false;

const searchstop = setInterval(() => {
    if (searchablesummeries.length > 0 && !searched) {
        searched = true

        setTimeout(() => {
            let acceptingreq = searchablesummeries


            for (let index = 0; index < acceptingreq.length; index++) {
                if (index === 0) {


// img2.remove()

                  end = performance.now();

                  const { min, sec } = checktime();

                    let searchresult_title = document.createElement("h1")
                    searchresult_title.classList.add("Featured");
searchresult_title.innerText = ` Search Result for ${searchable} (${min} min ${sec} sec)`


                    document.querySelector(".h2").appendChild(searchresult_title)
                }

                let acceptedreq = [];
                acceptedreq = acceptingreq[index]





                let searchies = document.createElement("div")
                searchies.classList.add("articles");
                searchies.innerHTML =
                    `  
      
        <div class="articles-img">
            <img style="
    width: 200px;
    height: 200px; " src="${acceptedreq.thumbnail ? acceptedreq.thumbnail.source : "/360_F_579682465_CBq4AWAFmFT1otwioF5X327rCjkVICyH.jpg"}"  alt="not available">
        </div>
<div class="article-content searchfix font1">
<a href="/search.html\"> 

<span>${acceptedreq.title}</span>
</a>
<h3 class="searchtext"> ${acceptedreq.extract}.</h3>
    <span>${acceptedreq.timestamp}| 6 min read</span> 
</div>
   
 
`
                document.querySelector(".home-articles").appendChild(searchies)
                // if(document.querySelector(".home-articles") &&     document.querySelector(".home-articles .articles"))  {
                // console.log("GOT IT ");

                // }

            }

            clearInterval(searchstop)
        }, 10000);


    }


}, 1000);


// document.querySelector(".home-articles").appendChild(searchies)

// if (document.querySelector(".home-articles")?.querySelector(".articles")) {
//     console.log("GOT IT");
//     let end = performance.now();
//     console.log(end - star);
// }

function checktime() {
    const time = end - star;
    const totsec = Math.floor(time / 1000);
    const min = Math.floor(totsec / 60);
    const sec = totsec % 60;

    return { min, sec }; // ✅ best way
}
