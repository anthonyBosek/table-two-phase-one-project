// Populate Modal Content
const div = document.createElement("div");
const h2 = document.createElement("h2");
const span1 = document.createElement("span");
h2.textContent = `Customer No: `;
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
const modalTable = document.createElement("div");
const table = document.createElement("table");
const tableHead = document.createElement("thead");
let cardAmounts = {};
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
  <input id="modal-submit" type="submit" value="Place Order" >
`;
modalTable.append(table);
modal.append(h2, hr1, nameH4, hr2, amtH4, hr3, modalTable);
modal.append(modalForm);
// Dynamically Populate Modal Content card data
const createTableRowData = (pokeObj, amt) => {
  if (pokeObj.id === dealId) {
    pokeObj.price = (pokeObj.price - pokeObj.price * sale).toFixed(2);
  }
  const tr = document.createElement("tr");
  let total = (pokeObj.price * amt).toFixed(2);
  quantity += 1;
  totalPrice += Number(total);
  const input = document.createElement("input");
  input.type = "number";
  input.name = "modal-card-qty";
  input.classList.add("modal-card-qty");
  input.value = amt;
  input.max = pokeObj.inventory;
  input.min = 0;
  cardAmounts[pokeObj.name] = amt;
  input.addEventListener("change", (e) => {
    if (Number(e.target.value) > Number(input.max)) {
      e.target.value = input.max;
      alert(`Only ${input.max} of this card in stock.`)
    } else if (Number(e.target.value) < Number(input.min)) {   
      e.target.value = input.min;
    } 
      updateOrder(e);
  });
  tr.innerHTML = `
        <td class="right-border width-50-pc">${pokeObj.name}</td>
        <td class="eachPrice width-15-pc">$${pokeObj.price}</td>
        <td class="left-border totalPrice  width-15-pc">$${total}</td>
    `;
  tr.insertAdjacentElement("afterbegin", input);
  tableBody.append(tr);
  span3.textContent = `$${totalPrice.toFixed(2)}`;
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
        const arr = Array.from(document.querySelectorAll("#modal tr"));
        if (arr.length === 1) {
          span3.textContent = "";
        }
      }
    })
    .catch((err) => alert(err));
};

/* Display Cart Data in modal when cart icon is clicked */
const displayCartData = () => {
  /* Reset the info in the modal */
  span1.textContent = userData.customerNumber;
  span2.textContent = userData.name;
  tableBody.innerHTML = "";
  totalPrice = 0;
  quantity = 0;
  /* Iterate through the 'items' property of 'userData' to display a table row in the modal for card name in the user's cart */
  for (let each in userData.items) {
    getPokemon(`${searchObj[each]}`, userData.items[each][0]);
  }
};

// Update Inventory when order is placed
const patchInventory = (obj) => {
  for (let key in obj) {
    let _id = searchObj[key];
    let qty = obj[key][1] - obj[key][0];
    patchJSON(`${URL}/${_id}`, { inventory: qty })
      .then((data) => {
        getInventory()
        if (data.id === lastCardDisplayed.id) {
          lastCardDisplayed.inventory = qty;
          createCard(lastCardDisplayed)
        } 
      })
      .catch((err) => console.log("Error: ", err));
  }
};

// Mock order placement
const placeOrder = (e) => {
  e.preventDefault();
  let { items, amountDue, name } = userData;
  const isEmpty = Object.keys(items).length === 0;
  if (isEmpty) {
    alert("Please add items to your cart");
  } else {
    patchInventory(items);
    modalContainer.classList.toggle("hide");
    alert(
      `Thank you ${name} your order for $${totalPrice} was placed!`
    );
    amountDue = 0;
    totalPrice = 0;
    userData.items = {};
    tableBody.innerHTML = "";
    span3.textContent = ""
    cardAmounts = {};
  }
};

/* Function that will grab the name and the quantity from the table row of the target of the event that called the function, adjust the quantity in 'userData', and update the info in the modal */
const updateOrder = (e) => {
  const modalRow = e.target.parentElement;
  const nameTD = modalRow.querySelector("td").textContent;
  const qtyInput = Number(modalRow.querySelector("input").value);
  const eachPrice = Number(modalRow.querySelector(".eachPrice").textContent.split("$")[1]);
  const trTotalPrice = modalRow.querySelector(".totalPrice");
  const newAmt = qtyInput - cardAmounts[nameTD];
  const newTotalPrice = (Number(span3.textContent.split("$")[1]) + Number(newAmt * eachPrice)).toFixed(2); 
  userData.amountDue = newTotalPrice;
  totalPrice = newTotalPrice;
  userData.items[nameTD] = [qtyInput, userData.items[nameTD][1]];
  trTotalPrice.textContent = `$${(qtyInput * eachPrice).toFixed(2)}`;
  span3.textContent = `$${newTotalPrice}`;
  cardAmounts[nameTD] = qtyInput;
};

modalForm.addEventListener("submit", placeOrder);
