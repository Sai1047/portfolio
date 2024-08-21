function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sections = document.querySelectorAll('.section__text, .section__pic-container, .article-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});


//bubble
document.addEventListener('DOMContentLoaded', () => {
  const snowfallContainer = document.querySelector('.snowfall');
  const numberOfBubbles = 100; // Adjust number for more/less bubbles

  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('snowflake');
    
    // Randomize size for smaller bubbles
    const size = Math.random() * 2 + 1; // Bubbles between 1px and 3px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Randomize position and animation duration
    const startX = Math.random() * 100;
    const animationDuration = Math.random() * 5 + 7; // Duration between 7s and 12s
    bubble.style.left = `${startX}%`;
    bubble.style.animationDuration = `${animationDuration}s`;

    // Append bubble to container
    snowfallContainer.appendChild(bubble);
  }
});



