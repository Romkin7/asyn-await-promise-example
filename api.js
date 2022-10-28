const axios = require('axios');

const starwarsHeroes = axios.get("https://swapi.dev/api/people/1");
console.log('people are: ', starwarsHeroes);
