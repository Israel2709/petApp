/*Para extraer parámetros de la url:*/

/*1: Guardamos la url en una variable*/
const url = window.location.href;

/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);

/*3: Extraemos el parámetro que deseamos*/
let petKey = params.get("petKey");
console.log(petKey);

const fetchPetByKey = async (petKey) => {
  let response = await fetch(
    `https://javascript33g-default-rtdb.firebaseio.com/pets/${petKey}/.json`
  );
  let data = await response.json();
  return data;
};

const printPetData = async (petKey) => {
  let petData = await fetchPetByKey(petKey);
  console.log(petData);
  let {
    name,
    age,
    gender,
    hasVaccines,
    sterilized,
    breed,
    specie,
    picture,
    presentation,
  } = petData;

  document.getElementById("pet-picture").setAttribute("src", picture);
  document.getElementById("pet-name").innerText = name;
  document.getElementById("pet-presentation").innerText = presentation;
  document.getElementById("pet-specie").innerText = specie;
  document.getElementById("pet-breed").innerText = breed;
  document.getElementById("pet-gender").innerText = gender;
  document.getElementById("pet-age").innerText = age;
  document.getElementById("pet-sterilized").innerText = sterilized
    ? "Sí"
    : "No";
  document.getElementById("pet-is-vaccinate").innerText = hasVaccines
    ? "Sí"
    : "No";
};

printPetData(petKey);
