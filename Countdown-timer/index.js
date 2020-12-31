const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const container = document.getElementById("container");
const heading = document.getElementById("heading");

const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  //   moments js takes care of all this calculations

  daysEL.innerHTML = days;
  hoursEL.innerHTML = formatTime(hours);
  minutesEL.innerHTML = formatTime(minutes);
  secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

var x = new Date();

if (x.getFullYear() == 2021) {
  container.innerHTML = "";
  heading.innerText = "";
  document.body.style = "background-image:url(happy-new-year.gif)";
} else {
  countdown();
  setInterval(countdown, 1000);
}
