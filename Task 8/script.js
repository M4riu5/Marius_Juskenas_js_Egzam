/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function CalculatorAnother(a,b){
    this.sum = a+b
    this.subtraction = a-b
    this.multiplication = a*b
    this.division = a/b
}


const sum1 = new CalculatorAnother(9 , 4)
console.log('sum1 ---->', sum1);


//=============================================================
function Calculator(a,b) {
    this.a = a
    this.b = b
    this.sum=function() {
        return this.a + this.b
    }
    this.subtraction=function() {
        return this.a - this.b
    }
    this.multiplication=function() {
        return this.a * this.b
    }
    this.division=function() {
        return this.a / this.b
    }

}
const suma = new Calculator(10,5)
console.log('suma ---->', suma);
suma.sum()
suma.subtraction()
suma.multiplication()
suma.division()
console.log('sum ---->', suma.sum());
console.log('sum ---->', suma.subtraction());
console.log('sum ---->', suma.multiplication());
console.log('sum ---->', suma.division());
