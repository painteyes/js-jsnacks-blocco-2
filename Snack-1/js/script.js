// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

let userNumber = parseInt(prompt('Inserisci un numero'));

let numberToPrint;

if (userNumber % 2 === 0) {
    numberToPrint = userNumber;
} else {
    numberToPrint = userNumber + 1;
}

alert(numberToPrint);