let users = []

function addUser() {
    let  nodeListInput = document.querySelectorAll('div input')
    let inputValue = nodeListInput[0].value.trim();  // Leggi e pulisci l'input

    // Controllo che il valore dell'input non sia vuoto
    if (inputValue === "") {
        alert("Inserisci un task valido!");
        return;
    }

    let obj = {
        Name: inputValue,
    };
    users.push(obj);

    nodeListInput[0].value = "";

    addTask();

}

function addTask () {
    let listNode = document.querySelector('main section')
    listNode.innerHTML = ""; // Pulisci la lista per evitare duplicati
    let ol = document.createElement('ol');

    users.forEach ((ele, i) => {
        let li = document.createElement ("li")
        li.innerHTML = `${ele.Name}`
        li.style. padding ="0.5em"


        // Creo un bottone "Elimina"
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Elimina";
        deleteButton.style.marginLeft = "3em";
        deleteButton.style.padding ="0.3em"
        deleteButton.style.backgroundColor ="white"
        deleteButton.style.border ="0.5px solid rgb(151, 101, 35) "
        deleteButton.style.borderRadius ="3px"

        // Assegno un evento per rimuovere il task
        deleteButton.addEventListener('click', () => {
            users.splice(i, 1); // Rimuovi il task dall'array
            addTask(); // Aggiorna la lista visibile
    
        });

        li.appendChild(deleteButton);
        li.addEventListener('click', () => {
            li.classList.toggle('completed'); // Aggiunge o rimuove la classe 'completed'
        });


        ol.appendChild (li)
    })

    listNode.appendChild(ol)

}

// Collego il bottone "Aggiungi" alla funzione `addUser`
let addButton = document.querySelector('div button');
addButton.addEventListener('click', addUser);

