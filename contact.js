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

// 2. Inquiry Submission

var contactForm = document.getElementById('Contact-Form');

contactForm.addEventListener('submit', function(event) {

  swal("Nice!", "Your inquiry is submitted!", "success");

  setTimeout("location.href = 'contact.html';",1700);

});









