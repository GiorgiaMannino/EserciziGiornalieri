// Elementi del DOM
const savedNameDiv = document.getElementById("savedName");
const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");

// Funzione per mostrare il nome salvato
function displaySavedName() {
  const name = localStorage.getItem("name");
  if (name) {
    savedNameDiv.textContent = `Nome salvato: ${name}`;
    savedNameDiv.classList.remove("d-none");
  } else {
    savedNameDiv.textContent = "";
    savedNameDiv.classList.add("d-none");
  }
}

// Evento per salvare il nome
saveButton.addEventListener("click", () => {
  const name = nameInput.value.trim(); // Rimuove spazi iniziali e finali
  if (name) {
    localStorage.setItem("name", name); // Salva il nome in localStorage
    displaySavedName(); // Aggiorna la visualizzazione
    nameInput.value = ""; // Pulisce il campo di input
  } else {
    alert("Inserisci un nome valido!"); // Mostra un messaggio se il campo è vuoto
  }
});

// Evento per rimuovere il nome
removeButton.addEventListener("click", () => {
  localStorage.removeItem("name"); // Rimuove il valore da localStorage
  displaySavedName(); // Aggiorna la visualizzazione
});

// Mostra il nome salvato al caricamento della pagina
displaySavedName();

// Elemento del DOM per mostrare il contatore
const counterDisplay = document.getElementById("counterValue");

// Recupera il valore iniziale dal sessionStorage o inizia da 0
let counter = parseInt(sessionStorage.getItem("counter")) || 0;

// Aggiorna il valore del contatore nella pagina
function updateCounterDisplay() {
  counterDisplay.textContent = counter;
}

// Incrementa il contatore ogni secondo
setInterval(() => {
  counter++; // Incrementa il contatore
  sessionStorage.setItem("counter", counter); // Salva il valore aggiornato in sessionStorage
  updateCounterDisplay(); // Mostra il nuovo valore
}, 1000);

// Mostra il valore iniziale all'apertura della pagina
updateCounterDisplay();
