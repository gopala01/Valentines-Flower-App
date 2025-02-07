onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const createStars = () => {
  const starCount = 100; // Adjust the number of stars as needed
  const sky = document.querySelector(".sky"); // A container for the stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize the position
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    // Randomize the size for variation
    const size = Math.random() * 3 + 1; // Between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    sky.appendChild(star);
  }
};

// Call the functions after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createStars();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.body.classList.add("loaded");
  }, 1000); // Delay in ms (adjust as necessary)
});
