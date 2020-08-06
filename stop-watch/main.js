let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let s=0, m=0, h=0;
let t;

function addSec() {
    s++;
    if(s >= 60){
        s=0;
        addMin();
    }
    //console.log("seconds : "+ s);
    second.value = s;
    return true;
}

function addMin() {
    m++;
    if(m >= 60){
        m=0;
        addHour();
    }
    minute.value = m;
    return true;
}

function addHour() {
    h++;
}

function startWatch(){
     t = setInterval(addSec, 1000);
}

function pauseWatch(){
    clearInterval(t);
}

function resetWatch(){
    clearInterval(t);
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    s = 0, m = 0, h = 0;
}