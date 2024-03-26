const hourDigital = document.querySelector('#hour-digital');
const minDigital = document.querySelector('#min-digital');
const secDigital = document.querySelector('#sec-digital');

const hourAnalog = document.querySelector('.hour-analog');
const minAnalog = document.querySelector('.min-analog');
const secAnalog = document.querySelector('.sec-analog');

function getTime(){
    const time = new Date();

    const getHoursRot = (360 / 12) * time.getHours();
    const getMinRot = (360 / 60) * time.getMinutes();
    const getSecRot = (360 / 60) * time.getSeconds();

    hourAnalog.style.transform = `rotate(${getHoursRot}deg)`;
    minAnalog.style.transform = `rotate(${getMinRot}deg)`;
    secAnalog.style.transform = `rotate(${getSecRot}deg)`;
}
setInterval(() =>{
    getTime()
}, 1000);

getTime();

setInterval(() =>{
    let date = new Date();
    let dHour = date.getHours();
    let dMinute = date.getMinutes();
    let dSec = date.getSeconds();

    hourDigital .innerHTML = `${formatTime(dHour)}`;
    minDigital.innerHTML = `${formatTime(dMinute)}`;
    secDigital.innerHTML = `${formatTime(dSec)}`;
},1000);

function formatTime(time){
    return time < 10 ? '0' + time : time;
}

