// Global Variables
const URL = "http://localhost:3000/inventory";
const USERS_URL = "http://localhost:3000/users";
const POKEMON_URL = "http://localhost:3000/pokemon";
// Table Variables
// Table Variables
const pokemonTable = document.querySelector("#table-body");
const pokemonItem = document.createElement("tr");
const pokemonName = document.createElement("td");
const pokemonImgData = document.createElement("td");
const pokemonImg = document.createElement("img");
const pokemonIndex = document.createElement("td");
const pokemonType = document.createElement("td");
const cardQty = document.createElement("td");
const cardPrice = document.createElement("td");
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
amtH4.textContent = `Amount Due: `
amtH4.append(span3);
const hr3 = document.createElement("hr");
const table = document.createElement("table")
const tableHead = document.createElement("thead");
tableHead.innerHTML = `
  <tr>
    <th class="right-border width-15-pc">Qty</th>
    <th class="right-border width-50-pc">Name</th>
    <th class=" width-15-pc">Cost (Each)</th>
    <th class="left-border  width-15-pc">Cost (Total)</th>
  </tr>
`
const tableBody = document.createElement("tbody");
table.append(tableHead, tableBody);
table.classList.add("width-100-pc");
modal.append(h2, hr1, nameH4, hr2, amtH4, hr3, table);
let totalPrice = 0;
let quantity = 0;


// Modal Cart
const getPokemon = (pokeId, qty) => {

  fetch(`${URL}/${pokeId}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw (response.statusText);
    }
  })
  .then(data => {
    createTableRowData(data, qty);
  })
  .catch(err => alert(err))

}

const createTableRowData = (pokeObj, amt) => {
  console.log(pokeObj, amt);
  const tr = document.createElement("tr");
  let total = (pokeObj.price * amt).toFixed(2)
  quantity += 1;
  totalPrice += Number(total);
  tr.innerHTML = `
    <td class="right-border width-15-pc">${amt}</td>
    <td class="right-border width-50-pc">${pokeObj.name}</td>
    <td class=" width-15-pc">$${pokeObj.price}</td>
    <td class="left-border  width-15-pc">$${total}</td>
`
tableBody.append(tr);
span3.textContent = `$ ${totalPrice.toFixed(2)}`;
}

const displayCartData = () => {
  
  span1.textContent = userCartData.customerNumber;
  span2.textContent = userCartData.name
  tableBody.innerHTML = "";
  totalPrice = 0;
  quantity = 0;
  for (let each in userCartData.items) {
    getPokemon(`${searchObj[each]}`, userCartData.items[each])
  }
  
}

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
