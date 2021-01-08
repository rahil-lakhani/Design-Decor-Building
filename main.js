// 1. Preloader

window.addEventListener("load", function () {

  var Preloader = document.querySelector(".Preloader");
  Preloader.className += " Hideout";

});

// 2. Navbar reaction while Scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// 3. Images Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// 4. Animation - Wondering Section

function wonderingSectionAnimate() {

  var animateContent = document.querySelector(".wondering");
  
  animateContent.classList.add("slide-from-left");

  var wonderingText = document.querySelector(".Wondering-Text");

  setTimeout(function () {
    wonderingText.firstElementChild.classList.add("into-visibility");
  }, 1200);

  setTimeout(function () {
    wonderingText.firstElementChild.nextElementSibling.classList.add("into-visibility");
  }, 5200);

  setTimeout(function () {
    wonderingText.lastElementChild.classList.add("into-visibility");
  }, 11700);

}

if (window.innerWidth > 700) {

  window.addEventListener("scroll", function () {

    var animateContent = document.querySelector(".wondering");
    var animateContentPosition = animateContent.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (animateContentPosition < screenPosition) {
      wonderingSectionAnimate();
    }

  });

} else {
  wonderingSectionAnimate();
}

// 5. Featured Projects Slides

var FP_slide = document.querySelectorAll(".FP-Slide");
var FP_carouselContent = document.querySelector(".FP-Carousel-Content");
var FP_navRight = document.querySelector(".FP-Nav-Right");
var FP_navLeft = document.querySelector(".FP-Nav-Left");
var FP_navDots = document.querySelector(".FP-Nav-Dots");

var numberOfSlides = FP_slide.length;
var slideWidth = FP_slide[0].clientWidth;
var currentSlide = 0;

// 5A. Slider Set Up 

function init() {

  FP_slide.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  FP_slide[0].classList.add("SD-Active");

  createNavDots();

}

init();

// 5B. Nav Dots Creation

function createNavDots() {

  for (let i = 0; i < numberOfSlides; i++) {

    var dot = document.createElement("div");
    dot.classList.add("Single-Dot");
    FP_navDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });

  }

  FP_navDots.children[0].classList.add("SD-Active");

}

// 5C. Next Button

FP_navRight.addEventListener("click", () => {

  if (currentSlide >= numberOfSlides - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);

});

// 5D. Prev Button

FP_navLeft.addEventListener("click", () => {

  if (currentSlide <= 0) {
    goToSlide(numberOfSlides - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);

});

// 5E. Go to Slide

function goToSlide(slideNumber) {

  FP_carouselContent.style.transform = "translateX(-" + ((slideWidth * slideNumber) + 80) + "px)";

  currentSlide = slideNumber;

  setActiveClass();

}

// 5F. Set Active Class

function setActiveClass() {

  // 5G. Active Class for Slide Image

  var currentActive = document.querySelector(".FP-Slide.SD-Active");

  currentActive.classList.remove("SD-Active");
  currentActive.classList.add("FP-Slide-Unfocused");
  FP_slide[currentSlide].classList.add("SD-Active");
  setTimeout(function () {
    FP_slide[currentSlide].classList.remove("FP-Slide-Unfocused");
  }, 400);

  // 5H. Active Class for Nav Dots

  var currentDot = document.querySelector(".Single-Dot.SD-Active");
  currentDot.classList.remove("SD-Active");
  FP_navDots.children[currentSlide].classList.add("SD-Active");

}