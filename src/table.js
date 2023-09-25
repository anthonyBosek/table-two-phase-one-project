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
    if (pokemon.type === 'fire') {
      pokemonItem.className = 'class-danger'
      
    }
    pokemonImg.src = pokemon.ThumbnailImage
    pokemonName.textContent = pokemon.name
    pokemonIndex.textContent = pokemon.number
    pokemonType.textContent = pokemon.type
    pokemonImg.src = pokemon.ThumbnailImage
    cardQty.textContent = '0'
    cardPrice.textContent = '$0.00'
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