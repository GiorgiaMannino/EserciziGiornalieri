/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


console.log ("ESERCIZIO 1");


function area (l1, l2){
    return (l1 * l2);
}

let risultato = area (2, 3);
console.log("L'area del rettangolo è " + risultato)




/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log ("*********");
console.log ("ESERCIZIO 2");

function crazySum (x, y) {
    if ( x !== y) {
        return ( x + y);
    }   else return (x + y) * 3;
}
let risultato2 = crazySum (3, 3);
console.log("La somma della funzione è " + risultato2);



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log ("*********");
console.log ("ESERCIZIO 3");

function crazyDiff (z) {
    let diff = Math.abs(z - 19); // Differenza assoluta
    if (z > 19) {
        return (diff * 3) ; // Moltiplica per 3 se z > 19
} 
return diff; // Altrimenti restituisci solo la differenza

}

console.log(crazyDiff(10)); // Stampa 9 (|10 - 19|)
console.log(crazyDiff(30)); 





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


console.log ("*********");
console.log ("ESERCIZIO 4");

function boundary (n) {
    if ( n >= 20 && n<=100 || n === 400) {
        return ("true")
    } else { 
        return ("false") }
} 
let risultato4 = boundary(20);
console.log("il risultato della funzione è " + risultato4);





/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


console.log ("*********");
console.log ("ESERCIZIO 5");


/* function epify (str) {
    if (str != "EPICODE") {
        return "EPICODE" + " " + str;
    } else {
        return str;
    }

}
let risultato5 = epify("Ciao");
 console.log(risultato5)

 */

const epify = function (str) {
    if(str.startsWith("EPICODE")) {
        return str
    }
    return "EPICODE " + str
}

const resultEpify = epify("Test");
console.log("Il risultato è: " + resultEpify)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


console.log ("*********");
console.log ("ESERCIZIO 6");

function check3and7 (p) {
    if ( p % 3 ===0 || p % 7 ===0) {
        return ("è multiplo di 3 o 7")
    } else { 
        return ("Non è multiplo di 3 o 7") }
} 

let risultato6 = check3and7(14);
console.log(risultato6);




/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log ("*********");
console.log ("ESERCIZIO 7");

function reverseString (str) {
    let reversed = str.split("").reverse().join("");
    return reversed;

} 
let risultato7 = reverseString("EPICODE");
console.log(risultato7);



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


 console.log ("*********");
console.log ("ESERCIZIO 8");


function upperFirst (str) {
    let arrStr = str.split(" ");
    let stringaCompleta =[]
    for (let i= 0; i< arrStr.length; i++) {
        let parola = arrStr[i]; 
       let firstLetter = parola.charAt(0).toUpperCase()
       let parolaSenzaLaPrimaLettera = parola.slice(1)
       let parolaFinale = firstLetter + parolaSenzaLaPrimaLettera
       stringaCompleta.push(parolaFinale)
    }
    
    return stringaCompleta.join(" ")
}
let risultato8 = upperFirst("ciao a tutti");
console.log(risultato8);
 
 


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log ("*********");
console.log ("ESERCIZIO 9");

function cutString (w) {
    return (w).slice (1,-1)
    
} 
let risultato9 = cutString("EPICODE");
console.log(risultato9);





/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/


function giveMeRandom (n) {
    let randomNumbers = [];
    for ( let i=0; i < n ; i++) {
        let randomNumber = Math.random() *11;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers
    
}
console.log(giveMeRandom(1));

