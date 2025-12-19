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
  
  let hours24 = now.getHours();
  let ampm = hours24 >= 12 ? "PM" : "AM";
  let hours12 = hours24 % 12 || 12;

  timeEl.innerText =
  zeroPadding(hours12, 2) + ":" +
  zeroPadding(now.getMinutes(), 2) + ":" +
  zeroPadding(now.getSeconds(), 2) + " " + ampm;
  
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

window.toggleTheme = () => {
  document.body.classList.toggle("light");
};
