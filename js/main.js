// Scroll
function scrollToSection(id){
  document.querySelector(id)
    .scrollIntoView({behavior:'smooth'});
}

// DARK MODE

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

  if(document.body.dataset.theme === "light"){
    document.body.dataset.theme = "dark";
    themeBtn.textContent = "☀️";
  } else {
    document.body.dataset.theme = "light";
    themeBtn.textContent = "🌙";
  }

};

// MUSIC CONTROL

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicToggle");

let musicStarted = false;

// Clique no botão
musicBtn.addEventListener("click", toggleMusic);

// Clique em qualquer lugar da tela
document.addEventListener("click", startMusicOnce, { once: true });

function startMusicOnce() {

  if (!musicStarted) {
    music.play();
    musicStarted = true;
    musicBtn.textContent = "";
  }

}

function toggleMusic() {

  if (!musicStarted) {
    music.play();
    musicStarted = true;
    musicBtn.textContent = "";
    return;
  }

  if (music.paused) {
    music.play();
    musicBtn.textContent = "";
  } else {
    music.pause();
    musicBtn.textContent = "";
  }

}

// COUNTER COMPLETO

const startDate = new Date("2025-10-31"); // MUDE AQUI

function updateCounter(){

  const now = new Date();
  let diff = now - startDate;

  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours   = Math.floor(minutes / 60);
  let days    = Math.floor(hours / 24);
  let months  = Math.floor(days / 30.44);
  let years   = Math.floor(months / 12);

  document.getElementById("timeCounter").innerHTML = `
    ${years} anos,
    ${months%12} meses,
    ${days%30} dias<br>
    ${hours%24}h ${minutes%60}m ${seconds%60}s
  `;
}

setInterval(updateCounter,1000);
updateCounter();

// SECRET

function openSecret(){

  const pass = prompt("Senha secreta 💙");

  if(pass === "3101"){

    document.getElementById("secretText")
      .innerText = `
Meu amor…

Você é a melhor parte
da minha vida.

Obrigado por existir.
Eu te amo pra sempre 💙
      `;

    document.getElementById("secretModal")
      .style.display = "flex";

  } else {
    alert("Senha errada 😅");
  }

}

function closeSecret(){

  document.getElementById("secretModal")
    .style.display = "none";

}

// PARTICLES

const particleBox = document.getElementById("particles");

for(let i = 0; i < 25; i++){

  const p = document.createElement("span");

  p.style.left = Math.random() * 100 + "%";
  p.style.animationDelay = Math.random() * 10 + "s";
  p.style.animationDuration = 10 + Math.random() * 10 + "s";

  particleBox.appendChild(p);

}

// SCROLL ANIMATION

const sections = document.querySelectorAll("section");

function showSections(){

  sections.forEach(sec => {

    const top = sec.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      sec.classList.add("visible");
    }

  });

}

window.addEventListener("scroll", showSections);
showSections();

// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightboxImg");

function openImg(src){
  lightbox.style.display = "flex";
  lightImg.src = src;
}

function closeImg(){
  lightbox.style.display = "none";
}

// BIRTHDAY CHECK

function closeBirthday(){
  document.getElementById("birthdayModal")
    .style.display = "none";
}

// Leia mais - História

document.querySelectorAll('.readMoreBtn').forEach(btn => {

  btn.addEventListener('click', () => {

    const text = btn.previousElementSibling;

    if (text.classList.contains('expanded')) {
      text.classList.remove('expanded');
      btn.textContent = 'Ler mais';
    } else {
      text.classList.add('expanded');
      btn.textContent = 'Ler menos';
    }

  });

});

// Abrir surpresa

const openBtn = document.getElementById('openSecretBtn');
const lock = document.getElementById('secretLock');

openBtn.addEventListener('click', () => {
  lock.style.display = 'flex';
});


// Senha da surpresa

function checkSecret() {

  const pass = document.getElementById('secretPass').value;
  const error = document.getElementById('lockError');

  const correct = "31102025"; // data real

  const today = new Date();
const unlockDate = new Date("2026-02-14");

if (today < unlockDate) {
  error.textContent = "Ainda não é o dia 😘 Espera mais um pouquinho...";
  return;
}

  if (pass === correct) {

    lock.style.display = 'none';

    document.getElementById("birthdayModal")
      .style.display = "flex";

  } else {
    error.textContent = "Senha incorreta 😅 Tenta de novo...";
  }

}

// SURPRESA COMPLETA

const flow = document.getElementById("surpriseFlow");
const steps = document.querySelectorAll(".step");

function showFlow() {
  flow.style.display = "flex";
  showStep(1);
}

function showStep(n) {
  steps.forEach(s => s.style.display = "none");
  document.getElementById("step" + n).style.display = "block";
}

function nextStep(n) {
  showStep(n);
}


// Conectar com senha
function openSecret(){
  flow.style.display = "flex";
  showStep(1);
}


// QUIZ

function checkQuiz(){

  const q1 = document.getElementById("q1").value.toLowerCase();
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value.toLowerCase();

  if(
    q1.includes("igreja") &&
    q2 === "31/10/2025" &&
    q3.includes("amo te amar")
  ){
    nextStep(2);
  } else {
    document.getElementById("quizError").innerText =
      "Hmm… tenta de novo 😅💙";
  }

}


// MENSAGENS

const msgs = [
  "Eu amo seu sorriso 💙",
  "Eu amo seu cuidado comigo",
  "Eu amo sua fé",
  "Eu amo sua presença",
  "Eu amo seu jeito",
  "Eu amo você inteira"
];

function showMessage(){

  const r = Math.floor(Math.random() * msgs.length);

  document.getElementById("randomMsg").innerText =
    msgs[r];

}
