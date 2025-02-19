// 1) Tipi primitivi principali in TypeScript
console.log("1) Tipi primitivi principali in TypeScript:", "string, number, boolean, null, undefined, any, never");

// 2) Crea tre variabili tipizzate
let myName: string = "Giorgia";
let age: number = 25;
let studyingTs: boolean = true;
console.log("2) Variabili tipizzate:", myName, age, studyingTs);

// 3) Tipizza il parametro della funzione
const greet = (name: string): string => {
  return "Ciao " + name;
};
console.log("3) Funzione greet:", greet(myName));

// 4) Specifica il tipo di ritorno della funzione
const sum = (a: number, b: number) => {
  return a + b;
};
console.log("4) Somma:", sum(10, 5)); // Risultato della somma 10 + 5

// 5) Funzione che accetta un prezzo e restituisce il prezzo con IVA (22%)
const priceWithIva = (num: number): number => {
  return num * 1.22;
};
const price = 20;
const priceWithTax = priceWithIva(price);
console.log("5) Prezzo con IVA:", priceWithTax); // 20 * 1.22 = 24

// 6) Funzione che concateni due stringhe e restituisca la lunghezza totale
const str1: string = "Ciao";
const str2: string = "a tutti";
function concatString(): string {
  const concatenatedString = str1.concat(" ", str2);
  return concatenatedString;
}
const result = concatString();
console.log("6) Concatenazione stringhe:", result); // "Ciao a tutti"

// 7) Cos'è un Type Union e come si scrive?
console.log(
  "7) Type Union:",
  "Possibilità di dichiarare che la variabile può avere valori di più tipi, ad esempio  ->  let x: string | number;"
);

// 8) Crea una variabile che possa contenere un numero, null o undefined
const y: number | null | undefined = null;
console.log("8) Variabile con numero, null o undefined:", y);

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali
type days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
console.log("9) Giorni della settimana:", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

// 10) Tipizza l'array di numeri nei due modi possibili
const numbers: number[] = [1, 2, 3];
const numbers1: Array<number> = [1, 2, 3];
console.log("10) Tipizzazione array (numero[]):", numbers);
console.log("10) Tipizzazione array (Array<number>):", numbers1);

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri
function getUser(): [string, number, string, string, number] {
  return ["Giorgia", 25, "Engineer", "Italy", 30];
}
const userData = getUser();
console.log("11) Tupla:", userData);

// 12) Differenza tra type e interface
console.log(
  "12) Differenza tra type e interface:",
  "TYPE -> tipo di elemento, INTERFACE -> definisce la struttura di un oggetto"
);

// 13) Definisci un'interfaccia per un oggetto con proprietà "firstname", "lastname", e "age"
interface MyObj {
  firstname: string;
  lastname: string;
  age: number;
}
const obj2: MyObj = {
  firstname: "Giorgia",
  lastname: "Mannino",
  age: 25,
};
console.log("13) Oggetto con interfaccia:", obj2);

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale
interface User {
  email: string;
  number?: number;
}
const user1: User = {
  email: "djdd",
};
console.log("14) Interfaccia utente con email e numero opzionale:", user1);

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Student {
  name: string;
  grade: number;
}
const students: Student[] = [
  { name: "Giorgia", grade: 28 },
  { name: "Marco", grade: 22 },
];
console.log("15) Array di studenti:", students);

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  make: string;
  model: string;
}

interface Auto extends Veicolo {
  doors: number;
}

const myVehicle: Veicolo = {
  make: "Ford",
  model: "Fiesta",
};

console.log("16) Oggetto Veicolo:", myVehicle);

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const myCar: Auto = {
  make: "Toyota",
  model: "Corolla",
  doors: 4,
};

console.log("17) Oggetto Auto:", myCar);

// 18) Cosa sono i Generics in TypeScript?
console.log(
  "18) I Generics permettono di scrivere funzioni o classi che possono lavorare con diversi tipi di dati, mantenendo la tipizzazione."
);

// 19) È possibile avere più tipi generici in un'interfaccia?
console.log("19) Sì, è possibile definire più parametri generici in un'interfaccia o funzione.");

// 20) Crea un'interfaccia generica per una risposta API.
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const response: ApiResponse<string> = {
  success: true,
  data: "Operazione riuscita",
};

console.log("20) Risposta API:", response);
