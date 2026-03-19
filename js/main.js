function toggleFaq(button) {
  const parent = button.parentElement;
  const answer = parent.querySelector('.answer-content');
  const plusIcon = button.querySelector('.plus-icon');
  const minusIcon = button.querySelector('.minus-icon');
  
  // Toggle answer visibility
  answer.classList.toggle('hidden');
  
  // Toggle icons
  plusIcon.classList.toggle('hidden');
  minusIcon.classList.toggle('hidden');
}


// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const hamburgerOpen = document.querySelector('.hamburger-open');
  const hamburgerClose = document.querySelector('.hamburger-close');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      // Toggle menu visibility
      navMenu.classList.toggle('hidden');
      
      // Toggle hamburger icon
      hamburgerOpen.classList.toggle('hidden');
      hamburgerClose.classList.toggle('hidden');
    });
  }
});

// Change main product image on thumbnail click
function changeMainImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
}
