import Konva from 'konva';

document.addEventListener("DOMContentLoaded", () => {
    const stage = new Konva.Stage({
    container: "container",
    width: document.innerWidth,
    height: document.innerHeight,
  });

  const layer = new Konva.Layer({
    listening: false, // Disable event listening on the layer
  });

  stage.add(layer);

  // Function to generate a random color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
  }

  // Function to create a ripple effect
  function createRipple(x, y) {
    const ripple = new Konva.Circle({
      x: x,
      y: y,
      radius: 0,
      fill: getRandomColor(), // Use random color for fill
      stroke: getRandomColor(), // Use random color for stroke
      strokeWidth: 3,
      listening: false, // Disable event listening on the ripple
      perfectDrawEnabled: false, // Disable perfect drawing for performance
    });

    layer.add(ripple);

    ripple.to({
      radius: 120,
      opacity: 0,
      duration: 1.2,
      onFinish: () => ripple.destroy(),
    });
  }

  // Listen for keydown events
  document.addEventListener("keydown", (event) => {
    if (event.key >= "a" && event.key <= "z") {
      const x = Math.random() * stage.width();
      const y = Math.random() * stage.height();
      createRipple(x, y);
    }
  });

  // Listen for touchstart events
  document.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    createRipple(x, y);
  });

  // Add an event listener to resize the canvas when the viewport size changes
  document.addEventListener('resize', () => {
    stage.width(document.innerWidth);
    stage.height(document.innerHeight);
  });
});
