// JavaScript for the slideshow
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll("#slideshow-container img");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  // Reset slide index when reaching the end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Start the slideshow
showSlides();
