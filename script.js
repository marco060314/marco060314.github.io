// Array of strings to be typed
const strings = [
  "Welcome to My Website",
  "Explore My Projects",
  "Connect with Me",
];

// Get the element where the typing animation will be displayed
const typingElement = document.getElementById("typing");

// Set initial values
let currentStringIndex = 0;
let currentString = "";
let isDeleting = false;
let typingSpeed = 100; // Adjust typing speed (in milliseconds)

// Function to start the typing animation
function startTypingAnimation() {
  const stringIndex = currentStringIndex % strings.length;
  const fullString = strings[stringIndex];

  if (isDeleting) {
    // Delete characters
    currentString = fullString.substring(0, currentString.length - 1);
  } else {
    // Add characters
    currentString = fullString.substring(0, currentString.length + 1);
  }

  // Update the typing element with the current string
  typingElement.textContent = currentString;

  // Calculate typing speed dynamically to simulate realistic typing
  typingSpeed = isDeleting ? 50 : 100;

  // Check if the current string has been fully typed or deleted
  if (!isDeleting && currentString === fullString) {
    // Pause before deleting
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && currentString === "") {
    // Move to the next string and start typing
    currentStringIndex++;
    isDeleting = false;
    typingSpeed = 500;
  }

  // Call the function recursively after the specified typing speed
  setTimeout(startTypingAnimation, typingSpeed);
}

// Start the typing animation when the page loads
window.addEventListener("load", startTypingAnimation);
