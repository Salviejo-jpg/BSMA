/* ================= POPUP ================= */

function openPopup(){
    document.getElementById("popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

/* ================= CONFETTI ================= */

const colors = [
    "#ff4d4d",
    "#ffd11a",
    "#4dff88",
    "#4da6ff",
    "#ff66cc"
];

const card = document.getElementById("messageCard");

for(let i = 0; i < 70; i++){

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "%";

    confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    confetti.style.width =
        Math.random() * 8 + 5 + "px";

    confetti.style.height =
        confetti.style.width;

    confetti.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    confetti.style.animationDelay =
        Math.random() * 5 + "s";

    card.appendChild(confetti);
}