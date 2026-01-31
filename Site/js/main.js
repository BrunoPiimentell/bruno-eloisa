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

// MUSIC

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicToggle");

musicBtn.onclick = () => {

  if(music.paused){
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔇";
  }

};

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

function checkBirthday(){

  const today = new Date();

  const day   = today.getDate();
  const month = today.getMonth() + 1;

  if(day === 14 && month === 2){

    document.getElementById("birthdayModal")
      .style.display = "flex";

  }

}

checkBirthday();

function closeBirthday(){
  document.getElementById("birthdayModal")
    .style.display = "none";
}

document.addEventListener("click", ()=>{

  const music = document.getElementById("bgMusic");

  if(music && music.paused){
    music.play();
  }

});

