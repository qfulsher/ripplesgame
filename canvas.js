import Konva from 'konva';

document.addEventListener("DOMContentLoaded", () => {
    // Import Konva library
    const stage = new Konva.Stage({
    container: "container", // ID of the container element
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const layer = new Konva.Layer();
  layer.listening(false); // Disable event listening on the layer
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
      radius: 120, // Increased radius for larger ripples
      opacity: 0,
      duration: 1.2, // Slightly longer duration for better effect
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
});
