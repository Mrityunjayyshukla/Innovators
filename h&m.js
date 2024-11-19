

document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.querySelector('.redesign-of-h-m-page .user');
  const overlapBlock = document.querySelector('.redesign-of-h-m-page .overlap-6');

  userIcon.addEventListener('click', function() {
    overlapBlock.classList.toggle('show');
  });
});


// Function to toggle the side panel visibility
function toggleSidePanel() {
  const sidePanel = document.getElementById("side-panel");
  sidePanel.classList.toggle("open");
}

// Close the side panel when clicked outside of it
document.addEventListener('click', function(event) {
  const sidePanel = document.getElementById("side-panel");
  const topBar = document.querySelector(".top-bar");  // The top bar where the menu icon is
  if (!sidePanel.contains(event.target) && !topBar.contains(event.target)) {
    sidePanel.classList.remove("open");
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
      const productImage = card.querySelector('.product-image');
      const originalImage = productImage.style.backgroundImage; // Get the initial background image (before hover)
      const hoverImage = card.getAttribute('data-hover-image'); // Get the hover image from the data attribute

      // When the mouse enters the card, change the background image to the hover image
      card.addEventListener('mouseenter', function () {
          productImage.style.backgroundImage = `url(${hoverImage})`;
      });

      // When the mouse leaves the card, revert back to the original background image
      card.addEventListener('mouseleave', function () {
          productImage.style.backgroundImage = originalImage;
      });
  });
});
