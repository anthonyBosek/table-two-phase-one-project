// Search Bar Functionality
const createDropdown = (data) => {
  // alphabetize data
  data.sort((a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
  });
  // clear dropdown
  dropdownContent.innerHTML = "";
  // create dropdown
  if (data.length) {
    data.forEach(({ name, id }) => {
      const li = document.createElement("li");
      li.id = `li-${id}`;
      li.textContent = name;
      li.addEventListener("click", () => {
        getOnePokemon(id);
        dropdownContent.classList.remove("show");
        search.reset();
      });
      dropdownContent.append(li);
    });
    dropdownContent.classList.add("show");
  } else {
    dropdownContent.classList.remove("show");
  }
};

// Seach functionality with regex
const searchData = (str) => {
  const regex = new RegExp(`^${str}`, "gi");
  let matches = [];
  if (str.length === 0) {
    dropdownContent.classList.remove("show");
    matches = [];
    return;
  }
  Object.entries(searchObj).forEach(([key, value]) => {
    if (key.match(regex)) {
      matches.push({ name: key, id: value });
    }
  });
  createDropdown(matches);
};
searchInput.addEventListener("focus", () => {
  searchInput.classList.toggle("focus");
});
searchInput.addEventListener("blur", () => {
  searchInput.classList.toggle("focus");
});
searchInput.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchData(searchValue);
});
search.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Light/Dark Mode Toggle
mode.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  document.querySelector("#box > table").classList.toggle("table-dark");
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
