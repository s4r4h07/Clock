const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function zeroPadding(num, digit) {
	return String(num).padStart(digit, '0');
}

function updateTime() {
	const now = new Date();

	const timeEL = document.getElementById("time");
	const dateEl = document.getElementById("date");

	if (!timeEl || !dateEl) return;

	timeEl.innerText = 
		zeroPadding(now.getHours(), 2) + ":" +
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
