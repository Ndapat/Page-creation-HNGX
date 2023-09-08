// Function to update the current date, time, and day of the week
function updateDateTime() {
    const currentDate = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getUTCDay()];
    const utcTime = currentDate.toISOString().substr(11, 8); // Extract HH:MM:SS from UTC string
    const dateElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dateElement.textContent = `Current Day: ${dayOfWeek}`;
    timeElement.textContent = `Current Time (UTC): ${utcTime}`;
}

// Call the update function initially and then every second to keep the data real-time
updateDateTime();
setInterval(updateDateTime, 1000);
        
