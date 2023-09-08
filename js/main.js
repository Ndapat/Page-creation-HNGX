//function of time in milliseconds 
const currentUTCTimeMillis = Date.now();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("currentUTCTime").textContent = currentUTCTimeMillis;
//function of date
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
        const currentDayOfTheWeek = daysOfWeek[dayOfWeek]
        document.getElementById("currentDayOfTheWeek").textContent = currentDayOfTheWeek;
        console.log(dayOfWeek)
