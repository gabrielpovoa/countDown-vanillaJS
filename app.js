let dayArea = document.querySelector('.day')
let hourArea = document.querySelector('.hour')
let minuteArea = document.querySelector('.minute')
let secondArea = document.querySelector('.second')

const countDown = () => {
    const countDate = new Date('June 9, 2021 8:00:50').getTime();
    const now = new Date().getTime()
    const gap = now - countDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);


    dayArea.innerHTML = textDay;
    hourArea.innerHTML = textHour;
    minuteArea.innerHTML = textMinute;
    secondArea.innerHTML = textSecond;
};

setInterval(() => {
    countDown()
}, 1000);
