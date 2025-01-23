const loadImagesButton = document.getElementById("loadImage");
const loadSecondary = document.getElementById("loadSecondary");
const row = document.getElementById("photo-list");

loadImagesButton.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
    method: "GET",
    headers: {
      Authorization: "AkaofJbCbzSMXJLkWfW8oNCMZjS7pkJnalIEHeaNAe9Y6qsYaOujb286",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella chiamata");
      }
    })

    .then((photosObj) => {
      console.log(photosObj.photos);

      row.innerHTML = ""; // Pulisco il contenitore prima di aggiungere nuove immagini
      photosObj.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `    
            <div class="card mb-4 shadow-sm">
      <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.alt}" data-id="${photo.id}" />

              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.alt}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-secondary btn-view" data-id="${photo.id}">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btn-hide">Hide</button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>`;
        row.appendChild(col);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

//  listener per il click del secondo  bottone
loadSecondary.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=tigers", {
    method: "GET",
    headers: {
      Authorization: "AkaofJbCbzSMXJLkWfW8oNCMZjS7pkJnalIEHeaNAe9Y6qsYaOujb286",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella chiamata");
      }
    })

    .then((photosObj) => {
      console.log(photosObj.photos);

      row.innerHTML = ""; // Pulisco il contenitore prima di aggiungere nuove immagini
      photosObj.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `    
            <div class="card mb-4 shadow-sm">
     <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.alt}" data-id="${photo.id}" />

              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.alt}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary btn-view" data-id="${photo.id}">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btn-hide">Hide</button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>`;
        row.appendChild(col);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

row.addEventListener("click", (event) => {
  // Se l'utente clicca sul bottone "View"
  if (event.target.classList.contains("btn-view")) {
    const photoId = event.target.getAttribute("data-id");
    window.location.href = `detail.html?id=${photoId}`;
  }

  // Se l'utente clicca sull'immagine
  if (event.target.tagName === "IMG" && event.target.getAttribute("data-id")) {
    const photoId = event.target.getAttribute("data-id");
    window.location.href = `detail.html?id=${photoId}`;
  }

  // Se l'utente clicca sul bottone "Hide"
  if (event.target.classList.contains("btn-hide")) {
    const card = event.target.closest(".col-md-4");
    if (card) {
      card.remove();
    }
  }
});

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim(); // Prendi il valore dell'input
  if (!query) {
    alert("Please enter a search term!");
    return;
  }

  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: "AkaofJbCbzSMXJLkWfW8oNCMZjS7pkJnalIEHeaNAe9Y6qsYaOujb286",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella chiamata");
      }
    })
    .then((photosObj) => {
      console.log(photosObj.photos);

      row.innerHTML = ""; // Pulisco il contenitore prima di aggiungere nuove immagini
      photosObj.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `    
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.alt}" data-id="${photo.id}" />
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.alt}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
               <button type="button" class="btn btn-sm btn-outline-secondary btn-view" data-id="${photo.id}">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btn-hide">Hide</button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>`;
        row.appendChild(col);
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
