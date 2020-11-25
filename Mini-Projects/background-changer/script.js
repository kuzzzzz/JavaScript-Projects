const btn = document.getElementById("btn");
let currentBg = "hsl(0,0,0)";

btn.addEventListener("click", () => {
  currentBg = randomBg();
  document.body.style.background = currentBg;
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(
    Math.random() * 100
  )}%, ${Math.floor(Math.random() * 100)}%)`;
}

btn.addEventListener("click", () => {
  btn.innerText = currentBg;
});
btn.addEventListener("mouseenter", () => {
  btn.innerText = currentBg;
});
btn.addEventListener("mouseleave", () => {
  btn.innerText = "Switch color";
});
