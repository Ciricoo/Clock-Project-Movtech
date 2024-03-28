
//Digital Clock

const hourDigital = document.querySelector('#hour-digital');
const minDigital = document.querySelector('#min-digital');
const periodDigital = document.querySelector('#period')
const secDigital = document.querySelector('#sec-digital');

const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});

setInterval(() => {
    let date = new Date();
    let dHour = date.getHours();
    let dMinute = date.getMinutes();
    let dSec = date.getSeconds();
    let period = "AM";

    if (dHour >= 12) {
        period = "PM"
    }

    var formatValue = formatSwitchBtn.getAttribute("data-format");
    if (formatValue === "12") {
        dHour = dHour > 12 ? dHour % 12 : dHour;
    }

    hourDigital.innerHTML = `${formatTime(dHour)}`;
    minDigital.innerHTML = `${formatTime(dMinute)}`;
    periodDigital.innerHTML = `${formatTime(period)}`;
    secDigital.innerHTML = `${formatTime(dSec)}`;

}, 1000);

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (e.target.id !== "active-menu") {
        dotMenu.classList.remove("active");
    }
})

//Analog Clock

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sec = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}, 1000); 

// Chronometer

const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervalId = 0;
let timer = 0;
let marks = [];

function formatarTime  (time) {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
};

 function setTimer (time) {
    timerEl.innerText = formatarTime(time);
};

function addMarkToList (markIndex, markTime) {
    const markItem = document.createElement('div');
    markItem.classList.add('trash');
    markItem.innerHTML = `<p>Marca ${markIndex}: ${formatarTime(markTime)}</p>`;
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('botao-trash');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
        marks.splice(markIndex - 1, 1); 
        updateMarksList(); 
    });

    markItem.appendChild(deleteButton);
    marksList.appendChild(markItem);
};


function updateMarksList () {
    marksList.innerHTML = ''; 
    marks.forEach((mark, index) => {
        addMarkToList(index + 1, mark);
    });
};

function toggleTimer () {
    const button = document.getElementById('power');
    const action = button.getAttribute('action');

    clearInterval(intervalId);

    if (action == 'start' || action == 'continue') {
        intervalId = setInterval(() => {
            timer += 1;
            setTimer(timer);
    }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
};

function markTime () {
    marks.push(timer);
    if(timer != 0){
    addMarkToList(marks.length, timer);
    }
};

function resetTimer () {
    clearInterval(intervalId);
    timer = 0;
    setTimer(timer);
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
};

document.getElementById('power').addEventListener('click', toggleTimer);
document.getElementById('mark').addEventListener('click', markTime);
document.getElementById('reset').addEventListener('click', resetTimer);

//  Changing watches and chronometer

const digitalClockBtn = document.getElementById('botaodigital');
const analogClockBtn = document.getElementById('botaoanalog');
const digitalClock = document.querySelector('#digital-clock');
const analogClock = document.querySelector('#analog-clock');
const stopwatchBtn = document.querySelector('#botaostopwatch');
const stopwatch = document.querySelector('#stopwatch');


digitalClockBtn.addEventListener('click', () => {
    digitalClock.style.display = 'flex';
    analogClock.style.display = 'none';
    stopwatch.style.display = 'none';
});

analogClockBtn.addEventListener('click', () => {
    analogClock.style.display = 'flex';
    digitalClock.style.display = 'none';
    stopwatch.style.display = 'none';

});

stopwatchBtn.addEventListener('click', () => {
    stopwatch.style.display = 'block'
    analogClock.style.display = 'none';
    digitalClock.style.display = 'none';
});
