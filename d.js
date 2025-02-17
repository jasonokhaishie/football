const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating');

// Add click event listeners to each star
stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-value');
    updateRating(rating);
  });

  star.addEventListener('mouseover', () => {
    const value = star.getAttribute('data-value');
    highlightStars(value);
  });

  star.addEventListener('mouseout', () => {
    clearHighlights();
  });
});

// Update the rating display and selected stars
function updateRating(rating) {
  ratingDisplay.textContent = rating;
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

// Highlight stars on hover
function highlightStars(value) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= value) {
      star.style.color = 'gold';
    } else {
      star.style.color = 'gray';
    }
  });
}

// Clear highlighted stars when mouse leaves
function clearHighlights() {
  stars.forEach(star => {
    star.style.color = 'gray';
  });
}