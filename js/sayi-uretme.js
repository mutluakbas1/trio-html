var sayilar = [];
var oyunBittimi = false;
var index = 1;
var sayiuretimi = true;

function sayiuret() {

    if (oyunBittimi == false) {
        while (sayilar.length < 50 && sayiuretimi) {
            let sayi = Math.floor(Math.random() * 50) + 1;
            if (!sayilar.includes(sayi)) {
                sayilar.push(sayi);
            }

            if (sayilar.length == 50) {
                sayilar.sort(function (a, b) {  return a - b;  }).forEach(i=> console.log(i));
                sayiuretimi = false;
            }
        }


        let sayigöstergesi = document.getElementById('sayigöstergesi');
        let gosterilenSayi = sayilar.pop();
        console.log(index + " çıkan sayı: " + gosterilenSayi);
        sayigöstergesi.innerHTML = 'bulman gereken sayi  : ' + gosterilenSayi;
        index++;

        if (sayilar.length == 0) {
            sayigöstergesi.innerHTML = "oyun bitti";
            oyunBittimi = true;
        }
    }

}