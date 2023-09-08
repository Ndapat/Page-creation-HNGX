// Function to update the current date, time (including milliseconds), and day of the week
function updateDateTime() {
    const currentDate = new Date();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getUTCDay()];
    const utcTimeString = currentDate.toISOString();
    const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, '0');
    const dateElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dateElement.textContent = `Current Day: ${dayOfWeek}`;
    timeElement.textContent = `Current Time (UTC): ${utcTimeString.substr(11, 12)}.${milliseconds}`;
}

// Call the update function initially and then every millisecond to keep the data real-time
updateDateTime();
setInterval(updateDateTime, 1); // Update every millisecond
