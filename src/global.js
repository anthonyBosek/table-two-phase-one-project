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

// Modal Variables
let totalPrice = 0;
let quantity = 0;

// temp data vars
const userCartData = {
  customerNumber: 10011001,
  name: "John Doe",
  amountDue: 110.0,
  items: {
    Pikachu: 1,
    Jigglypuff: 5,
    Ivysaur: 2,
    Oddish: 1,
  },
};

const h2 = document.createElement("h2");
const span1 = document.createElement("span");
h2.textContent = `Customer No.: `;
h2.append(span1);
const hr1 = document.createElement("hr");
const span2 = document.createElement("span");
const nameH4 = document.createElement("h4");
nameH4.textContent = `Customer Name: `;
nameH4.append(span2);
const numItemsH4 = document.createElement("h4");
const hr2 = document.createElement("hr");
const amtH4 = document.createElement("h4");
const span3 = document.createElement("span");
amtH4.textContent = `Amount Due: `;
amtH4.append(span3);
const hr3 = document.createElement("hr");
const table = document.createElement("table");
const tableHead = document.createElement("thead");
tableHead.innerHTML = `
  <tr>
    <th class="right-border width-15-pc">Qty</th>
    <th class="right-border width-50-pc">Name</th>
    <th class=" width-15-pc">Cost (Each)</th>
    <th class="left-border  width-15-pc">Cost (Total)</th>
  </tr>
`;
const tableBody = document.createElement("tbody");
table.append(tableHead, tableBody);
table.classList.add("width-100-pc");
const modalForm = document.createElement("form");
modalForm.innerHTML = `
  <button id="modal-submit" type="submit">Place Order</button>
`;
modal.append(h2, hr1, nameH4, hr2, amtH4, hr3, table, modalForm);

const displayCardOnPage = (pokeObj) => {
  console.log(pokeObj);
};

// Modal Cart
const getPokemon = (pokeId, qty) => {
  fetch(`${URL}/${pokeId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.statusText;
      }
    })
    .then((data) => {
      if (qty) {
        createTableRowData(data, qty);
      } else {
        displayCardOnPage(data);
      }
    })
    .catch((err) => alert(err));
};

const createTableRowData = (pokeObj, amt) => {
  const tr = document.createElement("tr");
  let total = (pokeObj.price * amt).toFixed(2);
  quantity += 1;
  totalPrice += Number(total);
  tr.innerHTML = `
    <td class="right-border width-15-pc">${amt}</td>
    <td class="right-border width-50-pc">${pokeObj.name}</td>
    <td class=" width-15-pc">$${pokeObj.price}</td>
    <td class="left-border  width-15-pc">$${total}</td>
`;
  tableBody.append(tr);
  span3.textContent = `$ ${totalPrice.toFixed(2)}`;
};

const displayCartData = () => {
  span1.textContent = userCartData.customerNumber;
  span2.textContent = userCartData.name;
  tableBody.innerHTML = "";
  totalPrice = 0;
  quantity = 0;
  for (let each in userCartData.items) {
    getPokemon(`${searchObj[each]}`, userCartData.items[each]);
  }
};

const placeOrder = (e) => {
  e.preventDefault();
  modalContainer.classList.toggle("hide");
  alert("Order Placed!!!");
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
  // get all inventory
  getJSON(URL)
    .then((pokemonArray) => {
      createSearchObj(pokemonArray);
      displayPokemonTable(pokemonArray);
      // getPokemon(searchObj["Jigglypuff"]); // when modal is clicked??
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  // get one pokemon for 'deal of day'
  let randomCard = Math.floor(Math.random() * 50) + 1;
  getJSON(`${URL}/${randomCard}`)
    .then((data) => createCard(data))
    .catch((err) => console.log("Error: ", err));
};

init();

modalForm.addEventListener("submit", placeOrder);
