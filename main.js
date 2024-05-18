function updateClock() {
    var nepalTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kathmandu"});
    var options = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    var formattedTime = new Date(nepalTime).toLocaleTimeString('en-US', options);
    var date = new Date(nepalTime).toLocaleDateString('en-US');
    document.getElementById('clock').innerHTML = formattedTime + '<br>' + date;
}

updateClock(); // Initial call

// Update the clock every second
setInterval(updateClock, 1000);


document.getElementById("notesButton").addEventListener("click", function() {
    window.location.href = "https://taprajjoshi.github.io/notes";
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('notesButton').addEventListener('click', function() {
        alert('You will redirected to ( taprajjoshi.github.io/notes ) ');
    });
});
