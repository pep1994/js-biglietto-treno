// calcolo prezzo biglietto treno


// variabili
var basePrice = 0.21;
var userKilo;
var userAge;
var price;
var discountAnderage;
var discountOver65;
var priceTot;


// calcolo valore numerico sconto per minorenni
discountAnderage = 20 / 100;

// calcolo valore numerico sconto per over 65
discountOver65 = 40 / 100;


// chiediamo all'utente quanti kilometri deve percorrere
userKilo = parseInt(prompt("Quanti kilometri deve percorrere?"));

// chiediamo all'utente la sua età
userAge = parseInt(prompt("Quanti anni ha?"));

// calcoliamo il prezzo del biglietto senza lo sconto
price = userKilo * basePrice;

// logica
if (userAge < 18) {
  priceTot = price - (price * discountAnderage);
} else if (userAge > 65) {
  priceTot = price - (price * discountOver65);
} else {
  priceTot = price;
}

console.log(priceTot);
