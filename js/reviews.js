document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitReview');
  const reviewsContainer = document.getElementById('reviewsContainer');
  
  // Function to get reviews from localStorage
  function getReviews() {
    return JSON.parse(localStorage.getItem('reviews') || '[]');
  }

  // Function to save a review in localStorage
  function saveReview(name, text) {
    const newReview = {
      name,
      text,
      timestamp: new Date().toISOString()
    };
  
    const reviews = getReviews();
    reviews.unshift(newReview); // Adds new review to the top
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  // Function to render all reviews
  function renderReviews() {
    const reviews = getReviews();
    reviewsContainer.innerHTML = '';
  
    if (reviews.length === 0) {
      reviewsContainer.innerHTML = '<p class="text-muted">No reviews yet. Be the first!</p>';
      return;
    }
  
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <strong>${review.name}</strong> <em>(${new Date(review.timestamp).toLocaleString()})</em>
        <p class="card-text">${review.text}</p>
      `;
      reviewsContainer.appendChild(div);
    });
  }

  // Handle review submission
  submitButton.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const reviewText = document.getElementById('reviewText').value.trim();

    if (username && reviewText) {
      saveReview(username, reviewText);
      renderReviews(); // Re-render reviews after submitting
      document.getElementById('username').value = ''; // Clear input
      document.getElementById('reviewText').value = ''; // Clear textarea
    } else {
      alert("Please enter a name and review text.");
    }
  });

  // Initial rendering of reviews
  renderReviews();
});
