onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const today = new Date();
const isChristmas = today.getMonth() === 11 && today.getDate() === 25;

const christmasMessages = document.querySelectorAll(".christmasMessage");
christmasMessages.forEach((message) => {
  if (isChristmas) {
    message.style.display = "block"; // Show message on Christmas
  } else {
    message.style.display = "none"; // Hide message if it's not Christmas
  }
});

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

// Generate random snowflakes (only on Christmas)
const generateSnowflakes = () => {
  if (!isChristmas) return; // Only generate snowflakes on Christmas

  const numberOfSnowflakes = 50; // Number of snowflakes to create
  const snowflakeContainer = document.body; // Container to append snowflakes

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Snowflake symbol

    // Random horizontal position (from 0% to 100% of the viewport width)
    snowflake.style.left = `${Math.random() * 100}vw`;

    // Random speed (animation duration between 5s and 10s)
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;

    // Random delay before animation starts (between 0s and 5s)
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    // Optional: Set top to -10px so snowflakes start slightly above the view
    snowflake.style.top = "-10px";

    // Append snowflake to container
    snowflakeContainer.appendChild(snowflake);

    // Remove snowflake after animation completes
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
    });
  }
};

// Call the functions after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (isChristmas) {
    generateSnowflakes(); // Generate snowflakes only on Christmas
  }
  createStars();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.body.classList.add("loaded");
  }, 1000); // Delay in ms (adjust as necessary)
});
