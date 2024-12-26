let speed = 100;
let index = 0;
let i = 0;
const text = "Giovanna Ks,";
const davidTxt = "Com amor, David William."

const firstP = document.querySelector('.firstP');
const secondP = document.querySelector('.secondP');
const thirdP = document.querySelector('.thirdP');
const fourthP = document.querySelector('.fourthP');


function typewriter() {
    if (index < text.length) {
        document.querySelector('h1').textContent += text.charAt(index);
        index++;
        setTimeout(typewriter, speed);
        setTimeout(addOpacityFirst, 1000);
    }
}

typewriter();

function addOpacityFirst() {
    firstP.style.opacity = 1;
    setTimeout(addOpacitySecond, 6000);
}
function addOpacitySecond() {
    secondP.style.opacity = 1;
    setTimeout(addOpacityThird, 9000);
}
function addOpacityThird() {
    thirdP.style.opacity = 1;
    setTimeout(typewriterP, 12500);
}
function addOpacityFourth() {
    
        setTimeout(addOpacityFourth, 500);
    }
function typewriterP() {
    if (i < davidTxt.length) {
        fourthP.textContent += davidTxt.charAt(i);
        i++;
        setTimeout(typewriterP, 1200);
        document.querySelector(".carousel").style.opacity = 1;
    }
}

const carouselWrapper = document.querySelector('.carousel-wrapper');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentIndex = 0;

function move_forward() {
    currentIndex = (currentIndex + 1) % totalImages;
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

function move_backward() {
    if(currentIndex > 0) {
        currentIndex = (currentIndex -1) % totalImages;
        carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

