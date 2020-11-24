const emojiArray = [
  "✨",
  "🌠",
  "🌟",
  "💫",
  "🌃",
  "✄",
  "✌",
  "₦",
  "￥",
  "฿",
  "♞",
  "♕",
  "♠",
  "♣",
  "💓",
  "💖",
  "💞",
  "💟",
  "💞",
  "✔️",
  "✇",
  "☠",
  "⌛",
  "⌚",
  "☢",
  "⊘",
  "⬤",
  "⦿",
  "𝓐",
  "𝓣",
  "𝓤",
  "𝓶",
  "𝓪",
  "𝓱",
  "𝒩",
  "𝒶",
  "𝓃",
  "𝒸",
  "𝒴",
  "🎮",
];


function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];

  // currently have 40 emoji elements in the araray
  // heart.innerText = emojiArray.slice(1,2) usethis to select a single item

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

var y = setInterval(createHeart, 300);

