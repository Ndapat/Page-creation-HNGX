//declare the array
const   daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//function to update the current day of the week
function updateDayOfWeek() {
    const currentDate = new Date();
    const dayOfWeek = days[currentDate.getUTCDay()];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
}
//function to update the current utc time
function updateUTCTime() {
   const currentDate = new Date();
   const utcTime = currentDate
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime
}
//call the update function every second
setInterval(updateDayOfWeek, 1000);
setInterval(updateUTCTime, 1000);