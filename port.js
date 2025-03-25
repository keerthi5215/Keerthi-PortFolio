document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
const textArray = ["Information Technology", "Full Stack Developer", "Java Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100; // Typing speed

function typeEffect() {
    const typingText = document.getElementById("typing-text");
    let currentText = textArray[textIndex];

    if (!isDeleting) {
        // Type letter by letter
        typingText.innerText = currentText.substring(0, charIndex + 1);
        charIndex++;
    } else {
        // Delete letter by letter
        typingText.innerText = currentText.substring(0, charIndex - 1);
        charIndex--;
    }

    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500; // Pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Switch to the next text
        speed = 500; // Pause before typing new text
    } else {
        speed = isDeleting ? 50 : 100; // Faster when deleting
    }

    setTimeout(typeEffect, speed);
}

// Start typing effect when page loads
 typeEffect();
// Resume Download Button
document.getElementById("download-btn").addEventListener("click", function () {
    const resumeUrl = "keerthana resume1.pdf"; // Replace with your actual resume file path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "keerthana resume1.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
});