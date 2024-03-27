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

const digitalClockBtn = document.getElementById('botaodigital');
const analogClockBtn = document.getElementById('botaoanalog');
const digitalClock = document.querySelector('#digital-clock');
const analogClock = document.querySelector('#analog-clock');

digitalClockBtn.addEventListener('click', () => {
    digitalClock.style.display = 'flex';
    analogClock.style.display = 'none';
});

analogClockBtn.addEventListener('click', () => {
    digitalClock.style.display = 'none';
    analogClock.style.display = 'flex';
});

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

