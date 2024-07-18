// let sec = document.getElementsByClassName("second");
// let min = document.getElementsByClassName("minitue");
// let hur = document.getElementsByClassName("hour");

let hur = document.querySelector(".hour");
let min = document.querySelector(".minitue");
let sec = document.querySelector(".second");

setInterval(() => {
    let d = new Date();
    let dhour = d.getHours();
    let dminitue = d.getMinutes();
    let dsecond = d.getSeconds();

    let hrotation = 30*dhour + dminitue/2;
    let mrotation = 6*dminitue;
    let srotation = 6*dsecond;

    hur.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);