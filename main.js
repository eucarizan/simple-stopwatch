const timer = document.getElementById("timer");
let interval;
let time = 0;

function startStopwatch() {
  interval = setInterval(() => {
    time++;
    timer.textContent = formatTime(time);
  }, 10);
}

function formatTime(totalSeconds) {
  const min = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const sec = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const mil = String(totalSeconds % 60).padStart(2, '0');
  return `${min}:${sec}:${mil}`;
}

function stopStopwatch() {
  clearInterval(interval);
}

document.getElementById("start").addEventListener('click', startStopwatch);
document.getElementById("stop").addEventListener('click', stopStopwatch);
