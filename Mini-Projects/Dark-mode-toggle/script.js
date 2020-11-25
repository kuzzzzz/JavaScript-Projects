const toggle = document.getElementById("toggle");
const label = document.querySelector("label");
const paraText = document.querySelector("p");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  if (e.target.checked) {
    label.innerText = "☀️";
    paraText.innerHTML = `</span>Good Night  <i>🌝</i> love, Sleep well
<span>`;
  } else {
    label.innerText = "🌕";
    paraText.innerHTML = `</span>Good morning  <i>🌞</i> dear, Hope you had a great night?
<span>`;
  }
});
