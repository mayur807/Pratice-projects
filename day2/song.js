const offset = Math.floor(Math.random() * 10000); 
const container = document.querySelector(".maincontainer");


const nav = document.createElement("nav")
nav.innerHTML = `
<h1 class="logo"><span>Echo_Tune</span></h1>
<p>Feel the Sound. Live the Beat </p>

`
const mid = document.createElement("div")
mid.classList.add("mid")
const end = document.createElement("div")
end.classList.add("end")

const dot = document.createElement("div");
dot.style.opacity = '0'
const left = document.createElement("button");
left.classList.add("prev")
left.innerHTML = "&#10094;"
const right = document.createElement("button");
right.classList.add("right")
right.innerHTML = " &#10095;"
const slide = document.createElement("div");
slide.classList.add("slider")

const photos = document.createElement("div")
photos.classList.add("photos")

const mainsongs = document.createElement("div")
mainsongs.classList.add("songs")

const playables = document.createElement("div");
playables.classList.add("playable")

const playablesinfo = document.createElement("div");
playablesinfo.classList.add("info2")

const playsong = document.createElement("div")
playsong.classList.add("mainsongs")


const playing = document.createElement("div")
playing.classList.add("song1")

const uppertext = document.createElement("div")
playing.classList.add("upper")



fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=f93c8005&format=json&limit=200&offset=${offset}&audioformat=mp32&imagesize=600`)
    .then(response => response.json())
    .then(data => {


        const groupeddata = {}

        data.results.forEach(song => {
           

            const key = ` ${song.artist_name}__${song.album_name}`
 

            if (!groupeddata[key]) {
                groupeddata[key] = {
                    artist: song.artist_name,
                    album: song.album_name,
                    image: song.album_image,
                    songs: []
                };

            }
        
            groupeddata[key].songs.push({
                name: song.name,
                audio: song.audio,
                releasedate: song.releasedate

            })
        });





console.log("g",groupeddata);


        Object.values(groupeddata).forEach((group, i) => {
console.log(group);


            dot.innerHTML = `
   <div>
        
<dotlottie-player
  src="https://lottie.host/1972d403-9af7-4973-822e-62907942f90b/NtUV3khJTf.lottie"
  background="transparent"
  speed="1"
  style="width: 100px; height: 60px"
  loop
  autoplay
></dotlottie-player></div>
            `

            end.innerHTML = `
<div>
<input type="range" " class="rangeinput" min="0" max="100" value="0">

</div>

`
            end.appendChild(dot)

     
            const about = document.createElement("div");
            about.classList.add("about");
            about.innerHTML = `
<img  width="100px" src = "${group.image}" alt = "${group.album}">
 <div class="spans">
 
 <span>${group.album} </span> 
 <span >${group.artist} </span> 
  </div>
`


            slide.appendChild(about)


            let index = 0;

            const visiblegrowth = 600;



            left.addEventListener("click", () => {
                index = (index - 1 + slide.querySelectorAll(".about").length) % slide.querySelectorAll(".about").length
                console.log("ley");

                updateslide()
            })
            right.addEventListener("click", () => {
                index = (index + 1) % slide.querySelectorAll(".about").length
                console.log("hey");

                updateslide()
            })



            function updateslide() {

                slide.style.transform = `translateX(-${index * visiblegrowth}px)`

            }






            
            photos.appendChild(slide)

           
            about.addEventListener("click", (e) => {


              const   svg = ` <svg class="songplayer" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="black" stroke-width="4"  fill="rgb(67, 67, 85)" fill-opacity="0.293" />
        <polygon points="40,30 70,50 40,70"  fill="black" />
        </svg> 
    
    `

                let songhtml = '';
                group.songs.forEach((song, i) => {
                    console.log();
               
                    // let svghtml = '';
      


                    songhtml += `
    <div class="song1">
     <img  class="songimg"  src = "${group.image}" alt = "${group.album}">
                                <div class="songsinfo">
                                      <audio  class="player" src="${song.audio}"></audio> 
                                    <span>${song.name}</span>
                                    <span>${song.releasedate}</span>
                                </div>
                              ${svg}   
    </div>

        `

                 

                })


                mainsongs.innerHTML = `
    <div class="mainphoto">
                    <div class="info">
                 
                        <h1>Artist name:${group.artist}</h1>
                        <h2>Album name:${group.album}</h2>
                    </div>   </div>
                    <div class="both">
                    <img class="bothimg" width="200px" src = "${group.image}" alt = "${group.album}">
              
    <div class="playable">
${songhtml}
    </div>
</div>
    `


                document.querySelectorAll(".song1").forEach((songdiv) => {
                    const audio = songdiv.querySelector('.player');
                    const playbtns = songdiv.querySelector('.songplayer');


                    if (!audio) {
                        console.log("not found");
                        return;
                    }
                    if (audio && playbtns) {
                        playbtns.addEventListener("click", () => {

                            document.querySelectorAll('.player').forEach(aud => {

           
                                if (aud !== audio) aud.pause()

                                
                            });
                            if (audio.paused) {
                                audio.play().catch(e => {
                                    if (e.name !== "AbortError");

                                })
                                audio.play(); console.log("playing:")
                                dot.style.opacity = '1'
                                playbtns.innerHTML = ""
                                playbtns.innerHTML = `
        <circle cx="50" cy="50" r="48" stroke="black" stroke-width="4" fill="rgb(67, 67, 85)" fill-opacity="0.293" />
        <rect x="35" y="30" width="10" height="40" fill="black" />
        <rect x="55" y="30" width="10" height="40" fill="black" />
    `;

                            } else {
                                audio.pause(); console.log("pause");
                                dot.style.opacity = '0'
                                    playbtns.innerHTML = ""
                                playbtns.innerHTML = `
  
        <circle cx="50" cy="50" r="48" stroke="black" stroke-width="4"  fill="rgb(67, 67, 85)" fill-opacity="0.293" />
        <polygon points="40,30 70,50 40,70"  fill="black" />
    
    
    `;
                            }

                        })

                    }
                    const myprogressbar = document.querySelector(".rangeinput")
                    if (audio && myprogressbar) {

                        myprogressbar.addEventListener('input', () => {
                            if (isFinite(audio.duration) && audio.duration > 0) {

                                audio.currentTime = myprogressbar.value * audio.duration / 100
                            }


                        });


                        audio.addEventListener("timeupdate", () => {
                            if (isFinite(audio.duration) && audio.duration > 0) {

                                myprogressbar.value = (audio.currentTime / audio.duration) * 100
                            }


                        })
                    }
                });



            })
   
            mid.appendChild(photos)
            mid.appendChild(mainsongs)
            mid.appendChild(left)
            mid.appendChild(right)
 

        })

      






    });


container.appendChild(nav)
container.appendChild(mid)
container.appendChild(end)



