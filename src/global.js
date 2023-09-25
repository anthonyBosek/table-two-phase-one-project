// Global Variables
const tableContainer = document.getElementById("table-container");
const modalContainer = document.getElementById("modal-container");
const modalClose = document.getElementById("modal-close");
const modal = document.getElementById("modal");
const search = document.getElementById("search");
const mode = document.getElementById("mode");
const cart = document.getElementById("cart");

// temp data vars
const userCartData = {
  customerNumber: 0,
  name: "",
  amountDue: 0,
  items: [],
};

// const nameSearchData = {
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
//   pokeName: "pokeId",
// };
