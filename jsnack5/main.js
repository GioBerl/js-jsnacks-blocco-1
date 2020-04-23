// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

// versione semplificata
var numero = parseInt(prompt("stampa il cubo dei numeri fino a: "));

for (var i = 1; i <= numero; i++) {
    console.log(i + " elevato al cubo ---> ", Math.pow(i, 3));
}
