// Global Variables
const URL = "http://localhost:3000/inventory";
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
const mode = document.getElementById("mode");
const cart = document.getElementById("cart");

// temp data vars
const userCartData = {
  customerNumber: 0,
  name: "",
  amountDue: 0,
  items: [],
};
