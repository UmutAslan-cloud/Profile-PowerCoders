function convertTime(poffset) {
    let newTime = new Date()
    let localNewTime = newTime.getTime()
    let localOffset = newTime.getTimezoneOffset() * 6000
    let utc = localNewTime + localOffset
    let beijingTime = utc + (3600000 * poffset)
    let convertedTime = new Date(beijingTime)
    return convertedTime;
}

function writeTime() {
    let cityDate = (convertTime(offset))
    let localHours = cityDate.getHours();
    let localMin = cityDate.getMinutes();
    let localSec = cityDate.getSeconds();
    localHours = (localHours < 10) ? "0" + localHours : localHours;
    localMin = (localMin < 10) ? "0" + localMin : localMin;
    localSec = (localSec < 10) ? "0" + localSec : localSec;
    let time = `${localHours} : ${localMin} : ${localSec} `
    digitalClock.innerHTML = time;
}

let digitalClock = document.getElementById("digi")
let dropDown = document.querySelector("#city-label");
let cityName = document.getElementById("city")
let mainContent = document.getElementById("clock-content")
let offset = 0;

dropDown.addEventListener("change", function (e) {
    if (e.target.value == "Beijing") {
        offset = 7;
        cityName.innerHTML = e.target.value
    } else if (e.target.value == "Zürich") {
        offset = 0;
        cityName.innerHTML = e.target.value
    } else if (e.target.value == "Toronto") {
        offset = -6
        cityName.innerHTML = e.target.value
    }
})
let timerHandler = setInterval(writeTime, 1000);
