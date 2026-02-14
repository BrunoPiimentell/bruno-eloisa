/* =============================
   CONFIG
============================= */

const startDate = new Date("2025-10-31T00:00:00");
const correctPassword = "31102025";
const unlockDate = new Date("2026-02-04");


/* =============================
   THEME
============================= */

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

  if (document.body.dataset.theme === "light") {
    document.body.dataset.theme = "dark";
    themeBtn.textContent = "☀️";
  } else {
    document.body.dataset.theme = "light";
    themeBtn.textContent = "🌙";
  }

};


/* =============================
   MUSIC
============================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicToggle");

let musicStarted = false;

musicBtn.addEventListener("click", toggleMusic);

document.addEventListener("click", startMusicOnce, { once: true });

function startMusicOnce() {

  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }

}

function toggleMusic() {

  if (!musicStarted) {
    startMusicOnce();
    return;
  }

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }

}


// COUNTER REAL (SEM APROXIMAÇÃO)

function updateCounter() {

  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const prevMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();

    days += prevMonth;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("timeCounter").innerHTML = `
    ${years} anos,
    ${months} meses,
    ${days} dias<br>
    ${hours}h ${minutes}m ${seconds}s
  `;
}

setInterval(updateCounter, 1000);
updateCounter();

/* =============================
   SCROLL FADE
============================= */

const sections = document.querySelectorAll("section");

function showSections() {

  sections.forEach(sec => {

    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }

  });

}

window.addEventListener("scroll", showSections);
showSections();


/* =============================
   LIGHTBOX
============================= */

const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightboxImg");

function openImg(src) {

  lightbox.style.display = "flex";
  lightImg.src = src;

}

function closeImg() {

  lightbox.style.display = "none";

}


/* =============================
   READ MORE
============================= */

document.querySelectorAll('.readMoreBtn').forEach(btn => {

  btn.addEventListener('click', () => {

    const text = btn.previousElementSibling;

    text.classList.toggle('expanded');

    btn.textContent = text.classList.contains('expanded')
      ? 'Ler menos'
      : 'Ler mais';

  });

});


/* =============================
   PARTICLES
============================= */

const particleBox = document.getElementById("particles");

for (let i = 0; i < 25; i++) {

  const p = document.createElement("span");

  p.style.left = Math.random() * 100 + "%";
  p.style.animationDelay = Math.random() * 10 + "s";
  p.style.animationDuration = 10 + Math.random() * 10 + "s";

  particleBox.appendChild(p);

}


/* =============================
   SURPRESA - LOCK
============================= */

const openBtn = document.getElementById('openSecretBtn');
const lock = document.getElementById('secretLock');
const flow = document.getElementById("surpriseFlow");
const steps = document.querySelectorAll(".step");

openBtn.addEventListener('click', () => {

  lock.style.display = 'flex';

});


function checkSecret() {

  const pass = document.getElementById('secretPass').value;
  const error = document.getElementById('lockError');

  const today = new Date();

  if (today < unlockDate) {

    error.textContent =
      "Ainda não é o dia 😘 Espera mais um pouquinho...";

    return;
  }

if (pass === correctPassword) {

  lock.style.opacity = "0";

  setTimeout(() => {
    lock.style.display = "none";

    // MOSTRA O QUIZ PRIMEIRO
    document.getElementById("realQuizStep").classList.remove("hidden");

  }, 800);

} else {

    error.textContent =
      "Senha incorreta 😅 Tenta de novo...";

  }

}


/* =============================
   SURPRESA CINEMATOGRÁFICA
============================= */

let currentCinema = 1;
const totalCinema = 11;

function startCinema() {

  currentCinema = 1;

  flow.style.display = "flex";

  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);

  document.querySelectorAll(".cinemaStep").forEach(step => {
    step.style.display = "none";
    step.style.opacity = 0;
  });

  document.body.style.filter = "brightness(0.8)";

  showCinemaStep(currentCinema);
}


