// chiamo fetch, cioè effettuo un HTTP REQUEST all'indirizzo specificato
fetch("https://striveschool-api.herokuapp.com/books")
  //implemento metodo then e catch
  .then((response) => {
    console.log(response);
    // a questo punto otteniamo dalla fetch l'oggetto di risposta come primo risultato
    // possiamo valutarne l'esito andando a leggere la proprietà ok dell'oggetto
    // essendo connessa allo status per valori compresi tra 100 e 399 avremo ok === true
    // da 400 a 599 avremo ok === false
    if (response.ok) {
      return response.json();
    }
  })

  .then((bookyArr) => {
    // qui dentro avremo l'assoluta certezza di avere il dato ottenuto dal server, nell'esatto momento in cui ci viene reso disponibile
    // possiamo gestire a questo punto il dato come vogliamo, come abbiamo sempre fatto:

    console.log(bookyArr);

    const row = document.getElementById("book-list");
    bookyArr.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");
      col.innerHTML = `  <div class="card h-100">
            <img src=${book.img} class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text"> € ${book.price}</p>
               <a href="#" class="btn btn-success btn-buy">Compra ora</a>
              <a href="#" class="btn   btn-secondary btn-delete">Scarta</a>
            </div>
          </div>`;

      row.appendChild(col);
    });

    row.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-delete")) {
        const card = event.target.closest(".col");
        if (card) {
          card.remove();
        }
      }
    });
  });
