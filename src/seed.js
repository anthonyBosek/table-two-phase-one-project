/* Global Variables */
const pokemonUrl = "http://localhost:3000/pokemon?_limit=50";
const postPokemonUrl = "http://localhost:3000/inventory"
const weaknessArray = ["Bug", "Poison", "Fire", "Psychic", "Flying", "Ice",  "Water", "Ground", "Rock", "Electric"];

/* Function that takes an object as an argument and sends a POST request with that object to 'postPokemonUrl' */
const postPokemon = (pokeObj) => {
    fetch(postPokemonUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pokeObj)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw (response.statusText);
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => alert(err))
}

/* Function that takes an object as an argument and adds some dummy data to a copy of it, and calls 'postPokemon' and passes the updated copy as an argument */
const updatePokemon = (pokeObj) => {
    const newObj = {...pokeObj};
    newObj.inventory = Math.floor(Math.random() * 21);
    newObj.price = `$${Math.floor(Math.random() * 101).toFixed(2)}`;
    newObj.resistance = weaknessArray[Math.floor(Math.random() * weaknessArray.length)];
    newObj.resistanceAmount = Math.floor((Math.random() * 5) + 1) * 10;
    newObj.retreatCost = Math.floor(Math.random() * 4);
    newObj.hitPoints = Math.floor(Math.random() * 100) + 20;
    newObj.powerText = "This is just some random generic text intended to fill up space on the card while it displays on the page. Hopefully, no one will actually read this too closely, but if they do maybe they will not comment on it."
    newObj.abilitiesText = "Much shorter random text to fill up card space.";
    newObj.abilityStrength = (Math.floor(Math.random() * 10) + 1) * 10;
    newObj.abilityIconAmount = Math.floor(Math.random() * 4) + 1;
    newObj.flavorText = "This project was a blast and my teammates are awesome!";
    newObj.weakness = weaknessArray[Math.floor(Math.random() * weaknessArray.length)];
    postPokemon(newObj);
}

/* Function that sends a GET request for all pokemon at 'pokemonUrl' */
const getAllPokemon = () => {
    fetch(pokemonUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw (response.statusText);
        }
    })
    .then(data => {
        data = data.slice(25);
        data.forEach(item => updatePokemon(item));
    })
    .catch(err => alert(err))
}

/* Calls 'getAllPokemon' */
getAllPokemon();