const allRows = document.querySelectorAll("tr");



allRows.forEach((row, i) => {
  //   row.addEventListener('click', (event) => {
  //     console.log('Row clicked');
  //   });
  if (i) {
    row.addEventListener("mouseenter", (event) => {
      row.classList.add("scale");
    });
    row.addEventListener("mouseleave", (event) => {
      row.classList.remove("scale");
    });
  }
});

// --------------------------------------------------------------------------------------------



const displayPokemonTable = (pokemonArray) => {
  pokemonArray.forEach(pokemon => {
    const pokemonItem = document.createElement('tr')
    const pokemonName = document.createElement('td') 
    const pokemonImgData = document.createElement('td')
    const pokemonImg = document.createElement('img')
    const pokemonIndex = document.createElement('td')
    const pokemonType = document.createElement('td')
    const cardQty = document.createElement('td')
    const cardPrice = document.createElement('td')
    
    pokemonImg.src = pokemon.ThumbnailImage
    pokemonImg.alt = pokemon.name
    pokemonName.textContent = pokemon.name
    pokemonIndex.textContent = pokemon.number
    pokemonType.textContent = pokemon.type
    cardQty.textContent = '0'
    cardPrice.textContent = '$0.00'
    if (pokemon.type[0] === 'grass' ) {
      pokemonItem.classList.add('table-success')
    } else if (pokemon.type[0] === 'fire' || pokemon.type[0] === 'dragon') {
      pokemonItem.classList.add('table-danger')
    } else if (pokemon.type[0] === 'water' || pokemon.type[0] === 'ice') {
      pokemonItem.classList.add('table-info')
    } else if (pokemon.type[0] === 'electric') {
      pokemonItem.classList.add('table-warning')
    } else if (pokemon.type[0] === 'poison') {
      pokemonItem.classList.add('table-primary')
    } else if (pokemon.type[0] === 'ground' || pokemon.type[0] === 'rock') {
      pokemonItem.classList.add('table-secondary')
    } 
    pokemonImgData.append(pokemonImg)
    pokemonItem.append(pokemonIndex, pokemonImgData, pokemonName, pokemonType, cardQty, cardPrice)
    pokemonTable.append(pokemonItem)

  })
 
}

const fetchData = () => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
  
    displayPokemonTable(data)
  })
}
fetchData()