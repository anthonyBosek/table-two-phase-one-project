// Populate Modal Content
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

// Dynamically Populate Modal Content card data
const createTableRowData = (pokeObj, amt) => {
  const tr = document.createElement("tr");
  let total = (pokeObj.price * amt).toFixed(2);
  quantity += 1;
  totalPrice += Number(total);
  tr.innerHTML = `
        <input type="number" name="modal-card-qty" id="modal-card-qty" value="${amt}">
        <td class="right-border width-50-pc">${pokeObj.name}</td>
        <td class=" width-15-pc">$${pokeObj.price}</td>
        <td class="left-border  width-15-pc">$${total}</td>
    `;
  tableBody.append(tr);
  span3.textContent = `$ ${totalPrice.toFixed(2)}`;
};

// Grab Current pokemon data & add to table
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
        alert("No card in inventory.");
        // displayCardOnPage(data);
      }
    })
    .catch((err) => alert(err));
};

// Display Cart Data when cart icon is clicked
const displayCartData = () => {
  span1.textContent = userData.customerNumber;
  span2.textContent = userData.name;
  tableBody.innerHTML = "";
  totalPrice = 0;
  quantity = 0;
  for (let each in userData.items) {
    getPokemon(`${searchObj[each]}`, userData.items[each]);
  }
};

// Mock order placement
const placeOrder = (e) => {
  e.preventDefault();
  modalContainer.classList.toggle("hide");
  alert("Order Placed!!!");
};

// const addCardToCart = (e) => {
//   e.preventDefault();
//   const qty = parseInt(e.target["card-qty"].value);
//   const poke = document.getElementById("card-title").innerText;
//   if (!userData.items[poke]) {
//     userData.items[poke] = qty;
//   } else {
//     userData.items[poke] += qty;
//   }
//   addToCart.reset();
// };

modalForm.addEventListener("submit", placeOrder);
