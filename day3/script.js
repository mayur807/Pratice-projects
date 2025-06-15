score = 0;
let prev =  0;
cross = true;

const fifty = document.querySelector('.fifty');
const plane = document.querySelector('.plane');
// const bullet = document.querySelector('.bullet');
let fiftyleft;
let planeleft;
let plane_fiftyx;
let fireaud = new Audio("rocket-launcher-307512.mp3");
let dieaud = new Audio("dumbfounded-pain-102130.mp3");
let overaud = new Audio("game-over-deep-male-voice-clip-352695.mp3");
let dinoaud = new Audio("monster-10-307190.mp3")

window.addEventListener('click', function playDino() {
    dinoaud.play();
    window.removeEventListener('click', playDino); 
});


let randomval = Math.round(Math.random() * 25)

document.querySelector(".pet1").style.left = randomval * 2 + "px";
document.querySelector(".pet1").style.top = randomval * 3 + "px";
document.querySelector(".pet1").style.right = randomval * 4 + "px";
document.querySelector(".pet1").style.bottom = randomval * 5 + "px";

document.querySelector(".pet2").style.left = randomval * 6 + "px";
document.querySelector(".pet2").style.top = randomval * 7 + "px";
document.querySelector(".pet2").style.right = randomval * 8 + "px";
document.querySelector(".pet2").style.bottom = randomval * 9 + "px";

document.querySelector(".pet3").style.left = randomval * 9 + "px";
document.querySelector(".pet3").style.top = randomval * 8 + "px";
document.querySelector(".pet3").style.right = randomval * 7 + "px";
document.querySelector(".pet3").style.bottom = randomval * 6 + "px";


document.querySelector(".pet4").style.left = randomval * 4 + "px";
document.querySelector(".pet4").style.top = randomval * 3 + "px";
document.querySelector(".pet4").style.right = randomval * 2 + "px";
document.querySelector(".pet4").style.bottom = randomval * 1 + "px";



setInterval(() => {

    fiftyleft = parseInt(window.getComputedStyle(fifty, null).getPropertyValue("left"))
    planeleft = parseInt(window.getComputedStyle(plane, null).getPropertyValue("left"))

    plane_fiftyx = Math.abs(fiftyleft - planeleft);


}, 50);
document.onkeydown = function (e) {

    //   fiftyleft =   parseInt(window.getComputedStyle(fifty, null).getPropertyValue("left"))
    //   planeleft=   parseInt(window.getComputedStyle(plane, null).getPropertyValue("left"))
    if (e.keyCode == 32) {
        const newbullet = document.createElement("div")
        newbullet.classList.add("bullet")
        //  bullet.classList.add("fire");  
        const planeRect2 = plane.getBoundingClientRect();
        newbullet.style.position = "absolute";
        newbullet.style.left = planeRect2.right + "px";
        newbullet.style.bottom = (window.innerHeight - planeRect2.bottom + 30) + "px";

        document.querySelector(".gamecontainer").appendChild(newbullet)

        
        let bullet = setInterval(() => {
            let goinleft = parseInt(newbullet.style.left)
            newbullet.style.left = goinleft + 50 + "px";
fireaud.play()
             document.querySelectorAll(".box1").forEach(element => {
                
                let buttetrect = newbullet.getBoundingClientRect()
               let box =  element.getBoundingClientRect()

let horidis = buttetrect.right > box.left && buttetrect.left < box.right ;
let vertidis = buttetrect.bottom > box.top && buttetrect.top < box.bottom ;

                if (horidis && vertidis) {
let newbox = document.createElement("div")
newbox.classList.add("box1")

newbox.style.position = "absolute";
// newbox.style.left = randomval * 9+ "px";
// newbox.style.top = randomval * 6 + "px";
// newbox.style.right = randomval * 7 + "px";
// newbox.style.bottom = randomval * 8 + "px";
let boxSize = 35
let container = document.querySelector(".shooting");
let containerRect = container.getBoundingClientRect();
let maxLeft = containerRect.width - boxSize;
let maxTop = containerRect.height - boxSize;

let randomLeft = Math.floor(Math.random() * maxLeft);
let randomTop = Math.floor(Math.random() * maxTop);

     newbox.style.left = randomLeft + "px";
newbox.style.top = randomTop + "px";

document.querySelector(".shooting").appendChild(newbox)
element.remove();
dieaud.play()

              newbullet.remove();
              clearInterval(bullet);

              
                     score += 1;
        updatesocre(score)
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);
                   

                } else {
                    console.log("missed");

                }


            });





            if (goinleft >  window.innerWidth) {
                clearInterval(bullet);
                newbullet.remove(); 
            } 




        }, 90);



    }




    if (e.keyCode == 38) {
        // dino = document.querySelector(".dino");
        plane.classList.add("animatedino");
        
        // bullet.classList.add("animatedino");
        // console.log ( bullet.style.left  = planeRect2.left)
        // let planeRect2;
        setInterval(() => {
            // console.log(planeRect2.left);
            // console.log(planeRect2.bottom);

            // bullet.style.left = planeRect2.right + "px";
            // bullet.style.bottom = planeRect2.top + "px";
        }, 250);

        setTimeout(() => {
            plane.classList.remove("animatedino")
            // bullet.classList.remove("animatedino")
        }, 400)
    }
    if (e.keyCode == 39) {
        if (plane_fiftyx < 200) {
            console.log("col");
            console.log(plane_fiftyx);

            e.preventDefault();

        } else {
            // dino = document.querySelector(".dino");
            let planex;
            planex = parseInt(window.getComputedStyle(plane, null).getPropertyValue("left"));
            plane.style.left = planex + 200 + "px"
            console.log(plane_fiftyx);


        }
    }
    if (e.keyCode == 37) {
        let planex;
        planex = parseInt(window.getComputedStyle(plane, null).getPropertyValue("left"));
        plane.style.left = planex - 200 + "px"
        console.log(plane_fiftyx);
    }

}

