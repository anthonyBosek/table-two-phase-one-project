const createCard = (pokemonObj) => {
  card.innerHTML = "";
  const cardHeader = document.createElement("div");
  const cardTitle = document.createElement("span");
  cardTitle.id = "card-title";
  cardTitle.innerText = pokemonObj.name;
  const cardSubtitle = document.createElement("span");
  cardSubtitle.id = "card-subtitle";
  cardSubtitle.innerText = `${pokemonObj.hitPoints} HP`;
  cardHeader.append(cardTitle, cardSubtitle);

  const cardImg = document.createElement("div");
  cardImg.id = "card-img";
  const img = document.createElement("img");
  img.src = pokemonObj.ThumbnailImage;
  img.alt = pokemonObj.name;
  cardImg.appendChild(img);

  const cardVitals = document.createElement("div");
  cardVitals.id = "card-vitals";
  const height = document.createElement("span");
  height.innerText = `Height: ${pokemonObj.height}`;
  const weight = document.createElement("span");
  weight.innerText = `Weight: ${pokemonObj.weight}`;
  cardVitals.append(height, weight);

  const cardPower = document.createElement("p");
  cardPower.id = "card-power";
  cardPower.innerText = pokemonObj.powerText;

  const cardAbility = document.createElement("p");
  cardAbility.id = "card-ability";
  cardAbility.innerText = pokemonObj.abilitiesText;

  const hr = document.createElement("hr");

  card.append(cardHeader, cardImg, cardVitals, cardPower, hr, cardAbility, hr);
};

//
// Card HTML Example
// <div id="card">
// <div>
//   <span id="card-title">Pikachu</span>
//   <span id="card-subtitle">120 HP</span>
// </div>
// <div id="card-img">
//   <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="test">
// </div>
// <div id="card-vitals">
//   <span>Height: 6-1</span>
//   <span>Weight: 200</span>
// </div>
// <p id="card-power">This is just some random generic text intended to fill up space on the card while it displays on the page. Hopefully, no one will actually read this too closely, but if they do maybe they will not comment on it.</p>
// <hr>
// <p id="card-ability">Much shorter random text to fill up card space.</p>
// <hr>
// </div>
