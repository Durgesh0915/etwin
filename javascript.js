$(document).ready(function() {
    // Navbar background change on scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".etvwin-navbar").css("background", "#0C0C0C");
        } else {
            $(".etvwin-navbar").css("background", "transparent");
        }
    });

    // Video slider functionality
    function initSlider(sliderIndex) {
        let currentIndex = 0;
        const slides = document.querySelectorAll(`.video-slider:nth-of-type(${sliderIndex}) .slide`);
        const totalSlides = slides.length;

        // Initialize slider
        showSlide(currentIndex);

        function showSlide(index) {
            const offset = -index * 100; // Calculate offset for sliding effect
            document.querySelector(`.video-slider:nth-of-type(${sliderIndex})`).style.transform = `translateX(${offset}%)`;
        }

        // Define nextSlide and prevSlide functions
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to the last slide
            showSlide(currentIndex);
        }

        // Attach click event listeners to the buttons
        $(`#nextBtn${sliderIndex}`).on('click', nextSlide);
        $(`#prevBtn${sliderIndex}`).on('click', prevSlide);
    }

    // Initialize all sliders dynamically
    const sliderCount = 3; // Assuming you have 3 sliders
    for (let i = 1; i <= sliderCount; i++) {
        initSlider(i);
    }

});