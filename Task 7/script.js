/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// Funkcija 
const keys = []
function showObjectKeys(object) {
  for (const key in object)
  keys.push(key)
}
showObjectKeys(audi)
console.log('keys ---->', keys);

// Cia kazkodel rodo kitaip bet parefreshinus page rodo normaliai nesupratau ar cia pas mane su narsykle ar kazka busiu blogai parases :)
