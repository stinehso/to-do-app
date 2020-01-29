const days = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
const months = ["jan", "feb", "mar"];
const d = new Date();		// date and time now
const body = document.querySelector("body");

// set header to name of day and date
const day = document.querySelector("#dayHeader");
const date = document.querySelector("#dateHeader");
day.textContent = days[d.getDay()];
date.textContent = d.getDate() + ". " + months[d.getMonth()];

// set time
const time = document.querySelector("#time");
const hour = d.getHours();
const minutes = d.getMinutes();
let mins = (minutes < 10) ? "0" + minutes : minutes;
time.textContent = `${hour}:${mins}`;

// change color by time
function changeBackground(hour) {
    let color;
    if (hour === 8 || hour === 9 ||
        hour === 12 || hour === 13 ||
        hour === 17 || hour === 18) {
        color = "#0D4D4D"   // green
    } else if (hour === 10 || hour === 14 || hour === 19) {
        color = "#FFF115"   // yellow
    } else {
        color = "#801515"   // red
    }
    body.style.background = color;
}

changeBackground(hour);
