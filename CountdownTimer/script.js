const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const items = document.querySelectorAll('.container p');

const newYearsDate = '1 Jan 2021';

let newYears = new Date(newYearsDate);

// Get values for newYears 
const year = newYears.getFullYear();
const hours = newYears.getHours();
const minutes = newYears.getMinutes();

let month = newYears.getMonth();
month = months[month];
const weekday = weekdays[newYears.getDay()];
const date = newYears.getDate();

const futureTime = newYears.getTime();
function getCountdown() {
    const today = new Date().getTime();

    const t = newYears - today;

    // Get values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Calculate values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // Format values
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
    }
}

// Set interval for countdown 
let countdown = setInterval(getCountdown, 1000);

getCountdown();