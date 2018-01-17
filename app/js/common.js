$(function() {

});

var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

autoShowSlides();

function autoShowSlides() {
    var k;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (k = 0; k < slides.length; k++) {
        slides[k].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    for (k = 0; k < dots.length; k++) {
        dots[k].className = dots[k].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
    setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
}

var ham = document.getElementById('hamburger');
var mobileMenu = $('.header__mobileNav');
ham.onclick = function () {
    ham.classList.toggle('clicked');
    event.stopPropagation();
    
    if(mobileMenu.hasClass('open')){
        mobileMenu.removeClass('open');
    } else {
        mobileMenu.addClass('open');
    }
}

$(document).click( function(){
    mobileMenu.removeClass('open');
});