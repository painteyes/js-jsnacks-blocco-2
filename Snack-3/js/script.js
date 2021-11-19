/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
*/

let numbers = [1, 23, 43, 17, 88, 57, 34, 22, 10, 91, 65, 39];

let sum = 0; 

for (let i = 0; i < numbers.length; i++) {

    thisIndex = i;

    if (thisIndex  % 2 !== 0) {
        sum += numbers[thisIndex];
        console.log (numbers[thisIndex])
    }
}

console.log(sum);

