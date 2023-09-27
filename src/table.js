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

    pokemonItem.addEventListener("click", () => getOnePokemon(pokemon.id));

    pokemonImg.src = pokemon.ThumbnailImage;
    pokemonImg.alt = pokemon.name;
    pokemonName.textContent = pokemon.name;
    pokemonIndex.textContent = pokemon.number;
    pokemonType.textContent = pokemon.type[0];
    cardQty.textContent =
      pokemon.inventory === 0 ? "Out of Stock" : pokemon.inventory;
    if (pokemon.id === dealId) {
      cardPrice.classList.add("sale");
      cardPrice.innerHTML = `<s>$${pokemon.price}</s> $${(
        pokemon.price -
        pokemon.price * sale
      ).toFixed(2)}`;
    } else {
      cardPrice.textContent = `$${pokemon.price}`;
    }

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

cardContainer.addEventListener("click", function () {
  card.classList.add("unflip");
});


filterByNumber.addEventListener("click", () => {
  selectPriceFilter.selectedIndex = 0;
  selectTypeFilter.selectedIndex = 0;
  selectQtyFilter.selectedIndex = 0;
  selectNameFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      displayPokemonTable(data);
    });
});

selectTypeFilter.addEventListener("change", () => {
  //  selectQtyFilter.selectedIndex = 0;
  //  selectNameFilter.selectedIndex = 0;
  // selectPriceFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForType = selectTypeFilter.value;
      const selectFilterForPrice = selectPriceFilter.value;
      const selectFilterForQty = selectQtyFilter.value;
      const selectFilterForName = selectNameFilter.value;
      if (selectFilterForType === "fire" && selectFilterForPrice === "$$$") {
        const firePriceFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const firePrice$$$ = firePriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(firePrice$$$);
      } else if (selectFilterForType === "fire" && selectFilterForPrice === "$") {
        const firePriceFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const firePrice$ = firePriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(firePrice$);
      } else if (selectFilterForType === "grass" && selectFilterForPrice === "$$$") {
        const grassPriceFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassPrice$$$ = grassPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(grassPrice$$$);
      } else if (selectFilterForType === "grass" && selectFilterForPrice === "$") {
        const grassPriceFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassPrice$ = grassPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(grassPrice$);
      } else if (selectFilterForType === "water" && selectFilterForPrice === "$$$") {
        const waterPriceFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterPrice$$$ = waterPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(waterPrice$$$);
      } else if (selectFilterForType === "water" && selectFilterForPrice === "$") {
        const waterPriceFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterPrice$ = waterPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(waterPrice$);
      } else if (selectFilterForType === "bug" && selectFilterForPrice === "$$$") {
        const bugPriceFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugPrice$$$ = bugPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(bugPrice$$$);
      } else if (selectFilterForType === "grass" && selectFilterForPrice === "$") {
        const bugPriceFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugPrice$ = bugPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(bugPrice$);
      } else if (selectFilterForType === "ground" && selectFilterForPrice === "$$$") {
        const groundPriceFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundPrice$$$ = groundPriceFilter.sort((a, b) => b.price - a.price);
        displayPokemonTable(groundPrice$$$);
      } else if (selectFilterForType === "ground" && selectFilterForPrice === "$") {
        const groundPriceFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundPrice$ = groundPriceFilter.sort((a, b) => a.price - b.price);
        displayPokemonTable(groundPrice$);
      }  else if (selectFilterForType === "electric" && selectFilterForPrice === "$$$") {
          const electricPriceFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
          const electricPrice$$$ = electricPriceFilter.sort((a, b) => b.price - a.price);
          displayPokemonTable(electricPrice$$$);
        } else if (selectFilterForType === "electric" && selectFilterForPrice === "$") {
          const electricPriceFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
          const electricPrice$ = electricPriceFilter.sort((a, b) => a.price - b.price);
          displayPokemonTable(electricPrice$);
        } else if (selectFilterForType === "poison" && selectFilterForPrice === "$$$") {
          const poisonPriceFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
          const poisonPrice$$$ = poisonPriceFilter.sort((a, b) => b.price - a.price);
          displayPokemonTable(poisonPrice$$$);
        } else if (selectFilterForType === "poison" && selectFilterForPrice === "$") {
          const poisonPriceFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
          const poisonPrice$ = poisonPriceFilter.sort((a, b) => a.price - b.price);
          displayPokemonTable(poisonPrice$);
        } else if (selectFilterForType === "normal" && selectFilterForPrice === "$$$") {
          const normalPriceFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
          const normalPrice$$$ = normalPriceFilter.sort((a, b) => b.price - a.price);
          displayPokemonTable(normalPrice$$$);
        } else if (selectFilterForType === "normal" && selectFilterForPrice === "$") {
          const normalPriceFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
          const normalPrice$ = normalPriceFilter.sort((a, b) => a.price - b.price);
          displayPokemonTable(normalPrice$);
        } else if (selectFilterForType === "fairy" && selectFilterForPrice === "$$$") {
          const fairyPriceFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
          const fairyPrice$$$ = fairyPriceFilter.sort((a, b) => b.price - a.price);
          displayPokemonTable(fairyPrice$$$);
        } else if (selectFilterForType === "fairy" && selectFilterForPrice === "$") {
          const fairyPriceFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
          const fairyPrice$ = fairyPriceFilter.sort((a, b) => a.price - b.price);
          displayPokemonTable(fairyPrice$);
        } else if (selectTypeFilter.value ==='all' && selectFilterForPrice === "$$$") {
          const price$$$ = data.sort((a, b) => b.price - a.price);
          displayPokemonTable(price$$$);
        } else if (selectTypeFilter.value ==='all' && selectFilterForPrice === "$") {
          const price$ = data.sort((a, b) => a.price - b.price);
          displayPokemonTable(price$); 
        } else if (selectFilterForType ==='fire' && selectFilterForQty === "hi") {
          const fireQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
          const fireQtyHi = fireQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(fireQtyHi);
        } else if (selectFilterForType ==='fire' && selectFilterForQty === "lo") {
          const fireQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
          const fireQtylo = fireQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(fireQtylo);
        } else if (selectFilterForType ==='grass' && selectFilterForQty === "hi") {
          const grassQtyFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
          const grassQtyHi = grassQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(grassQtyHi);
        } else if (selectFilterForType ==='grass' && selectFilterForQty === "lo") {
          const grassQtyFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
          const grassQtylo = grassQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(grassQtylo);
        } else if (selectFilterForType ==='water' && selectFilterForQty === "hi") {
          const waterQtyFilter = data.filter((pokemon) => pokemon.type[0] === "water");
          const waterQtyHi = waterQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(waterQtyHi);
        } else if (selectFilterForType ==='water' && selectFilterForQty === "lo") {
          const waterQtyFilter = data.filter((pokemon) => pokemon.type[0] === "water");
          const waterQtylo = waterQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(waterQtylo);
        } else if (selectFilterForType ==='bug' && selectFilterForQty === "hi") {
          const bugQtyFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
          const bugQtyHi = bugQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(bugQtyHi);
        } else if (selectFilterForType ==='bug' && selectFilterForQty === "lo") {
          const bugQtyFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
          const bugQtylo = bugQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(bugQtylo);
        } else if (selectFilterForType ==='ground' && selectFilterForQty === "hi") {
          const groundQtyFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
          const groundQtyHi = groundQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(groundQtyHi);
        } else if (selectFilterForType ==='ground' && selectFilterForQty === "lo") {
          const groundQtyFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
          const groundQtylo = groundQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(groundQtylo);
        } else if (selectFilterForType ==='electric' && selectFilterForQty === "hi") {
          const electricQtyFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
          const electricQtyHi = electricQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(electricQtyHi);
        } else if (selectFilterForType ==='electric' && selectFilterForQty === "lo") {
          const electricQtyFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
          const electricQtylo = electricQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(electricQtylo);
        } else if (selectFilterForType ==='poison' && selectFilterForQty === "hi") {
          const poisonQtyFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
          const poisonQtyHi = poisonQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(poisonQtyHi);
        } else if (selectFilterForType ==='poison' && selectFilterForQty === "lo") {
          const poisonQtyFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
          const poisonQtylo = poisonQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(poisonQtylo);
        } else if (selectFilterForType ==='normal' && selectFilterForQty === "hi") {
          const normalQtyFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
          const normalQtyHi = normalQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(normalQtyHi);
        } else if (selectFilterForType ==='normal' && selectFilterForQty === "lo") {
          const normalQtyFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
          const normalrQtylo = normalQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(normalrQtylo);
        } else if (selectFilterForType ==='fairy' && selectFilterForQty === "hi") {
          const fairyQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
          const fairyQtyHi = fairyQtyFilter.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(fairyQtyHi);
        } else if (selectFilterForType ==='fairy' && selectFilterForQty === "lo") {
          const fairyQtyFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
          const fairyQtylo = fairyQtyFilter.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(fairyQtylo);
        } else if (selectFilterForType ==='all' && selectFilterForQty === "hi") {
          const qtyHi = data.sort((a, b) => b.inventory - a.inventory);
          displayPokemonTable(qtyHi);
        } else if (selectFilterForType ==='all' && selectFilterForQty === "lo") {
          const qtyLo = data.sort((a, b) => a.inventory - b.inventory);
          displayPokemonTable(qtyLo);
        } else if (selectTypeFilter.value ==='fire'  && selectFilterForName === "a-z") {
          const fireNameFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
          const fireNamesAz = fireNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(fireNamesAz);
        } else if (selectTypeFilter.value ==='fire'  && selectFilterForName === "z-a") {
          const fireNameFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
          const fireNamesZa = fireNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(fireNamesZa);
        } else if (selectTypeFilter.value ==='grass'  && selectFilterForName === "a-z") {
          const grassNameFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
          const grassNamesAz = grassNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(grassNamesAz);
        } else if (selectTypeFilter.value ==='grass'  && selectFilterForName === "z-a") {
          const grassNameFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
          const grassNamesZa = grassNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(grassNamesZa);
        } else if (selectTypeFilter.value ==='water'  && selectFilterForName === "a-z") {
          const waterNameFilter = data.filter((pokemon) => pokemon.type[0] === "water");
          const waterNamesAz = waterNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(waterNamesAz);
        } else if (selectTypeFilter.value ==='water'  && selectFilterForName === "z-a") {
          const waterNameFilter = data.filter((pokemon) => pokemon.type[0] === "water");
          const waterNamesZa = waterNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(waterNamesZa);
        } else if (selectTypeFilter.value ==='bug'  && selectFilterForName === "a-z") {
          const bugNameFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
          const bugNamesAz = bugNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(bugNamesAz);
        } else if (selectTypeFilter.value ==='bug'  && selectFilterForName === "z-a") {
          const bugNameFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
          const bugNamesZa = bugNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(bugNamesZa);
        } else if (selectTypeFilter.value ==='ground'  && selectFilterForName === "a-z") {
          const groundNameFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
          const groundNamesAz = groundNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(groundNamesAz);
        } else if (selectTypeFilter.value ==='ground'  && selectFilterForName === "z-a") {
          const groundNameFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
          const groundNamesZa = groundNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(groundNamesZa);
        } else if (selectTypeFilter.value ==='electirc'  && selectFilterForName === "a-z") {
          const electircNameFilter = data.filter((pokemon) => pokemon.type[0] === "electirc");
          const electircNamesAz = electircNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(electircNamesAz);
        } else if (selectTypeFilter.value ==='electirc'  && selectFilterForName === "z-a") {
          const electircNameFilter = data.filter((pokemon) => pokemon.type[0] === "electirc");
          const electircNamesZa = electircNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(electircNamesZa);
        } else if (selectTypeFilter.value ==='poison'  && selectFilterForName === "a-z") {
          const poisonNameFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
          const poisonNamesAz = poisonNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(poisonNamesAz);
        } else if (selectTypeFilter.value ==='poison'  && selectFilterForName === "z-a") {
          const poisonNameFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
          const poisonNamesZa = poisonNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(poisonNamesZa);
        } else if (selectTypeFilter.value ==='normal'  && selectFilterForName === "a-z") {
          const normalNameFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
          const normalNamesAz = normalNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(normalNamesAz);
        } else if (selectTypeFilter.value ==='normal'  && selectFilterForName === "z-a") {
          const normalNameFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
          const normalNamesZa = normalNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(normalNamesZa);
        } else if (selectTypeFilter.value ==='fairy'  && selectFilterForName === "a-z") {
          const fairyNameFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
          const fairyNamesAz = fairyNameFilter.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(fairyNamesAz);
        } else if (selectTypeFilter.value ==='fairy'  && selectFilterForName === "z-a") {
          const fairyNameFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
          const fairyNamesZa = fairyNameFilter.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(fairyNamesZa);
        } else if (selectTypeFilter.value ==='all' && selectFilterForName === "a-z") {
          const namesAz = data.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          displayPokemonTable(namesAz);
        } else if (selectTypeFilter.value ==='all' && selectFilterForName === "z-a") {
          const namesZa = data.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          displayPokemonTable(namesZa);
      } else if (selectFilterForType === "fire") {
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
      } else if (selectFilterForPrice === "$$$" && selectTypeFilter.value ==='all') {
        const price$$$ = data.sort((a, b) => b.price - a.price);
        displayPokemonTable(price$$$);
      } else if (selectFilterForPrice === "$" && selectTypeFilter.value ==='all') {
        const price$ = data.sort((a, b) => a.price - b.price);
        displayPokemonTable(price$); 
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
      } else if (selectFilterForQty === "hi" && selectTypeFilter.value ==='all') {
        const qtyHi = data.sort((a, b) => b.inventory - a.inventory);
        displayPokemonTable(qtyHi);
      } else if (selectFilterForQty === "lo" && selectTypeFilter.value ==='all') {
        const qtyLo = data.sort((a, b) => a.inventory - b.inventory);
        displayPokemonTable(qtyLo);
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
  selectQtyFilter.selectedIndex = 0;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const selectFilterForName = selectNameFilter.value;
      if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='fire') {
        const fireNameFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const fireNamesAz = fireNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(fireNamesAz);  
        } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='fire') {
        const fireNameFilter = data.filter((pokemon) => pokemon.type[0] === "fire");
        const fireNamesZa = fireNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(fireNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='grass') {
        const grassNameFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassNamesAz = grassNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(grassNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='grass') {
        const grassNameFilter = data.filter((pokemon) => pokemon.type[0] === "grass");
        const grassNamesZa = grassNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(grassNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='water') {
        const waterNameFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterNamesAz = waterNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(waterNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='water') {
        const waterNameFilter = data.filter((pokemon) => pokemon.type[0] === "water");
        const waterNamesZa = waterNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(waterNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='bug') {
        const bugNameFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const bugNamesAz = bugNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(bugNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='bug') {
        const grassNameFilter = data.filter((pokemon) => pokemon.type[0] === "bug");
        const grassNamesZa = grassNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(grassNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='ground') {
        const groundNameFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundNamesAz = groundNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(groundNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='ground') {
        const groundNameFilter = data.filter((pokemon) => pokemon.type[0] === "ground");
        const groundNamesZa = groundNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(groundNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='electric') {
        const electricNameFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
        const electricNamesAz = electricNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(electricNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='electric') {
        const electricNameFilter = data.filter((pokemon) => pokemon.type[0] === "electric");
        const electricNamesZa = electricNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(electricNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='poison') {
        const poisonNameFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
        const poisonNamesAz = poisonNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(poisonNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='poison') {
        const poisonNameFilter = data.filter((pokemon) => pokemon.type[0] === "poison");
        const poisonNamesZa = poisonNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(poisonNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='normal') {
        const normalNameFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
        const normalNamesAz = normalNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(normalNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='normal') {
        const normalNameFilter = data.filter((pokemon) => pokemon.type[0] === "normal");
        const normalNamesZa = normalNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(normalNamesZa);
      }  else if (selectFilterForName === "a-z"  && selectTypeFilter.value ==='fairy') {
        const fairyNameFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
        const fairyNamesAz = fairyNameFilter.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        displayPokemonTable(fairyNamesAz);
      } else if (selectFilterForName === "z-a"  && selectTypeFilter.value ==='fairy') {
        const fairyNameFilter = data.filter((pokemon) => pokemon.type[0] === "fairy");
        const fairyNamesZa = fairyNameFilter.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        displayPokemonTable(fairyNamesZa);
      } else if (selectFilterForName === "a-z") {
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
