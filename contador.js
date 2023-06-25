'use strict';

const months = [
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Augosto",
"Septimebre",
"Octubre",
"Noviembre",
"DIciembre",
];

const weekdays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];




const giveaway = document.querySelector(".sorteo");
const deadline = document.querySelector(".limite");
const items = document.querySelectorAll(".limite-format p");

let today = new Date();
let tempYear = today.getFullYear();
let tempMonth = today.getMonth();
let tempDay = today.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `sorteo termina en ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;



const futureTime = futureDate.getTime();

function getRemainingTime() {
const today = new Date().getTime();
const timeDifference = futureTime - today;
const oneDay = 24* 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = timeDifference/oneDay;
days = Math.floor(days);
let hours = Math.floor((timeDifference % oneDay)/oneHour);
let minutes = Math.floor((timeDifference % oneHour)/oneMinute);
let seconds = Math.floor((timeDifference % oneMinute)/1000);



const values = [days, hours, minutes, seconds];

function format(item) {
    if(item < 10) {
        return (item = `0${item}`);
    }
    return item;
}

items.forEach(function (item, index){
    item.innerHTML = values[index];
});
let countdown = setInterval(getRemainingTime, 1000);

if(timeDifference <= 0) {
    clearInterval(countdown);
}

}


getRemainingTime();