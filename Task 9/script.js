/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor (title , director, budget) {
        this.title = title
        this.director = director
        this.budget = budget
    }
    wasExpensive() {
        if(this.budget > 100000000){
            return true
        } else return false
    }
}
const Avatar = new Movie('Avatar', 'James Cameron' , 237000000)
const Interstellar = new Movie('Interstellar', 'Christopher Nolan' , 163000000)
const Pats_Sau_Mil = new Movie('Pats Sau Milijonierius', 'Tadas Vidmantas' , 350000)
console.log('Avatar was expensive?', Avatar.wasExpensive());
console.log('Interstellar was expensive?', Interstellar.wasExpensive());
console.log('Pats sau Milijonierius was expensive?', Pats_Sau_Mil.wasExpensive());