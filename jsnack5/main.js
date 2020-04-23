// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

// versione faidate
var numero = parseInt(prompt("stampa il cubo dei numeri fino a: "));
for (var i = 0; i < numero + 1; i++) {
    var cubo = i * i * i;
    console.log(i + " elevato al cubo mi da: " + cubo);
}

// versione semplificata

// for (var i = 0; i <= numero; i++) {
//     console.log(i + " elevato al cubo ---> ", Math.pow(i, 3));
// }
