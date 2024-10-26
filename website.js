/* Mobile Nav Bar */

const mobileMenuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".header-nav-elements");
const navLinks = document.querySelectorAll(".header-nav-elements a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navList.classList.remove("active");
    mobileMenuToggle.classList.remove("active");

    mobileMenuToggle.setAttribute("aria-expanded", "false");
  });
});

mobileMenuToggle.addEventListener("click", function () {
  navList.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");

  const expanded =
    mobileMenuToggle.getAttribute("aria-expanded") === "true" || false;
  mobileMenuToggle.setAttribute("aria-expanded", !expanded);
});

document.addEventListener("click", function (event) {
  if (
    !mobileMenuToggle.contains(event.target) &&
    !navList.contains(event.target)
  ) {
    navList.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  }
});

/* Theme Modal */

const themeButton = document.getElementById("theme-button");
const themeModal = document.getElementById("theme-modal");
const closeButton = document.getElementById("close-button");

themeButton.addEventListener("click", function (event) {
  event.preventDefault();
  themeModal.style.display = "flex";
});

closeButton.addEventListener("click", function () {
  themeModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === themeModal) {
    themeModal.style.display = "none";
  }
});

/* MODAL :: Theme Toggle */

document.getElementById("theme-toggle").addEventListener("click", function () {
  const body = document.body;
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  const themeText = document.getElementById("theme-text");

  const isDarkMode = body.getAttribute("data-theme") === "dark";

  themeText.style.opacity = "0";

  setTimeout(() => {
    if (isDarkMode) {
      body.setAttribute("data-theme", "light");
      moonIcon.style.display = "none";
      sunIcon.style.display = "inline";
      themeText.textContent = "Light Mode";
    } else {
      body.setAttribute("data-theme", "dark");
      moonIcon.style.display = "inline";
      sunIcon.style.display = "none";
      themeText.textContent = "Dark Mode";
    }

    themeText.style.opacity = "1";
  }, 300);

  themeToggle.classList.toggle("active");
});

/* Typewriter Effect */

const typewriterText = document.getElementById("typewriter-text");
const staticText = "Greetings, I'm Neil Patrick Pajadan";
let charIndex1 = 0;

const typewriterText2 = document.getElementById("typewriter-text2");
const textsToCycle = [
  "Front-End Programmer",
  "Web Developer",
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

/* MODAL :: Profile Pic Modal */

function openModal() {
  var modal = document.getElementById("imageModal");
  var fullImage = document.getElementById("fullImage");

  fullImage.src = document.querySelector(".profile-pic").src;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

/* MODAL :: Credentials Gallery */

function certopenModal(certimg) {
  const certmodal = document.getElementById("cert-modal");
  const certmodalImage = document.getElementById("cert-modal-image");
  const loader = document.querySelector(".loader");

  loader.style.display = "block";
  certmodal.style.display = "block";
  certmodalImage.src = certimg.src;

  certmodalImage.onload = function () {
    loader.style.display = "none";
  };
}

function certcloseModal() {
  const certmodal = document.getElementById("cert-modal");
  certmodal.style.display = "none";
}

/* Footer Fade In */

window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight) {
    footer.style.opacity = 1;
  } else {
    footer.style.opacity = 0;
  }
});

/* Back to the Top Button */

const backToTopButton = document.getElementById("back-to-top");
let timer;

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