function showCinemaStep(n) {

  const all = document.querySelectorAll(".cinemaStep");

  all.forEach(s => {
    s.style.display = "none";
    s.style.opacity = 0;
  });

  const current = document.getElementById("cinema" + n);

  if (!current) return;

  current.style.display = "flex";

  setTimeout(() => {
    current.style.opacity = 1;
  }, 100);

  console.log("Mostrando cena:", n);

  // 🎬 CENA DO VÍDEO
  if (n === 10) {

    const video = document.getElementById("finalVideo");

    // escurece fundo
    flow.classList.add("cinemaDark");

    // fade out música
fadeOutMusic(2000);

setTimeout(() => {
  music.pause();
}, 2500);

    video.currentTime = 0;

    setTimeout(() => {
      video.play();
      video.style.opacity = 1;
    }, 1500);

    video.onended = function() {

      setTimeout(() => {
        currentCinema++;
        showCinemaStep(currentCinema);
      }, 1000);

    };

    return;
  }

  // 🎞 CENAS NORMAIS
  if (n < totalCinema) {

    setTimeout(() => {
      currentCinema++;
      showCinemaStep(currentCinema);
    }, 5000);

  }

}


/* =============================
   QUIZ
============================= */

function checkQuiz() {

  const q1 = document.getElementById("q1").value.toLowerCase();
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value.toLowerCase();

  if (
    q1.includes("igreja") &&
    q2 === "31/10/2025" &&
    q3.includes("amo te amar")
  ) {

    nextStep(2);

  } else {

    document.getElementById("quizError").innerText =
      "Hmm… tenta de novo 😅💙";

  }

}


/* =============================
   RANDOM MESSAGE
============================= */

const msgs = [
  "Eu amo seu sorriso 💙",
  "Eu amo seu cuidado comigo",
  "Eu amo sua fé",
  "Eu amo sua presença",
  "Eu amo seu jeito",
  "Eu amo você inteira"
];

function showMessage() {

  const r = Math.floor(Math.random() * msgs.length);

  document.getElementById("randomMsg").innerText = msgs[r];

}


/* =============================
   BIRTHDAY
============================= */

function closeBirthday() {

  document.getElementById("birthdayModal")
    .style.display = "none";

}

function createGoldenParticles() {

  for (let i = 0; i < 40; i++) {
    const p = document.createElement("span");
    p.classList.add("goldParticle");
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDelay = Math.random() * 5 + "s";
    document.getElementById("cinema8").appendChild(p);
  }

}

function fadeOutMusic(duration = 2000) {

  const step = 0.05;
  const intervalTime = duration * step;
  let fade = setInterval(() => {

    if (music.volume > step) {
      music.volume -= step;
    } else {
      music.volume = 0;
      music.pause();
      clearInterval(fade);
    }

  }, intervalTime);

}

lock.classList.add("shake");

setTimeout(() => {
  lock.classList.remove("shake");
}, 400);

const eloisaBtn = document.getElementById("eloisaBtn");
const brunoBtn = document.getElementById("brunoBtn");
const quizMessage = document.getElementById("quizMessage");

let escapeCount = 0;

eloisaBtn.addEventListener("click", () => {
  escapeCount++;

  const x = Math.random() * 60;
  const y = Math.random() * 60;

  eloisaBtn.style.left = x + "%";
  eloisaBtn.style.top = y + "%";

  if (escapeCount === 2) {
    quizMessage.textContent = "Tem certeza mesmo? 👀";
  }

  if (escapeCount === 4) {
    quizMessage.textContent = "Ok… você é persistente 😅";
  }
});

brunoBtn.addEventListener("click", () => {
  quizMessage.textContent = "Eu sabia 😌💙";

  setTimeout(() => {

    // Esconde o Quem Ama Mais
    document.getElementById("quizStep").classList.add("hidden");

    // Mostra a Carta
    document.getElementById("letterStep").classList.remove("hidden");

  }, 1500);
});

function validateRealQuiz() {

  const a1 = document.getElementById("quiz1").value.toLowerCase();
  const a2 = document.getElementById("quiz2").value;
  const a3 = document.getElementById("quiz3").value.toLowerCase();

  if (
    a1.includes("igreja") &&
    a2 === "denguinho" &&
    a3.includes("isadora")
  ) {

    document.getElementById("realQuizStep").classList.add("hidden");

    setTimeout(() => {
      document.getElementById("quizStep").classList.remove("hidden");
    }, 800);

  } else {

    document.getElementById("realQuizError").textContent =
      "Hmm… não parece ser você 👀 tenta de novo.";

  }
}


