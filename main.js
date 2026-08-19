// main.js

// Elements
const themeBtn = document.getElementById("themeBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const scrollBtn = document.getElementById("scrollBtn");
const greeting = document.getElementById("greeting");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");
const scrollProgress = document.getElementById("scrollProgress");
const typingTextEl = document.getElementById("typingText");
const yearEl = document.querySelector(".year");

// AOS
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 800, once: true, offset: 80 });
}

// Scroll Progress
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}
window.addEventListener("scroll", updateScrollProgress);
updateScrollProgress();

// Typing Animation
const roles = ["Web Developer", "Coder", "Creator", "Learner"];
let roleIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 120;

function typeRoles() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typingTextEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 60;
  } else {
    typingTextEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 120;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    typingSpeed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }
  setTimeout(typeRoles, typingSpeed);
}
setTimeout(typeRoles, 800);

// Theme Toggle (light/dark)
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeBtn.innerHTML = isLight ? '<i class="ri-moon-line"></i>' : '<i class="ri-sun-line"></i>';
});

// Change Greeting
changeTextBtn.addEventListener("click", () => {
  greeting.innerHTML = 'Welcome to my <span class="gradient-text">creative</span> portfolio!';
});

// Smooth Scroll
scrollBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Contact Form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    message.textContent = `Hello ${name}, thanks for visiting my portfolio!`;
    nameInput.value = "";
  } else {
    message.textContent = "Please enter your name.";
  }
});

// Footer Year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}