let seconds = 25 * 60;
let running = false;
const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
function paint() {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  timer.textContent = `${min}:${sec}`;
}
start.addEventListener("click", () => {
  if (running) return;
  running = true;
  start.textContent = "Focus Running";
  setInterval(() => {
    if (seconds > 0) seconds -= 1;
    paint();
  }, 1000);
});
