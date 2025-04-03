document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelectorAll('.testimonial-prev');
    const nextBtn = document.querySelectorAll('.testimonial-next');
    const indicators = document.querySelectorAll('.indicator');

    let currentSlide = 0; // 只允许 0-3
    const autoSlideDelay = 5000;
    let slideInterval;

    function initCarousel() {
        updateSlides();
        startAutoSlide();

        prevBtn.forEach(btn => btn.addEventListener('click', prevSlide));
        nextBtn.forEach(btn => btn.addEventListener('click', nextSlide));

        indicators.forEach((indicator, index) => {
            if (index < 4) { // 只允许前 4 个
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlides();
                    resetAutoSlide();
                });
            }
        });
    }

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
            slide.style.opacity = index === currentSlide ? 1 : 0;
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function prevSlide() {
        currentSlide = (currentSlide === 0) ? 3 : currentSlide - 1; // 限制 0-3
        updateSlides();
        resetAutoSlide();
    }

    function nextSlide() {
        currentSlide = (currentSlide === 3) ? 0 : currentSlide + 1; // 限制 0-3
        updateSlides();
        resetAutoSlide();
    }

    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(() => {
            nextSlide();
        }, autoSlideDelay);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    if (slides.length > 0) {
        initCarousel();
    }
});
