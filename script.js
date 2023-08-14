const dateCons = document.getElementById("date");
const dayCons = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const session = document.getElementById("session");
const Button = document.getElementById("toggle-btn");

let is24HrForm = true;
Button.addEventListener("click", function() {
    is24HrForm = !is24HrForm;
    updateEverySecond();

  Button.textContent = is24HrForm ? "12-hr / 24-hr" : "24-hr / 12-hr";
});

function updateEverySecond() {
  const now = new Date();

  const generalDate= { year: 'numeric', month: 'long', day: 'numeric' };
  dateCons.textContent = now.toLocaleDateString('en-US', generalDate);

  const weekday = { weekday: 'long' };
  dayCons.textContent = now.toLocaleDateString('en-US', weekday);

  const hr24 = now.getHours();

  const hr12 = hr24 % 12 || 12;

  hours.textContent = is24HrForm ? hr24.toString().padStart(2, '0') : hr12.toString().padStart(2, '0') ;
  minutes.textContent = now.getMinutes().toString().padStart(2, '0');
  seconds.textContent = now.getSeconds().toString().padStart(2, '0');

  const addPmAm = hr24 < 12 ? "AM" : "PM";
  session.textContent = is24HrForm ? "" : addPmAm; 
}
setInterval(updateEverySecond, 1000);

updateEverySecond();