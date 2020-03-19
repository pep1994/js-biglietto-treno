// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.

// chiedo l'età della prima persona
var age1 = parseInt(prompt("Quanti anni hai persona1?"));

// chiedo l'età della seconda persona
var age2 = parseInt(prompt("Quanti anni hai persona2?"));


// logica per stampare a schermo l'età più grande
if (age1 > age2) {
  document.writeln("L'età maggiore è quella della persona1, infatti ha" + " " + age1 + " " + "anni");
} else if (age1 < age2) {
  document.writeln("L'età maggiore è quella della persona2, infatti ha" + " " + age2 + " " + "anni");
} else {
  document.writeln("L'età della persona1 è uguale a quella della persona2, infatti entrambi hanno" + " " + age1 + " " + "anni");
}
