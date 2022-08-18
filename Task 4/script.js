/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
// Nusitaikymai
const outputEl = document.getElementById('output');

//========================
async function getCars() {
    const resp = await fetch(ENDPOINT)
    const data = await resp.json()
    console.log('data ---->', data);
    generateList(data)
}
getCars()

function generateList(carsObj) {
    carsObj.forEach(carsObj => {
        const divCardEl = document.createElement('div')
    divCardEl.className=('card')
    divCardEl.innerHTML=`
    <h2>${carsObj.brand}</h2>
      <p>${carsObj.models}</p>

    `
    outputEl.append(divCardEl)
});
}