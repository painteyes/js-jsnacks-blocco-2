/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
*/


let names = ['Antonino', 'Marco', 'Giulia', 'Barbara', 'Michelina', 'Giacomino'];
console.log(names);
let lastnames = ['Rossi', 'Carta', 'Bruno', 'Bianchi', 'Verdi', 'Caputo'];
console.log(lastnames);
let list =[];
for (let i = 0; i < names.length; i++) {

    let randomIndex = Math.floor(Math.random() * ((names.length - 1) + 1));
    thisName = names [randomIndex];

    randomIndex = Math.floor(Math.random() * ((names.length - 1) + 1));
    thisLastname = lastnames[randomIndex];

    list.push(thisName + ' ' + thisLastname);
}

console.log(list);