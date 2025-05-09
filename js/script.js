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