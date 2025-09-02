// ============================
// Part 1: JavaScript Basics
// ============================

// Let’s ask the user for their name and age
let userName = prompt("What is your name?");
let userAge = parseInt(prompt("How old are you?"));

// Now, let’s check if the user is an adult or not
if (userAge >= 18) {
  console.log(`${userName}, you are an adult! 🎉`);
} else {
  console.log(`${userName}, you’re still young—keep learning and exploring! 🚀`);
}

// ============================
// Part 2: Functions
// ============================

// A small function to calculate the total price after tax
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}
console.log("Example total with tax:", calculateTotal(100, 0.16));

// A function to hide or show content when needed
function toggleContent(elementId) {
  let el = document.getElementById(elementId);
  el.classList.toggle("hidden"); // adds/removes the “hidden” class
}

// ============================
// Part 3: Loops
// ============================

// Let’s do a simple countdown from 5 to 1
for (let i = 5; i >= 1; i--) {
  console.log("Countdown:", i);
}

// Loop through a list of services and show them one by one
let services = ["Web Design", "Branding", "SEO", "App Development"];
services.forEach((service, index) => {
  console.log(`${index + 1}. ${service}`);
});

// ============================
// Part 4: DOM Manipulation
// ============================

// Example 1: When the yellow button is clicked, change the hero text
let ctaBtn = document.querySelector(".cta");
ctaBtn.addEventListener("click", function () {
  document.querySelector(".hero h2").textContent =
    "Your Creative Journey Starts Here 🚀";
});

// Example 2: Let’s create a new card and add it to the projects section
let projectsSection = document.querySelector(".cards");
let newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerHTML = "<h4>New Project</h4><p>Dynamic content added via JavaScript!</p>";
projectsSection.appendChild(newCard);

// Example 3: Make nav links glow yellow when you hover over them
let navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#ffc107"; // yellow highlight
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "white"; // back to white
  });
});
