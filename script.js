var itemList = document.querySelectorAll("li");
var days = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
var months = ["jan", "feb", "mar"];
var d = new Date();		// date and time now
var liste1 = document.querySelector("#formiddag");
var liste2 = document.querySelector("#ettermiddag");


// set header to name of day and date
var day = document.querySelector("#dayHeader");
var date = document.querySelector("#dateHeader");
day.innerHTML = days[d.getDay()];
date.innerHTML = d.getDate() + ". " + months[d.getMonth()];


// remove all items/ reset
function removeAll() {
	while (liste1.firstChild) {
		liste1.firstChild.remove();
	}
	while (liste2.firstChild) {
		liste2.firstChild.remove();
	}
}

// general create item function
function createItem(itemName, timeEstimate) {
	var item = document.createElement("li");
	item.appendChild(document.createTextNode(itemName));
	var time = document.createElement("span");
	time.appendChild(document.createTextNode(timeEstimate));
	item.appendChild(time);
	item.addEventListener("click", function() {
		toggleDoneClass(item);
	})
	return item;
}

// add by day
function addItemsFromDay() {
	var itemByDay = ["vask klær", "tøm kurv", "tørk støv", "vanne", "støvsug", "ta ut søppel", "vask badet og sengetøy"];
	var name = itemByDay[d.getDay()];
	var item = createItem(name, "10 min");
	liste1.appendChild(item);
}

// function to toggle done items
function toggleDoneClass(item) {
	item.classList.toggle("done");
}

// add event listeners to existing items
itemList.forEach((item, i) => {
	item.addEventListener("click", function() {
		toggleDoneClass(item);
	});
});

// removeAll();
addItemsFromDay();
