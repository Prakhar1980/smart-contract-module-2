function displayCurrentTime() {
	document.getElementById('currentTime').innerText = new Date().toLocaleTimeString();
}

// Initial display
displayCurrentTime();

// Update time every second
setInterval(function () {
	displayCurrentTime();
}, 1000);
