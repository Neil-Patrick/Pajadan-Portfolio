const typewriterText = document.getElementById('typewriter-text');
const textToType = 'Greetings, I am Neil Patrick Pajadan';
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typewriterText.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 75); 
  }
}

typeWriter();

document.getElementById("theme-toggle").addEventListener("click", function() {
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

function openModal() {
    var modal = document.getElementById("imageModal");
    var fullImage = document.getElementById("fullImage");
    
    fullImage.src = document.querySelector(".profile-pic").src;
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-elements');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); 
    mobileMenu.classList.toggle('active');
});
