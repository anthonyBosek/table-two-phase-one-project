const displayPokemonTable = (pokemonArray) => {
  pokemonTable.innerHTML = "";
  pokemonArray.forEach((pokemon) => {
    const pokemonItem = document.createElement("tr");
    const pokemonName = document.createElement("td");
    const pokemonImgData = document.createElement("td");
    const pokemonImg = document.createElement("img");
    const pokemonIndex = document.createElement("td");
    const pokemonType = document.createElement("td");
    const cardQty = document.createElement("td");
    const cardPrice = document.createElement("td");

    pokemonItem.addEventListener('click', () => {
      createCard(pokemon)
    })
    pokemonImg.src = pokemon.ThumbnailImage;
    pokemonImg.alt = pokemon.name;
    pokemonName.textContent = pokemon.name;
    pokemonIndex.textContent = pokemon.number;
    pokemonType.textContent = pokemon.type.join(", ");
    cardQty.textContent =
      pokemon.inventory === 0 ? "Out of Stock" : pokemon.inventory;
    cardPrice.textContent = `$${pokemon.price}`;

    if (pokemon.type[0] === "grass") {
      pokemonItem.classList.add("table-success");
    } else if (pokemon.type[0] === "fire" || pokemon.type[0] === "dragon") {
      pokemonItem.classList.add("table-danger");
    } else if (pokemon.type[0] === "water" || pokemon.type[0] === "ice") {
      pokemonItem.classList.add("table-info");
    } else if (pokemon.type[0] === "electric" || pokemon.type[0] === "normal") {
      pokemonItem.classList.add("table-warning");
    } else if (pokemon.type[0] === "poison" || pokemon.type[0] === "bug") {
      pokemonItem.classList.add("table-primary");
    } else if (pokemon.type[0] === "ground" || pokemon.type[0] === "rock") {
      pokemonItem.classList.add("table-secondary");
    }

    // hover effect
    pokemonItem.addEventListener("mouseenter", (event) => {
      pokemonItem.classList.add("scale");
      pokemonImg.classList.add("img-scale");
    });
    pokemonItem.addEventListener("mouseleave", (event) => {
      pokemonItem.classList.remove("scale");
      pokemonImg.classList.remove("img-scale");
    });

    pokemonImgData.append(pokemonImg);
    pokemonItem.append(
      pokemonIndex,
      pokemonImgData,
      pokemonName,
      pokemonType,
      cardQty,
      cardPrice
    );
    pokemonTable.append(pokemonItem);
  });
};

//eventLiseners
filterByNumber.addEventListener("click", () => {
  selectPriceFilter.selectedIndex = 0;
  selectTypeFilter.selectedIndex = 0; 
  selectQtyFilter.selectedIndex = 0;
  selectNameFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
  displayPokemonTable(data)
    })
});


selectTypeFilter.addEventListener("change", () => {
  selectQtyFilter.selectedIndex = 0;
  selectNameFilter.selectedIndex = 0;
  selectPriceFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForType = selectTypeFilter.value;
      if (selectFilterForType === "fire") {
        const typeFire = data.filter((pokemon) => pokemon.type[0] === "fire");
        displayPokemonTable(typeFire);
      } else if (selectFilterForType === "grass") {
        const typeGrass = data.filter((pokemon) => pokemon.type[0] === "grass");
        displayPokemonTable(typeGrass);
      } else if (selectFilterForType === "water") {
        const typeWater = data.filter((pokemon) => pokemon.type[0] === "water");
        displayPokemonTable(typeWater);
      } else if (selectFilterForType === "bug") {
        const typeBug = data.filter((pokemon) => pokemon.type[0] === "bug");
        displayPokemonTable(typeBug);
      } else if (selectFilterForType === "ground") {
        const typeGround = data.filter(
          (pokemon) => pokemon.type[0] === "ground"
        );
        displayPokemonTable(typeGround);
      } else if (selectFilterForType === "electric") {
        const typeElectric = data.filter(
          (pokemon) => pokemon.type[0] === "electric"
        );
        displayPokemonTable(typeElectric);
      } else if (selectFilterForType === "poison") {
        const typePoison = data.filter(
          (pokemon) => pokemon.type[0] === "poison"
        );
        displayPokemonTable(typePoison);
      } else if (selectFilterForType === "normal") {
        const typeNormal = data.filter(
          (pokemon) => pokemon.type[0] === "normal"
        );
        displayPokemonTable(typeNormal);
      } else if (selectFilterForType === "fairy") {
        const typeFairy = data.filter((pokemon) => pokemon.type[0] === "fairy");
        displayPokemonTable(typeFairy);
      } else if (selectFilterForType === "all") {
        const allTypes = data;
        displayPokemonTable(allTypes);
        selectTypeFilter.target.reset('#price-filter')
        
        
        
      }
    });
});

selectPriceFilter.addEventListener("change", () => {
  selectTypeFilter.selectedIndex = 0; 
  selectQtyFilter.selectedIndex = 0;
  selectNameFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForPrice = selectPriceFilter.value;
      if (selectFilterForPrice === "$$$") {
        const price$$$ = data.sort((a, b) => b.price - a.price);
        displayPokemonTable(price$$$);
      } else if (selectFilterForPrice === "$") {
        const price$ = data.sort((a, b) => a.price - b.price);
        displayPokemonTable(price$);

      }
    });
});

selectQtyFilter.addEventListener("change", () => {
  selectNameFilter.selectedIndex = 0;
  selectPriceFilter.selectedIndex = 0;
  selectTypeFilter.selectedIndex = 0; 
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForQty = selectQtyFilter.value;
      if (selectFilterForQty === "hi") {
        const qtyHi = data.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(qtyHi);
      } else if (selectFilterForQty === "lo") {
        const qtyLo = data.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(qtyLo);
      }
    });
});

selectNameFilter.addEventListener("change", () => {
  selectPriceFilter.selectedIndex = 0;
  selectTypeFilter.selectedIndex = 0; 
  selectQtyFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForName = selectNameFilter.value;
      if (selectFilterForName === "a-z") {
        const namesAz = data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(namesAz);
      } else if (selectFilterForName === "z-a") {
        const namesZa = data.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(namesZa);
      }
    });
});
