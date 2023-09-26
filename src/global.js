// Global Variables
const URL = "http://localhost:3000/inventory";
const USERS_URL = "http://localhost:3000/users";
const POKEMON_URL = "http://localhost:3000/pokemon";
// Table Variables
const pokemonTable = document.querySelector("#table-body");
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
// Modal Variables
const h2 = document.createElement("h2");
const nameH4 = document.createElement("h4");
const table = document.createElement("table");
const amtH4 = document.createElement("h4");
const numItemsH4 = document.createElement("h4");

// temp data vars
const userCartData = {
  customerNumber: 10011001,
  name: "John Doe",
  amountDue: 110.0,
  items: {
    Pikachu: 1,
    Ivysaur: 2,
    Oddish: 1,
  },
};

// Modal Cart
const createTableRowData = () => {};

const createTable = () => {
  const tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <tr>
      <th class="right-border">Qty</th>
      <th class="right-border">Name</th>
      <th>Cost (Each)</th>
      <th class="left-border">Cost (Total)</th>
    </tr>
  `;
  table.append(tableHead);
  return table;
};

const displayCartData = () => {
  console.log("cart", userCartData);
  h2.textContent = `Customer No.: ${userCartData.customerNumber} `;
  const hr1 = document.createElement("hr");
  const nameH4 = document.createElement("h4");
  nameH4.textContent = `Customer Name: ${userCartData.name}`;
  const hr2 = document.createElement("hr");
  amtH4.textContent = `Amount Due: $${userCartData.amountDue}`;
  const hr3 = document.createElement("hr");
  const itemsTable = createTable();
  modal.append(h2, hr1, nameH4, hr2, amtH4, hr3, itemsTable);
};

// Search Bar
const searchObj = {};
const createSearchObj = (pokemonArray) => {
  pokemonArray.forEach((pokemon) => {
    searchObj[pokemon.name] = pokemon.id;
  });
};

// Initial Fetch for All Pokemon Inventory
const init = () => {
  getJSON(URL)
    .then((pokemonArray) => {
      createSearchObj(pokemonArray);
      displayPokemonTable(pokemonArray);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

init();
