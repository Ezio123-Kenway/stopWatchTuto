const stopWatch = document.getElementsByClassName('stopWatch')[0];
const startButton = document.getElementsByClassName('startButton')[0];
const pauseButton = document.getElementsByClassName('pauseButton')[0];
const continueButton = document.getElementsByClassName('continueButton')[0];
const restartButton =document.getElementsByClassName('restartButton')[0];

let seconds = 0, minutes = 0, hours = 0;

// ternary operator
// condition ? code : code 

 const startTime = () => {
     seconds += 1;
     if (seconds === 60) {
        seconds = 0;
        minutes += 1;

        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
     } 
     const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
     const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
     const hourText = hours < 10 ? '0' + hours.toString() : hours;
     stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText;
 }

// 1000ms --> 1s
let intervalId; // global scope
startButton.addEventListener('click',() => {
     intervalId = setInterval(startTime,1000); // returns a non-zero number
})

pauseButton.addEventListener('click',() => {
     clearInterval(intervalId);
 })

 continueButton.addEventListener('click',() => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000);
 })

 restartButton.addEventListener('click',() => {
    clearInterval(intervalId);
    seconds = 0, minutes = 0, hours = 0;
    intervalId = setInterval(startTime,1000);
 })