const targetDate = new Date('2025-09-22T16:30:00'); // 06:30 PM CEST today for testing
const timerElement = document.getElementById('timer');
const progressElement = document.getElementById('progress');
const countdownElement = document.getElementById('countdown');
const revealElement = document.getElementById('reveal');
const teaserElement = document.getElementById('teaser');

// Array of 8 mysterious, poem-like teasers with uppercase "KEYCHAIN" bold letters
const teasers = [
    "in the veil of twilight whispers, a <strong>K</strong>aleidoscope of shadows dances unseen.",
    "echoes linger in the mist, where <strong>E</strong>nigmas unfold like forgotten petals.",
    "beneath the silver shroud, <strong>Y</strong>earning secrets pulse in the void.",
    "cloaked in ethereal haze, a <strong>C</strong>ipher awakens from silent depths.",
    "whispers weave through the gloom, <strong>H</strong>arbingers of the unseen realm.",
    "in the labyrinth of dusk, <strong>A</strong>rcane threads bind the unknown.",
    "shadows entwine with fleeting light, an <strong>I</strong>llusion born from the abyss.",
    "veils part in the quiet storm, revealing a <strong>N</strong>exus of hidden echoes."
];

function shuffleTeaser() {
    const randomIndex = Math.floor(Math.random() * teasers.length);
    teaserElement.innerHTML = teasers[randomIndex];
}

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.classList.add('hidden');
        revealElement.classList.remove('hidden');
        return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const totalTime = 24 * 60 * 60 * 1000;
    const progressPercent = 100 - (timeLeft / totalTime * 100);
    progressElement.style.width = `${progressPercent}%`;
}

// Initialize
shuffleTeaser();
setInterval(updateCountdown, 1000);
updateCountdown();