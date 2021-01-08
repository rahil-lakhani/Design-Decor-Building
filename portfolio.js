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

// 3. Portfolio - Interior Design 

var sortBtn = document.querySelector('.filter-menu').children;
var sortItem = document.querySelector('.filter-item').children;

for (let i = 0; i < sortBtn.length; i++) {

  sortBtn[i].addEventListener('click', function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove('current');
    }

    this.classList.add('current');

    var targetData = this.getAttribute('data-target');

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove('active');
      sortItem[k].classList.add('delete');
      sortItem[k].lastElementChild.style.display = "none";

      sortItem[k].classList.remove('filter-item-li-visibility');
    
      if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
        sortItem[k].classList.remove('delete');
        sortItem[k].classList.add('filter-item-li-visibility');
        sortItem[k].classList.add('active');
        sortItem[k].lastElementChild.style.display = "inline-block";

      }
    }
  });
}

// Project Images on Click

var portfolioModal = document.querySelector(".Portfolio-Modal");
var projectMainImage = document.querySelectorAll(".Project-Card img");
var portfolioModalClose = document.querySelector(".Portfolio-Modal-Close");
var portfolioModalContent = document.querySelectorAll(".Portfolio-Modal-Content");
var portfolioProject = document.querySelectorAll(".Project")

for (let i = 0; i < projectMainImage.length; i++) {

  projectMainImage[i].addEventListener("click", function () {

    var portfolioSlide = document.querySelectorAll(".fade.slide");

    for (let m = 0; m < portfolioSlide.length; m++) {
      portfolioSlide[m].style.display = "none";
      portfolioSlide[m].classList.remove("slide");
    }

    for (let k = 0; k < portfolioProject.length; k++) {
      portfolioProject[k].style.display = "none";
      portfolioProject[k].firstElementChild.style.display = "block";
    }

    for (let j = 0; j < projectMainImage.length; j++) {
      portfolioModal.style.display = "block";
    }

    document.querySelector(".Project" + i).style.display = "block";

    for (let l = 0; l < document.querySelector(".Project" + i).children.length; l++) {
      document.querySelector(".Project" + i).children[l].classList.add("slide");
    }

  });

}

portfolioModalClose.addEventListener("click", function () {

  for (let k = 0; k < portfolioProject.length; k++) {
    portfolioProject[k].style.display = "none";
  }

  portfolioModal.style.display = "none";
  slideIndex = 1;
  
})

// Project Slides on Modal Screen

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}

