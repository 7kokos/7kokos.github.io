var h1 = document.getElementsByTagName('h1')[0],
    start = document.querySelector('.start'),
    clear = document.querySelector('.clear'),
    milliseconds = 0, seconds = 0, minutes = 0, hours = 0,
    t,
    k=0;

function run() {
    milliseconds = milliseconds + 5;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
                if (minutes >= 60) {
                   minutes = 0;
                   hours++;
                }
        }
    }
    h1.innerHTML = 
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
    (seconds > 9 ? seconds : "0" + seconds) + "." +
     (milliseconds > 9 ? (milliseconds > 99 ? milliseconds : "0" + milliseconds)
     : "00" + milliseconds); 
};

function  selector () {

    if (k === 0) {
        t = setInterval(run, 1);
        start.innerHTML = 'pause';
        start.classList.add('btn-primary');
        start.classList.remove('btn-success');
        k++;
    } else { 
        clearInterval(t);
        start.innerHTML = 'start';
        start.classList.add('btn-success');
        start.classList.remove('btn-primary');
        k=0;
    }
};

function reset () {
    clearInterval(t);
    h1.innerHTML = "00:00:00.000";
    milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
    k++;
    selector();
}; 

start.addEventListener("click", selector);
clear.addEventListener("click", reset);



