let params = new URLSearchParams(window.location.search);
let searchTerm = params.get("query");
let searchable = searchTerm;
let searchablesummeries = [];
let star
let end

fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchable}&srlimit=50&format=json&origin=*`)
    .then(res => res.json())
    .then(data => {
        star = performance.now();


                     
        let searchresult = data.query.search;

        searchresult.forEach(searchitem => {
            let searchtitle = searchitem.title;

            fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchtitle)}`)
                .then(res => res.json())
                .then(searchsummry => {
                    searchablesummeries.push(searchsummry);

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
    height: 200px; " src="${acceptedreq.thumbnail ? acceptedreq.thumbnail.source : "360_F_579682465_CBq4AWAFmFT1otwioF5X327rCjkVICyH.jpg"}"  alt="not available">
        </div>
<div class="article-content searchfix font1">
<a href="search.html"> 

<span>${acceptedreq.title}</span>
</a>
<h3 class="searchtext"> ${acceptedreq.extract}.</h3>
    <span>${acceptedreq.timestamp}</span> 
</div>
   
 
`
                document.querySelector(".home-articles").appendChild(searchies)
    

            }

            clearInterval(searchstop)
        }, 10000);


    }


}, 1000);



function checktime() {
    const time = end - star;
    const totsec = Math.floor(time / 1000);
    const min = Math.floor(totsec / 60);
    const sec = totsec % 60;

    return { min, sec }; 
}
