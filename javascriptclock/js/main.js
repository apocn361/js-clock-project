let isim = prompt("İsminizi Giriniz: ");

document.querySelector("#myName").innerHTML = isim[0].toUpperCase() + isim.slice(1).toLowerCase();

let days = ["Pazar" , "Pazartesi" , "Salı" , "Çarşamba" , "Perşembe" , "Cuma" , "Cumartesi"];

function Zaman(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = days[date.getDay()];

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minuote : minute;
    second = (second < 10) ? "0" + second : second;
    
    document.querySelector("#myClock").innerHTML = hour + ":" + minute + ":" + second + " " + day;
}
setInterval(Zaman,1000);
Zaman();



