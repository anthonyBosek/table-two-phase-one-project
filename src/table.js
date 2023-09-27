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
    pokemonType.textContent = pokemon.type[0];
    cardQty.textContent =
      pokemon.inventory === 0 ? "Out of Stock" : pokemon.inventory;
    cardPrice.textContent = `$${pokemon.price}`;

    if (pokemon.type[0] === "grass") {
      pokemonItem.classList.add("table-success");
    } else if (pokemon.type[0] === "fire" || pokemon.type[0] === "dragon") {
      pokemonItem.classList.add("table-danger");
    } else if (pokemon.type[0] === "water" || pokemon.type[0] === "ice") {
      pokemonItem.classList.add("table-info");
    } else if (pokemon.type[0] === "electric") {
      pokemonItem.classList.add("table-warning");
    } else if (pokemon.type[0] === "poison") {
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

 card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped')
  });



   


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
  //selectTypeFilter.selectedIndex = 0; 
  selectQtyFilter.selectedIndex = 0;
  selectNameFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForPrice = selectPriceFilter.value;
       
      if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='fire') {
        const firePriceFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const firePrice$$$ = firePriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(firePrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='fire') {
        const firePriceFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const firePrice$ = firePriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(firePrice$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='grass') {
        const grassPriceFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassPrice$$$ = grassPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(grassPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='grass') {
        const grassPriceFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassPrice$$$ = grassPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(grassPrice$$$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='water') {
        const waterPriceFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterPrice$$$ = waterPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(waterPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='water') {
        const waterPriceFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterPrice$$$ = waterPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(waterPrice$$$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='bug') {
        const bugPriceFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugPrice$$$ = bugPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(bugPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='bug') {
        const bugPriceFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugPrice$$$ = bugPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(bugPrice$$$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='ground') {
        const groundPriceFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundPrice$$$ = groundPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(groundPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='ground') {
        const groundPriceFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundPrice$ = groundPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(groundPrice$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='electric') {
        const electricPriceFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
        const electricPrice$$$ = electricPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(electricPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='electric') {
        const electricPriceFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
        const electricPrice$ = electricPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(electricPrice$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='poison') {
        const poisonPriceFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
        const poisonPrice$$$ = poisonPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(poisonPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='poison') {
        const poisonPriceFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
        const poisonPrice$ = poisonPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(poisonPrice$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='normal') {
        const normalPriceFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
        const normalPrice$$$ = normalPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(normalPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='normal') {
        const normalPriceFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
        const normalPrice$ = normalPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(normalPrice$);
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='fairy') {
        const fairyPriceFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
        const fairyPrice$$$ = fairyPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(fairyPrice$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='fairy') {
        const fairyPriceFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
        const fairyPrice$ = fairyPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(fairyPrice$);
      } else if (selectFilterForPrice === "$$$") {
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
  //selectTypeFilter.selectedIndex = 0; 
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForQty = selectQtyFilter.value;
      if (selectFilterForQty === "hi" && selectTypeFilter.value ==='fire') {
        const fireQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const fireQtyHi = fireQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(fireQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='fire') {
        const firePriceFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const fireQtyLo = firePriceFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(fireQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='grass') {
        const grassQtyFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassQtyHi = grassQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(grassQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='grass') {
        const grassQtyFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassQtyLo = grassQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(grassQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='water') {
        const waterQtyFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterQtyHi = waterQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(waterQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='water') {
        const waterQtyFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterQtyLo = waterQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(waterQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='bug') {
        const bugQtyFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugQtyHi = bugQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(bugQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='bug') {
        const bugQtyFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugQtyLo = bugQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(bugQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='ground') {
        const groundQtyFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundQtyHi = groundQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(groundQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='ground') {
        const groundQtyFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundQtyLo = groundQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(groundQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='electric') {
        const electricQtyFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
        const electricQtyHi = electricQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(electricQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='electric') {
        const electricQtyFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
        const electricQtyLo = electricQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(electricQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='poison') {
        const poisonQtyFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
        const poisonQtyHi = poisonQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(poisonQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='poison') {
        const poisonQtyFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
        const poisonQtyLo = poisonQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(poisonQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='normal') {
        const normalQtyFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
        const normalQtyHi = normalQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(normalQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='normal') {
        const normalQtyFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
        const normalQtyLo = normalQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(normalQtyLo);
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='fairy') {
        const fairyQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
        const fairyQtyHi = fairyQtyFilter.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(fairyQtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='fairy') {
        const fairyQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
        const fairyQtyLo = fairyQtyFilter.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(fairyQtyLo);
     } else if (selectFilterForQty === "hi") {
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
