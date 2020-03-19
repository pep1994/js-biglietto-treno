// quanti minuti mancano alla fine dell'ora


// creazione variabile che rappresenta i minuti in cui siamo nell'esatto istante
var minutesNow = new Date();

// variabile che rappresenti i minuti totali in un'ora
var minutesHour = 60;

 // output (minuti dell'ora - minuti in questo istante)
document.writeln("Minuti mancani alla fine dell'ora:" + " " + (minutesHour - minutesNow.getMinutes()));
