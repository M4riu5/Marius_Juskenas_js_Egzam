'use strict';
console.log('script.js');
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Nusitaikymai
const form = document.forms[0]
const input = document.getElementById('search')
const btnEl = document.getElementById('submit-btn')

//Formos sustabdymas
btnEl.addEventListener('click' , (event) => {
    event.preventDefault()
    function toPounds(input) {
        return input.value*2.2046
    }
    console.log('toPounds(input) ---->', toPounds(input));
    function toGrams(input) {
        return input.value/0.0010000
    }
    console.log('toGrams(input) ---->', toGrams(input));
    function toOz(input)  {
        return input.value*35.274
    }
    console.log(' toOz(input) ---->',  toOz(input));

})