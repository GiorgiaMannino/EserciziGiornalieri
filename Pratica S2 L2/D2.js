/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log ("ESERCIZIO 1");

const num1 = 7;
const num2 = 12

if (num1 > num2) {
  console.log ("7 è più grande di 12");
} else  {
  console.log ("12 è più grande di 7");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log ("*********");
console.log ("ESERCIZIO 2");
if (num1 !== 5) {
  console.log ("not equal");
} 


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log ("*********");
console.log ("ESERCIZIO 3");
if (num1 % 5 === 0) {
  console.log("Divisibile per 5");
} else {
  console.log("Non divisibile per 5");
}




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log ("*********");
console.log ("ESERCIZIO 4");

const num3 = 9;
const num4 = 2
if (num3 === 8 || num4 === 8) {
  console.log("Uno dei due numeri è 8");
} else if(num3+num4 ===8 || num3-num4 ===8  || num4-num3 ===8 ) {
  console.log("Somma o differenza è uguale a 8");
} else {
  console.log("Nessuno dei due numeri è 8 e né la loro somma né la loro differenza è uguale a 8 ");
}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log ("*********");
console.log ("ESERCIZIO 5");

let totalShoppingCart = 50;
if (totalShoppingCart > 50) {
  console.log ("Hai diritto alla spedizione gratuita");
} else  {
  console.log ("Spedizione pari a 10 euro");
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log ("*********");
console.log ("ESERCIZIO 6");

let sconto = totalShoppingCart * 20 / 100;
let scontofinale = totalShoppingCart - sconto;
console.log (scontofinale);

if (scontofinale > 50) {
  console.log ("Hai diritto alla spedizione gratuita");
} else  {
  console.log ("Spedizione pari a 10 euro");
}




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log ("*********");
console.log ("ESERCIZIO 7");

let a =72;
let b =2;
let c =11;
if (b<c && b<a) {
  console.log("2, 11, 72")
} else if (c>b && c<a) {
  console.log("2, 11, 72")
} else if (a>c && a>b) {
  console.log ("2, 11, 72");
} 




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log ("*********");
console.log ("ESERCIZIO 8");

console.log (typeof num1);



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log ("*********");
console.log ("ESERCIZIO 9");

if (num1 % 2 === 0) {
  console.log("Numero pari");
} else {
  console.log("Numero dispari");
}




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log ("*********");
console.log ("ESERCIZIO 10");

let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 7");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log ("*********");
console.log ("ESERCIZIO 11");

me.city="Toronto"
console.log(me);




/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log ("*********");
console.log ("ESERCIZIO 12");

delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log ("*********");
console.log ("ESERCIZIO 13");

me.skills.pop();
console.log(me);



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log ("*********");
console.log ("ESERCIZIO 14");

let myArr =[];
console.log (myArr);
myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (myArr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log ("*********");
console.log ("ESERCIZIO 15");

myArr.splice(9, 1, 100);
console.log (myArr);
