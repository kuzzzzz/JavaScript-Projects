const text = "Hey, are you digging the green text on black?";
const text2 = "I know you are? cus I am 😉";
const text3 = "Oo and I love ❤️️ my gf Nancy, to the  🌕 and 🔙 .";

let index = 0;

function writeText(params) {
  document.body.innerText = params.slice(0, index);
  index++;
  if (index > params.length) {
    index = 0;
  }
}

// Todo convert setime out functions to a bigger functions that just takes in text input amount of screens and text to show

setTimeout(() => {
  var stop = setInterval(() => {
    writeText(text);
  }, 100);
  setTimeout(() => {
    clearInterval(stop);
    document.body.innerText = text;
  }, 4700);
}, 1000);


setTimeout(() => {
  var stop2 = setInterval(() => {
    writeText(text2);
  }, 100);
  setTimeout(() => {
    clearInterval(stop2);
    document.body.innerText = text2;
  }, 2700);
}, 7000);

setTimeout(() => {
  var stop3 = setInterval(() => {
    writeText(text3);
  }, 100);
  setTimeout(() => {
    clearInterval(stop3);
    document.body.innerHTML = `${text3}  <span class='rel'>⟲</span>`;
    let x = document.querySelector(".rel");
    x.addEventListener("click", () => {
      location.reload();
    });
  }, 5100);
}, 12500);
