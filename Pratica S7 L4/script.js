const loadImagesButton = document.getElementById("loadImage");

loadImagesButton.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
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

      const row = document.getElementById("photo-list");
      row.innerHTML = ""; // Pulisco il contenitore prima di aggiungere nuove immagini
      photosObj.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `    
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.alt}" />
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.alt}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
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

const loadSecondary = document.getElementById("loadSecondary");

//  listener per il click del secondo  bottone
loadSecondary.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=tigers", {
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

      const row = document.getElementById("photo-list");
      row.innerHTML = ""; // Pulisco il contenitore prima di aggiungere nuove immagini
      photosObj.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `    
            <div class="card mb-4 shadow-sm">
              <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.alt}" />
              <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">${photo.alt}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary btn-hide">Hide</button>
                  </div>
                  <small class="text-muted">9 mins</small>
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
  if (event.target.classList.contains("btn-hide")) {
    const card = event.target.closest(".col");
    if (card) {
      card.remove();
    }
  }
});
