// header animation

let slideIndex = 0;
showSlides();

function showSlides() {
    let i = 0;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// testimonial animation
let slideIndexTest = 1;
showSlidesTest(slideIndexTest);

//next and previous button handling
function plusSlidesTest(n) {
    showSlidesTest((slideIndexTest += n));
}

//testimonial handling
function currentSlideTest(n) {
    showSlidesTest((slideIndexTest = n))
}

function showSlidesTest(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slidesIndexTest = 1;
    }
    if (n < 1) {
        slideIndexTest = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndexTest - 1].style.display = "block";
    dots[slideIndexTest - 1].className += " active"
}