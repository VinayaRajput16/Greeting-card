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

const container = document.querySelector('body');
const snowflake = document.querySelector('.snowflake');

function appendSnowflake() {
    const newSnowflake = snowflake.cloneNode(true);

    // Each snowflake looks and behaves a little different:
    newSnowflake.style.paddingLeft = Math.random() * 10 + 'px';
    newSnowflake.style.animationDuration =
        Math.random() * 5 + 3 + 's';
    newSnowflake.style.opacity = Math.random() * 1;

    container.append(newSnowflake);
}

const interval = setInterval(appendSnowflake, 50);

setTimeout(() => {
    clearInterval(interval);
}, 2000);