const birthdayCard = document.querySelector(".birthday-card");
const bear = document.querySelector(".bear");
const balloons = document.querySelector(".balloons");

// Preload the audio
const mySound = new Audio("happy-birthday-314197.mp3");
mySound.preload = "auto"; // Ensure the file loads before interaction

birthdayCard.addEventListener("mouseover", function () {
    bear.classList.add("dance");
    balloons.classList.add("float");

    // Restart sound if already playing
    mySound.currentTime = 0;
    mySound.play().catch(error => console.error("Audio playback error:", error));
});

// Optional: Stop the sound when mouse leaves (if desired)
birthdayCard.addEventListener("mouseleave", function () {
    mySound.pause();
    mySound.currentTime = 0; // Reset to the beginning
});
