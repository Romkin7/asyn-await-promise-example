const axios = require('axios');

(async() => {
    const starwarsHeroes = await axios.get("https://swapi.dev/api/people/1");
    console.log("people are: ", starwarsHeroes.data);
})();
