// calcolo prezzo biglietto treno

var basePrice = 0.21;
var userKilo;
var userAge;



// chiediamo all'utente quanti kilometri deve percorrere
userKilo = prompt("Quanti kilometri deve percorrere?");

// chiediamo all'utente la sua età
userAge = prompt("Quanti anni ha?");

// logica prezzo biglietto
if (userAge < 18) {   // se l'utente ha meno di 18 anni
  // allora il prezzo del biglietto avrà uno sconto del 20%
} else if (userAge > 65) {  // altrimenti se l'utente avrà più di 65 anni
  // allora il prezzo del biglietto avrà uno sconto del 40%
} else { // altrimenti il prezzo del biglietto sarà quello base

}
