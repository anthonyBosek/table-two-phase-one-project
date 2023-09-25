// Search Bar Functionality

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
});
modalClose.addEventListener("click", () => {
  modalContainer.classList.toggle("hide");
});
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.toggle("hide");
  }
});
