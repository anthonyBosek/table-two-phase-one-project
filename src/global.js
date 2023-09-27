// Global Variables

// URL Variables to different endpoints
const URL = "http://localhost:3000/inventory";
const USERS_URL = "http://localhost:3000/users";
const POKEMON_URL = "http://localhost:3000/pokemon";

// Table Variables
const pokemonTable = document.querySelector("#table-body");
const selectPriceFilter = document.querySelector("#price-filter");
const selectQtyFilter = document.querySelector("#qty-filter");
const selectNameFilter = document.querySelector("#name-filter");
const filterByNumber = document.querySelector("#number");
const selectTypeFilter = document.querySelector("#type-filter");

// Nav-Bar Variables
const tableContainer = document.getElementById("table-container");
const modalContainer = document.getElementById("modal-container");
const modalClose = document.getElementById("modal-close");
const modal = document.getElementById("modal");
const search = document.getElementById("search");
const searchInput = document.getElementById("search-input");
const dropdownContent = document.getElementById("dropdown-content");
const mode = document.getElementById("mode");
const cart = document.getElementById("cart");

// Card Variables
const card = document.getElementById("card");
const cardBanner = document.getElementById("card-banner");
const addToCart = document.getElementById("add-to-cart-form");

// Modal Variables
let totalPrice = 0;
let quantity = 0;

// Simulated User Data
const userData = {
  customerNumber: 10011001,
  name: "Ash Ketchum",
  amountDue: 0,
  items: {},
};

// Simulated Inventory Data
const searchObj = {};
const createSearchObj = (pokemonArray) => {
  pokemonArray.forEach((pokemon) => {
    searchObj[pokemon.name] = pokemon.id;
  });
};

const randomId = Math.floor(Math.random() * 50) + 1; // Create random id for Deal of the Day
const sale = 0.2; // 20% off Deal of the Day
let isDOD = true; // Deal of the Day
const getOnePokemon = (_id = randomId) => {
  getJSON(`${URL}/${_id}`)
    .then((data) => {
      const { name, price } = data;
      const salePrice = (price - price * sale).toFixed(2);
      const saleString = `
      Deal of the Day!
      <br>
      ${name} - <s>$${price}</s> <span>$${salePrice}</span>
      `;
      cardBanner.innerHTML = isDOD ? saleString : `${name} - $${price}`;
      isDOD = false;
      createCard(data);
    })
    .catch((err) => console.log("Error: ", err));
};

const getInventory = () => {
  getJSON(URL)
    .then((pokemonArray) => {
      createSearchObj(pokemonArray); // create searchObj
      displayPokemonTable(pokemonArray); // display pokemon table
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

const init = () => {
  getInventory();
  getOnePokemon();
};

init();
