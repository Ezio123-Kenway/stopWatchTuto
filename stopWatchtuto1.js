const stopWatch = document.getElementsByClassName('stopWatch')[0];
const startBtn = document.getElementsByClassName('startBtn')[0];
const pauseBtn = document.getElementsByClassName('pauseBtn')[0];
const continueBtn = document.getElementsByClassName('continueBtn')[0];
const restartBtn = document.getElementsByClassName('restartBtn')[0];
const resetBtn = document.getElementsByClassName('resetBtn')[0];

let seconds = 0, minutes = 0, hours = 0;

// ternary operator
// condition ? code : code

const startTimeValue = () => {
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
    stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText ;
}

let intervalId;  // global scope
startBtn.addEventListener('click',() => {
    clearInterval(intervalId);
     intervalId = setInterval(startTimeValue,1000);  // returns a non-zero number
})

pauseBtn.addEventListener('click',() => {
    clearInterval(intervalId);
})

continueBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    intervalId = setInterval(startTimeValue,1000);
})

restartBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    seconds = 0, minutes = 0, hours = 0;
    intervalId = setInterval(startTimeValue,1000);
})

resetBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    seconds = 0, minutes = 0, hours = 0;
    const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
    const hourText = hours < 10 ? '0' + hours.toString() : hours;
    stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText ;
})

