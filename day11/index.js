let flipbook;

const images = JSON.parse(localStorage.getItem("imageUrls"));
Array.from(images).forEach(e => {

  
  const div = document.createElement('div');
  div.classList.add("page");
  div.innerHTML = `<img src="${e}" alt="">`;

  document.querySelector(".flipbook").appendChild(div);
if(document.querySelectorAll(".flipbook .page").length == images.length)
    setTimeout(() => {
        
function initBook() {
    const isMobile = window.innerWidth <= 768;
    console.log('Screen width:', window.innerWidth, 'Mobile mode:', isMobile);
    if (flipbook) {
        flipbook.turn("destroy");
    }
    flipbook = $(".flipbook").turn({
        width: isMobile ? 300 : 800, 
        height: isMobile ? 400 : 600,
        autoCenter: true,
        duration: 1200,
        acceleration: true,
        elevation: 40, 
        gradients: true,
        display: isMobile ? 'single' : 'double'
    });
    console.log('Total pages:', $(".flipbook > div").length);
}
$(document).ready(function() {
    initBook();
    let resizeTimer;
    $(window).on('resize orientationchange', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initBook();
        }, 300);
    });
    $(".left-zone").on("click", function() {
        if (flipbook) flipbook.turn("previous");
    });
    $(".right-zone").on("click", function() {
        if (flipbook) flipbook.turn("next");
    });
});
}, 1000);
});










