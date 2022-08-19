'use strict';
/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// Nusitaikymai
const btnEl = document.getElementById('btn__element');
const btnCount = document.getElementById('btn__state');

let clicks = 0

btnEl.addEventListener('click' , () => { 
    function clickCount() {
        clicks += 1
        btnCount.innerHTML= clicks
    }
    clickCount()
})