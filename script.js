let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById("surprise-button").addEventListener("click", function() {
    document.getElementById("surprise").style.display = "block";
});

javascript
// Access the button element
const surpriseButton = document.getElementById('surprise-button');

// Add a click event listener to the button
surpriseButton.addEventListener('click', () => {
  // confetti config
  const confettiSettings = { target: 'my-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
});