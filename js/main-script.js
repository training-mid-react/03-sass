let currentSlide = 0;

function moveSlide(direction) {
    console.log(direction, 'here')
    const slides = document.querySelectorAll('.carousel__slide');
    const totalSlides = slides.length;

    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].classList.add('active');

    const slidesContainer = document.querySelector('.carousel__slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel__slide');
    slides[currentSlide].classList.add('active');
});
