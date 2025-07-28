const canvas = document.querySelector('.love-animation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = Array(60).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 8 + 4,
  speedY: Math.random() * 1 + 0.5,
  drift: (Math.random() - 0.5) * 0.5,
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 105, 180, 0.5)';
    ctx.moveTo(h.x, h.y);
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y += h.speedY;
    h.x += h.drift;

    if (h.y > canvas.height) {
      h.y = -10;
      h.x = Math.random() * canvas.width;
    }
    if (h.x > canvas.width || h.x < 0) {
      h.drift *= -1;
    }
  });
  requestAnimationFrame(draw);
}
draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const text = "Kamu adalah hal terbaik yang pernah terjadi dalam hidup aku ayangg. Gapeduli seberapa banyak masalah yang datang, Aku cinta kamu hari ini, besok, dan untuk selamanya baby.";
let i = 0;
function typeText() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
window.onload = typeText;

document.getElementById("scrollToGallery").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
});
// Kontrol Audio Manual
const audio = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", () => {
  audio.play();
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
});
