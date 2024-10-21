/* Mobile Nav Bar */

const mobileMenuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".header-nav-elements");

mobileMenuToggle.addEventListener("click", function () {
  navList.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    !mobileMenuToggle.contains(event.target) &&
    !navList.contains(event.target)
  ) {
    navList.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
});

/* Light/Dark Mode Toggle */

document.getElementById("theme-toggle").addEventListener("click", function () {
  const body = document.body;
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");

  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    body.setAttribute("data-theme", "dark");
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
});

/* Typewriter Effect */

const typewriterText = document.getElementById("typewriter-text");
const staticText = "Greetings, I'm Neil Patrick Pajadan";
let charIndex1 = 0;

const typewriterText2 = document.getElementById("typewriter-text2");
const textsToCycle = [
  "Front-End Developer",
  "Web Designer",
  "ComSci Major Student",
];
let textIndex = 0;
let charIndex2 = 0;
let isDeleting = false;

function typeWriter1() {
  if (charIndex1 < staticText.length) {
    typewriterText.textContent += staticText.charAt(charIndex1);
    charIndex1++;
    setTimeout(typeWriter1, 70);
  } else {
    setTimeout(typeWriter2, 1000);
  }
}

function typeWriter2() {
  const currentText = textsToCycle[textIndex];

  if (isDeleting) {
    typewriterText2.textContent = `|| ${currentText.substring(
      0,
      charIndex2
    )} ||`;
    charIndex2--;

    if (charIndex2 < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textsToCycle.length;
      setTimeout(typeWriter2, 500);
    } else {
      setTimeout(typeWriter2, 50);
    }
  } else {
    typewriterText2.textContent = `|| ${currentText.substring(
      0,
      charIndex2 + 1
    )} ||`;
    charIndex2++;

    if (charIndex2 === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter2, 1000);
    } else {
      setTimeout(typeWriter2, 75);
    }
  }
}

typeWriter1();

/* Profile Pic Modal */

function openModal() {
  var modal = document.getElementById("imageModal");
  var fullImage = document.getElementById("fullImage");

  fullImage.src = document.querySelector(".profile-pic").src;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

const backToTopButton = document.getElementById("back-to-top");
let timer;

/* Back to the Top Button */

window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight ||
    footerTop <= windowHeight
  ) {
    showBackToTopButton();
  } else {
    hideBackToTopButton();
  }
});

function showBackToTopButton() {
  backToTopButton.classList.add("show");

  clearTimeout(timer);

  timer = setTimeout(() => {
    backToTopButton.classList.remove("show");
  }, 2000);
}

function hideBackToTopButton() {
  if (backToTopButton.classList.contains("show")) {
    backToTopButton.classList.remove("show");
  }
}

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
