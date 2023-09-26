// Search Bar Functionality
searchInput.addEventListener("focus", () => {
  searchInput.classList.toggle("focus");
});
searchInput.addEventListener("blur", () => {
  searchInput.classList.toggle("focus");
});
searchInput.addEventListener("change", (e) => {
  let searchValue = e.target.value;
  console.log(searchValue);
});
search.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Light/Dark Mode Toggle
mode.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  document
    .querySelector("#table-container > table")
    .classList.toggle("table-dark");
  const icon = e.target;
  if (icon.classList.contains("fa-moon-o")) {
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
  } else {
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
  }
});

// Modal Container Hide/Show
cart.addEventListener("click", () => {
  modalContainer.classList.toggle("hide");
  if (!Array.from(modalContainer.classList).includes("hide")) {
    displayCartData();
  }
});
modalClose.addEventListener("click", () => {
  modalContainer.classList.toggle("hide");
});
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.toggle("hide");
  }
});

const makeSeachData = (data) => {};
