// Get width of screen
var x = screen.width;

//  Set width for all screen
const imgSliders = document.querySelectorAll(".js-img-slider")
const len = imgSliders.length;
for (var i = 0; i < len; i++) {
        imgSliders[i].style.width = `${x}px`;
}
    
//  Slider Section
const btnPrev = document.querySelector(".slider-btnPrev")
const btnNext = document.querySelector(".slider-btnNext")
const slider = document.querySelector(".slider-main");
slider.style.width = `${x}px`
var currentIndex = 0;
btnNext.addEventListener('click', function() {
    currentIndex += -x;
    if (currentIndex === -6*x) {
        currentIndex = 0;
    }
    console.log(`${currentIndex}px`);
    slider.style.left = `${currentIndex}px`;
})

btnPrev.addEventListener('click', function() {
    currentIndex += x;
    if (currentIndex === x) {
        currentIndex = -5*x;
    }
    console.log(`${currentIndex}px`);
    slider.style.left = `${currentIndex}px`;
})