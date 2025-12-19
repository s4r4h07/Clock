let is24Hour = true;

const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}

function updateTime() {
  const now = new Date();

  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  if (!timeEl || !dateEl) return;

  let hours = now.getHours();
  if (!is24Hour) hours = hours % 12 || 12;

  timeEl.innerText =
    zeroPadding(hours, 2) + ":" +
    zeroPadding(now.getMinutes(), 2) + ":" +
    zeroPadding(now.getSeconds(), 2);

  dateEl.innerText =
    now.getFullYear() + "-" +
    zeroPadding(now.getMonth() + 1, 2) + "-" +
    zeroPadding(now.getDate(), 2) + " " +
    WEEK[now.getDay()];
}

window.addEventListener("DOMContentLoaded", () => {
  updateTime();
  setInterval(updateTime, 1000);
});

// so the button can call it
window.toggleClockFormat = () => {
  is24Hour = !is24Hour;
  updateTime();
};
