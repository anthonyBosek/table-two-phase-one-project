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
    pokemonTable.innerHTML = ''
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
    cardQty.textContent = pokemon.inventory
    cardPrice.textContent = `$${pokemon.price}`
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

const filterNumber = document.querySelector('.number')
filterNumber.addEventListener('click', () => fetchData())


// const filterPrice = document.querySelector('#price')
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//   filterPrice.addEventListener('click', () => {
//     const filteredPrice = data.sort((a, b) => b.price - a.price)
//     displayPokemonTable(filteredPrice)
//   })
// })

const selectPriceFilter = document.querySelector('#price-filter')
    fetch(URL)
    .then(res => res.json())
    .then(data => {
  selectPriceFilter.addEventListener('change', () => {
    const selectFilterForPrice = selectPriceFilter.value
    if (selectFilterForPrice === '$$$') {
    const price$$$ = data.sort((a, b) => b.price - a.price)
    displayPokemonTable(price$$$)
  } else if (selectFilterForPrice === '$') {
    const price$ = data.sort((a,b) => a.price - b.price)
    displayPokemonTable(price$)
  }
  })
})

const selectQtyFilter = document.querySelector('#qty-filter')
    fetch(URL)
    .then(res => res.json())
    .then(data => {
  selectQtyFilter.addEventListener('change', () => {
    const selectFilterForQty = selectQtyFilter.value
    if (selectFilterForQty === 'hi') {
    const qtyHi = data.sort((a, b) => b.inventory - a.inventory)
    
    displayPokemonTable(qtyHi)
  } else if (selectFilterForQty === 'lo') {
    const qtyLo = data.sort((a,b) => a.inventory - b.inventory)
    displayPokemonTable(qtyLo)
  }
  })
})

const selectNameFilter = document.querySelector('#name-filter')
    fetch(URL)
    .then(res => res.json())
    .then(data => {
  selectNameFilter.addEventListener('change', () => {
    const selectFilterForName = selectNameFilter.value
    if (selectFilterForName === 'a-z') {
    const namesAz = data.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    displayPokemonTable(namesAz)
  } else if (selectFilterForName === 'z-a') {
    const namesZa = data.sort((a,b) => {
      return b.name.localeCompare(a.name)
    })
    displayPokemonTable(namesZa)
  }
  })
})

const fetchData = () => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
  
    displayPokemonTable(data)
  })
}

fetchData()