setInterval(() => {
    // const plane2 = document.querySelector('.plane')
    gameover = document.querySelector(".gameover")
    dinosaur = document.querySelector(".dinosaur")
    obstacle = document.querySelector(".obstacle")

    // console.log(dinosaur);

    // planeleft = parseInt(window.getComputedStyle(plane2, null).getPropertyValue("left"))
    // planetop = parseInt(window.getComputedStyle(plane2, null).getPropertyValue("top"))
    // planeright = parseInt(window.getComputedStyle(plane2, null).getPropertyValue("right"))
    // planebottom = parseInt(window.getComputedStyle(plane2, null).getPropertyValue("bottom"))
    // console.log(dinoleft,dinoright , dinotop, dinobottom);

    // obstacleleft = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("left"))
    // obstacletop = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("top"))
    // obstacleright = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("right"))
    // obstaclebottom = parseInt(window.getComputedStyle(dinosaur, null).getPropertyValue("bottom"))

    // console.log("planeright", planeright);
    // console.log("planeleft", planeleft);
    // console.log("obsright", obstacleright);
    // console.log("obsleft", obstacleleft);
    const planeRect = plane.getBoundingClientRect();
    const dinoRect = dinosaur.getBoundingClientRect();

    const horizontalDistance = dinoRect.left - planeRect.right;
    const verticalOverlap = !(planeRect.bottom < dinoRect.top || planeRect.top > dinoRect.bottom);
    console.log(verticalOverlap);

    if (horizontalDistance < 15 && horizontalDistance > -dinoRect.width && verticalOverlap) {
        fireaud.pause()
        console.log("Collided");
        gameover.style.visibility = "visible"
        obstacle.classList.remove('obstacleani');
overaud.play()
dieaud.pause()

        // Restart animation for fragments
        document.querySelectorAll('.gameover .fragment').forEach((frag, idx) => {
            frag.style.animation = 'none';
            // Force reflow
            void frag.offsetWidth;
            // Set animation with delay
            frag.style.animation = `explode 3s ease-out ${0.2 * idx}s forwards`;
        });
    }

    // offsetx = Math.abs(dinoleft - obstacleleft);
    // offsety = Math.abs(dinotop - obstacletop)
    // console.log(offsetx);

    // if (offsetx < 113 && offsety < 52) {
    // gameover.style.visibility = "visible"
    // obstacle.classList.remove('obstacleani')

    // } else if (offsetx < 130 && cross && !(offsetx < 113 && offsety < 52)) {
    //     score += 1;
    //     updatesocre(score)
    //     cross = false;

    //     setTimeout(() => {
    //         cross = true;
    //     }, 1000);

    // console.log(offsetx);
    // console.log(offsety);

        // setTimeout(() => {

            // anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"))
            // newdurr = anidur - 1;
            // obstacle.style.animationDuration = newdurr + "s"
        // }, 500);
    // }
    if(score === score +  5){

    anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"))
             newdurr = anidur - 1;
             obstacle.style.animationDuration = newdurr + "s"
}
}, 700);

function updatesocre(newscore) {
score = newscore

if(score - prev >= 3){

 prev = score
    
 setTimeout(() => {
     
     anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"))
              newdurr = anidur - 1;
              obstacle.style.animationDuration = newdurr + "s"
}, 800);
}

    scorecount.innerHTML = "Your score:" + newscore;
}
