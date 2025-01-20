//ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageUsers() {
    if (Utente1.age > Utente2.age) {
      return "Utente 1 è più vecchio di Utente 2";
    } else {
      return "Utente 2 è più vecchio di Utente 1";
    }
  }
}

const Utente1 = new User("Giorgia", "Mannino", 11, "Palermo");
const Utente2 = new User("Mario", "Rossi", 18, "Milano");

console.log(Utente1.ageUsers(Utente2));

// ESERCIZIO 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  // Verifico se due animali condividono lo stesso padrone
  static shareOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

const pets = []; // Array per conservare gli animali

document.getElementById("petForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Raccolgo i dati dal form
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // Creo una nuova istanza di Pet
  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  const petList = document.getElementById("petList");
  // Aggiungo l'animale alla lista
  const listItem = document.createElement("li");
  listItem.textContent = `${newPet.petName} ${newPet.species}, ${newPet.breed}) - Owner: ${newPet.ownerName}`;
  petList.appendChild(listItem);

  // Controllo se condivide il padrone con altri animali
  pets.forEach((pet) => {
    if (pet !== newPet && Pet.shareOwner(pet, newPet)) {
      const sharedOwnerInfo = document.createElement("p");
      sharedOwnerInfo.textContent = `${newPet.petName} e ${pet.petName} hanno lo stesso padrone: ${newPet.ownerName}`;
      document.body.appendChild(sharedOwnerInfo);
    }
  });

  // Reset del form
  e.target.reset();
});
