document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.floating-card, .center-panel');

  cards.forEach((card, index) => {
    card.style.transform += ' translateZ(0)';
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      if (index === 0) {
        card.style.transform = 'rotate(-10deg)';
      } else if (index === 1) {
        card.style.transform = 'rotate(9deg)';
      } else {
        card.style.transform = 'translate(-50%, -50%)';
      }
    });
  });
});
