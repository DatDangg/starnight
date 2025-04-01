const sky = document.querySelector(".sky");

function createStar() {
  sky.innerHTML = "";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const star_count = Math.min(width / 5, 100);
  for (var i = 0; i < star_count; i++) {
    star = document.createElement("div");
    star.className = `star ${i}`;

    star.style.left = Math.floor(Math.random() * width) + "px";
    star.style.top = Math.floor(Math.random() * height) + "px";
    const duration = (Math.random() * 3 + 1).toFixed(1);
    star.style.animation = `twinkle ${duration}s infinite`;

    sky.appendChild(star);
  }
}

function creatShootstar() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  shootstar = document.createElement("div");
  shootstar.className = "shootstar";

  shootstar.style.left = Math.floor(Math.random() * width) + "px";
  shootstar.style.top = Math.floor(Math.random() * (height / 2)) + "px";

  sky.appendChild(shootstar);
}

createStar();
setInterval(() => {
  if (Math.random() < 0.4) {
    creatShootstar();
  }
}, 2000);

window.addEventListener("resize", () => {
  createStar();
  creatShootstar();
});
