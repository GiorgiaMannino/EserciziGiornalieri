// 1) Tipi primitivi principali in TypeScript
console.log("1) Tipi primitivi principali in TypeScript:", "string, number, boolean, null, undefined, any, never");
// 2) Crea tre variabili tipizzate
var myName = "Giorgia";
var age = 25;
var studyingTs = true;
console.log("2) Variabili tipizzate:", myName, age, studyingTs);
// 3) Tipizza il parametro della funzione
var greet = function (name) {
    return "Ciao " + name;
};
console.log("3) Funzione greet:", greet(myName));
// 4) Specifica il tipo di ritorno della funzione
var sum = function (a, b) {
    return a + b;
};
console.log("4) Somma:", sum(10, 5)); // Risultato della somma 10 + 5
// 5) Funzione che accetta un prezzo e restituisce il prezzo con IVA (22%)
var priceWithIva = function (num) {
    return num * 1.22;
};
var price = 20;
var priceWithTax = priceWithIva(price);
console.log("5) Prezzo con IVA:", priceWithTax); // 20 * 1.22 = 24
// 6) Funzione che concateni due stringhe e restituisca la lunghezza totale
var str1 = "Ciao";
var str2 = "a tutti";
function concatString() {
    var concatenatedString = str1.concat(" ", str2);
    return concatenatedString;
}
var result = concatString();
console.log("6) Concatenazione stringhe:", result); // "Ciao a tutti"
// 7) Cos'è un Type Union e come si scrive?
console.log("7) Type Union:", "Possibilità di dichiarare che la variabile può avere valori di più tipi, ad esempio  ->  let x: string | number;");
// 8) Crea una variabile che possa contenere un numero, null o undefined
var y = null;
console.log("8) Variabile con numero, null o undefined:", y);
console.log("9) Giorni della settimana:", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
// 10) Tipizza l'array di numeri nei due modi possibili
var numbers = [1, 2, 3];
var numbers1 = [1, 2, 3];
console.log("10) Tipizzazione array (numero[]):", numbers);
console.log("10) Tipizzazione array (Array<number>):", numbers1);
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri
function getUser() {
    return ["Giorgia", 25, "Engineer", "Italy", 30];
}
var userData = getUser();
console.log("11) Tupla:", userData);
// 12) Differenza tra type e interface
console.log("12) Differenza tra type e interface:", "TYPE -> tipo di elemento, INTERFACE -> definisce la struttura di un oggetto");
var obj2 = {
    firstname: "Giorgia",
    lastname: "Mannino",
    age: 25,
};
console.log("13) Oggetto con interfaccia:", obj2);
var user1 = {
    email: "djdd",
};
console.log("14) Interfaccia utente con email e numero opzionale:", user1);
var students = [
    { name: "Giorgia", grade: 28 },
    { name: "Marco", grade: 22 },
];
console.log("15) Array di studenti:", students);
var myVehicle = {
    make: "Ford",
    model: "Fiesta",
};
console.log("16) Oggetto Veicolo:", myVehicle);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myCar = {
    make: "Toyota",
    model: "Corolla",
    doors: 4,
};
console.log("17) Oggetto Auto:", myCar);
// 18) Cosa sono i Generics in TypeScript?
console.log("18) I Generics permettono di scrivere funzioni o classi che possono lavorare con diversi tipi di dati, mantenendo la tipizzazione.");
// 19) È possibile avere più tipi generici in un'interfaccia?
console.log("19) Sì, è possibile definire più parametri generici in un'interfaccia o funzione.");
var response = {
    success: true,
    data: "Operazione riuscita",
};
console.log("20) Risposta API:", response);
