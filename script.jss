let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let starBbtn = document.getElementById('starBbtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

starBbtn.addEventListener('click', function()){
    if(timerId !== null){
        clarInterval(timerId);
    }
    timerId = setInterval(startTimer,10)
});

stopBbtn.addEventListener('click', function()){
    clarInterval(timerId);
    
});

resetBbtn.addEventListener('click', function()){
    clarInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00'
    
});

function syartTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(sec == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? '0${msec}' : msec;
    let msecString = secs < 10 ? '0${msec}' : secs;
    let msecString = mins < 10 ? '0${msec}' : mins;

    timerDisplay.innerHTML = '${minsString}': '${secsString}': '${msecString}';

}

