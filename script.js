const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0; 

function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
    translateAmount = slideIndex * -100; /* Slide based on width*/
    document.querySelector('.image-slider').style.transform = `translateX(${translateAmount}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Start with first slide active
showSlide(currentSlide);