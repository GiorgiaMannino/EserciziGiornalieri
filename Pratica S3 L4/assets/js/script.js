
function createNumber(index) {
    let tombola = document.querySelector('#tombola')
    
    for(let i=1; i<=76; i++) {
        let tombolaCellNode = document.createElement('div') // creo la cella per ogni numero della tombola
        tombolaCellNode.className = 'number' // applico una classe per la formattazione in css

        tombolaCellNode.setAttribute('data-number', i);  // Aggiunto l'attributo data-number per ogni cella

        let number = document.createElement('h3') // creo un titolo per il numero da inserire nella cella
        number.innerText = i; // scrivo il numero nella cella

        tombolaCellNode.appendChild(number)
        tombola.appendChild(tombolaCellNode)

    }

    
}
createNumber();




function randomNumber (){
    let clickButton = document.querySelector (" button")
    clickButton.addEventListener ("click", () => {
        
        let randomIndex = random (1, 76);
        console.log(randomIndex); // Mostra il numero casuale in console

        // Trovo la cella con il numero corrispondente
        let selectedCell = document.querySelector(`.number[data-number='${randomIndex}']`);

        // Se la cella corrispondente esiste, aggiungo la classe 'selecterNumber'
        if (selectedCell) {
            selectedCell.classList.add('selecterNumber');
        } 
    });
}

randomNumber();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}