const createPetCard = (petObject) => {
  let { name, breed, age, picture, specie, gender } = petObject;
  let cardHtml = `
    <div class="col">
        <div class="card pet-card p-0 overflow-hidden">
        <div class="row g-0">
            <div class="col-md-4">
            <img
                src="${picture}"
                class="pet-card__picture"
                alt="..."
            />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <ul class="list-group">
                <li class="list-group-item">Especie: ${specie}</li>
                <li class="list-group-item">Raza: ${breed}</li>
                <li class="list-group-item">Género: ${gender}</li>
                <li class="list-group-item">Edad: ${age} años</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
  `;
  return cardHtml;
};

const fetchAllPets = async () => {
  let response = await fetch(
    `https://javascript33g-default-rtdb.firebaseio.com/pets/.json`
  );
  let data = await response.json();
  let keys = Object.keys(data);
  let petsArray = keys.map((key) => ({ ...data[key], key }));
  return petsArray;
};

const printPets = (petsArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  /* la siguiente línea debe ser reemplazada por el ciclo while que borra todos los childs de un elemento */
  wrapper.innerHTML = "";

  petsArray.forEach((pet) => {
    let currentContent = wrapper.innerHTML;
    wrapper.innerHTML = currentContent + createPetCard(pet);
  });
};

const printAllPets = async () => {
  let petsArray = await fetchAllPets();
  printPets(petsArray, "pets-wrapper");
};

printAllPets();
