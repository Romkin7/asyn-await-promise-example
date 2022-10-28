const axios = require("axios");

const getStarWarsPeople = new Promise((resolve, reject) => {
  const starwarsHeroes = axios.get("https://swapi.dev/api/people/1");
  if (!starwarsHeroes) {
    reject({ message: "Not found" });
  } else {
    resolve(starwarsHeroes);
  }
});

getStarWarsPeople.then((starwarsHeroes) => {
  console.log("people are: ", starwarsHeroes);
});
