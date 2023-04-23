const stopWatch = document.getElementsByClassName('stopWatch')[0];
const startBtn = document.getElementsByClassName('startBtn')[0];
const pauseBtn = document.getElementsByClassName('pauseBtn')[0];
const continueBtn = document.getElementsByClassName('continueBtn')[0];
const restartBtn = document.getElementsByClassName('restartBtn')[0];
const resetBtn = document.getElementsByClassName('resetBtn')[0];
const spanTag = document.getElementsByClassName('milliSecondValue')[0];

let milliSeconds = 0, seconds = 0, minutes = 0, hours = 0;

// ternary operator
// condition ? code : code 

// if condition1 {
//     // code to be executed if condition1 is true
//    if condition2 {
//       // code to be executed if both condition1 and condition2 are true
//    }
//  }

const stopWatchFunction = () => {

    milliSeconds += 10;
    if (milliSeconds == 1000) {
        seconds += 1;
        milliSeconds = 0;

        if (seconds === 60) {
            seconds = 0;
            minutes += 1;

            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        }
    }

    if ( milliSeconds < 10) {
        const milliSecondText1 = '0' + milliSeconds.toString();
        spanTag.textContent = milliSecondText1;
    } else if (milliSeconds >= 10 && milliSeconds < 100) {
        const milliSecondText2 = '0' + milliSeconds.toString();
        spanTag.textContent = milliSecondText2;
    } else {
        spanTag.textContent = milliSeconds;
    }

    // const milliSecondText1 = milliSeconds < 10 ? '00' + milliSeconds.toString() : milliSeconds;
    // spanTag.textContent = milliSecondText1;
    // const milliSecondText2 = milliSeconds > 10 && milliSeconds < 100 ? '0' + milliSeconds.toString() : milliSeconds;
    // spanTag.textContent = milliSecondText2;
    const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
    const hourText = hours < 10 ? '0' + hours.toString() : hours;
    stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText;
}

 let intervalId; // global scope
 startBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    intervalId = setInterval(stopWatchFunction,10);  // returns-non zero number
 })

pauseBtn.addEventListener('click',() => {
    clearInterval(intervalId);
})

continueBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    intervalId = setInterval(stopWatchFunction,10); 
})

restartBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    milliSeconds = 0, seconds = 0, minutes = 0, hours = 0;
    stopWatch.textContent = '00:00:00';
    spanTag.textContent = '0';
})

resetBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    milliSeconds = "000", seconds = 0, minutes = 0, hours = 0;
    spanTag.textContent = milliSeconds;
    const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
    const hourText = hours < 10 ? '0' + hours.toString() : hours;
    stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText;
 })
