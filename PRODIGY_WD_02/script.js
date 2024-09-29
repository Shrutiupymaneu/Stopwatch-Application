let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Function to start the stopwatch
startBtn.addEventListener('click', function() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
    }
});

// Function to pause the stopwatch
pauseBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null; // To allow restart after pause
});

// Function to reset the stopwatch
resetBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
});

// Function to update the time
function updateTime() {
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    display.innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}
