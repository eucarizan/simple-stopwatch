const timer = document.getElementById("timer");
const laps = document.getElementById("laps");

let interval;
let time = 0;
let running = false;

function startStopwatch() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      time++;
      timer.textContent = formatTime(time);
    }, 10);
  }
}

function formatTime(totalSeconds) {
  const min = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const sec = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const mil = String(totalSeconds % 60).padStart(2, '0');
  return `${min}:${sec}:${mil}`;
}

function stopStopwatch() {
  clearInterval(interval);
  running = false;
}

function resetStopwatch() {
  stopStopwatch();
  interval = null;
  time = 0;
  timer.textContent = formatTime(0);
  laps.innerHTML = "";
}

function lapStopwatch() {
  let newTime = document.createElement("li");
  newTime.textContent = timer.textContent;
  laps.appendChild(newTime);
}

document.getElementById("start").addEventListener('click', startStopwatch);
document.getElementById("stop").addEventListener('click', stopStopwatch);
document.getElementById("reset").addEventListener('click', resetStopwatch);
document.getElementById("lap").addEventListener('click', lapStopwatch);
