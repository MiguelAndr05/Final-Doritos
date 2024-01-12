// Video Section
let videoIndex = 0;
const videoUrls = [
    'https://www.youtube.com/embed/G_PDRXDTgck',
    'https://www.youtube.com/embed/i2VfcKcWK4A',
    'https://www.youtube.com/embed/wj3VWSxZxUo'
];

const youtubeVideo = document.getElementById('youtubeVideo');

// Function to change the displayed video
function changeVideo(direction) {
    videoIndex = (videoIndex + direction + videoUrls.length) % videoUrls.length;
    youtubeVideo.src = videoUrls[videoIndex];
}

// Slideshow Section
let slideIndex = 0;
showSlides();

// Function to control the slideshow
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dynamicBar = document.querySelector(".dynamic-bar");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change background color and slogan based on the current slide
    switch (slideIndex) {
        case 1:
            dynamicBar.classList.remove("red", "blue");
            dynamicBar.classList.add("orange");
            document.querySelector(".slogan").innerText = "Timeless Taste, Classic Crunch";
            break;
        case 2:
            dynamicBar.classList.remove("orange", "blue");
            dynamicBar.classList.add("red");
            document.querySelector(".slogan").innerText = "Cheese the Day with Doritos";
            break;
        case 3:
            dynamicBar.classList.remove("orange", "red");
            dynamicBar.classList.add("blue");
            document.querySelector(".slogan").innerText = "Cool to the Ranch, Crazy for the Crunch";
            break;
    }

    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
