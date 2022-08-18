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
