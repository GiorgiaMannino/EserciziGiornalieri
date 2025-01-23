const urlParams = new URLSearchParams(window.location.search);
const photoId = urlParams.get("id");

fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
  method: "GET",
  headers: {
    Authorization: "AkaofJbCbzSMXJLkWfW8oNCMZjS7pkJnalIEHeaNAe9Y6qsYaOujb286",
  },
})
  .then((response) => response.json())
  .then((photo) => {
    const photoDetail = document.getElementById("photo-detail");

    // Aggiungi il contenuto dinamicamente
    photoDetail.innerHTML = `
        <img src="${photo.src.original}" class="card-img-top" alt="${photo.alt}">
        <div class="card-body">
          <h3 class="card-title">Photographer: <a href="${photo.photographer_url}" target="_blank">${photo.photographer}</a></h3>
          <p class="card-text">${photo.alt}</p>
        </div>
      `;
  })
  .catch((err) => console.error(err));
