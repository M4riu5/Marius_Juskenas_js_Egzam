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
const outputEl = document.getElementById('output');
//Formos sustabdymas
btnEl.addEventListener('click' , (event) => {
    event.preventDefault()

    
    function toPounds(input) {
            return input.value*2.2046
        }
        function toGrams(input) {
            return input.value/0.0010000
        }
        function toOz(input)  {
            return input.value*35.274
        }
        
     outputEl.className='card'
        
        let poundText = document.createElement('h2')
        poundText.textContent=''
        poundText.textContent= `Your weight in Pounds ${toPounds(input)}lb.`
        outputEl.append(poundText)
        

        const gramsText = document.createElement('h2')
        gramsText.textContent= `Your weight in Grams ${toGrams(input)}g.`
        outputEl.append(gramsText)
        

        const ozText = document.createElement('h2')
        ozText.textContent= `Your weight in Oz ${toOz(input)}oz.`
        outputEl.append(ozText)
        
})
