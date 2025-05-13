const player = document.getElementById('player');
let currentButton = null;

document.querySelectorAll('.play-btn').forEach(button => {
  button.addEventListener('click', () => {
    const src = button.getAttribute('data-src');

    if (player.src !== location.href + '/' + src) {
      player.src = src;
      player.play();
      if (currentButton) currentButton.textContent = 'Play';
      button.textContent = 'Pause';
      currentButton = button;
    } else if (player.paused) {
      player.play();
      button.textContent = 'Pause';
    } else {
      player.pause();
      button.textContent = 'Play';
    }
  });
});

// Reset button when song ends
player.addEventListener('ended', () => {
  if (currentButton) currentButton.textContent = 'Play';
});

// script.js

// script.js

// Function to handle the search when the icon is clicked
function handleSearch() {
  const searchInput = document.querySelector('.search-bar').value.toLowerCase(); // Get the input value
  const musicCards = document.querySelectorAll('.music-card'); // Get all the music cards
  
  musicCards.forEach(card => {
      const musicTitle = card.querySelector('.music-title').textContent.toLowerCase(); // Get the title of each card

      if (musicTitle.includes(searchInput)) {
          card.style.display = 'block'; // Show the card if title matches search input
      } else {
          card.style.display = 'none'; // Hide the card if title doesn't match
      }
  });
}

// Add event listener to search icon (magnifying glass)
document.querySelector('.search-icon').addEventListener('click', handleSearch);
