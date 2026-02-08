/* ========== TYPING EFFECT ========== */
const text = "Mitu ❤️";
let index = 0;
const typing = document.getElementById("typing");

function typeText() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 180);
    }
}
typeText();

/* ========== FLOATING ROSES & HEARTS ========== */
const emojis = ["🌹", "❤️", "💖", "💕"];
for (let i = 0; i < 90; i++) { createFloat(); }

function createFloat() {
    const el = document.createElement("div");
    el.className = "float";
    el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-60px";
    el.style.animationDuration = (5 + Math.random() * 6) + "s";
    el.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); createFloat(); }, 12000);
}

/* ========== YES BUTTON ========== */
function sayYes() {
    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML =
        "আমি জানতাম তুমি YES বলবে 😭💖<br>আমি তোমাকে সারাজীবন ভালোবাসবো Mitu 🌹";

    for (let i = 0; i < 6; i++) {
        firework(Math.random() * window.innerWidth, Math.random() * window.innerHeight / 2);
    }
}

/* ========== NO BUTTON (RUNAWAY 😅) ========== */
function moveNo() {
    const noBtn = document.querySelector(".no");
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
}

/* ========== FIREWORK FUNCTION ========== */
function firework(x, y) {
    for (let i = 0; i < 25; i++) {
        const f = document.createElement("div");
        f.className = "firework";
        f.style.left = x + "px";
        f.style.top = y + "px";
        f.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
        f.style.setProperty("--y", (Math.random() * 200 - 100) + "px");
        f.style.background = `hsl(${Math.random() * 360},100%,70%)`;
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 1200);
    }
}

/* ========== BACKGROUND MUSIC ========== */
const music = document.getElementById("bgMusic");
let musicPlayed = false;
document.addEventListener("click", () => {
    if (!musicPlayed) {
        music.play();
        musicPlayed = true;
    }
});
