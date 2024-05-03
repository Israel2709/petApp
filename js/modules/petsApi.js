const PETS_BASE_URL = "https://javascript33g-default-rtdb.firebaseio.com/pets";

const createPet = async (petObject) => {
  let response = await fetch(`${PETS_BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(petObject),
  });
  let data = await response.json();
  return data;
};

const fetchPetByKey = async (petKey) => {
  let response = await fetch(`${PETS_BASE_URL}/${petKey}/.json`);
  let data = await response.json();
  return data;
};

const fetchAllPets = async () => {
  let response = await fetch(`${PETS_BASE_URL}/.json`);
  let data = await response.json();
  let keys = Object.keys(data);
  let petsArray = keys.map((key) => ({ ...data[key], key }));
  return petsArray;
};

export { createPet, fetchPetByKey, fetchAllPets };
