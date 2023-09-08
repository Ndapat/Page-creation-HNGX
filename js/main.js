// Function to update the current UTC time including milliseconds
function updateUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.toISOString().substr(11, 12); // Extract HH:MM:SS.SSS from UTC string
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

// Call the update functions initially and then every millisecond to keep the data real-time
updateDayOfTheWeek();
updateUTCTime();
setInterval(updateDayOfTheWeek, 1000);
setInterval(updateUTCTime, 1); // Update every millisecond
