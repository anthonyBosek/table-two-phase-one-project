
const createCard = (pokemonObj, bool=false) => {
  card.innerHTML = "";
  card.className = "";
  card.classList.add(pokemonObj.type[0]);
  const cardHeader = document.createElement("div");
  cardHeader.id = "card-header";
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
  if (bool) {
    card.classList.add("flip");
  }
  const cardVitals = document.createElement("div");
  cardVitals.id = "card-vitals";
  const height = document.createElement("span");
  height.innerText = `Height: ${pokemonObj.height}`;
  const weight = document.createElement("span");
  weight.innerText = `Weight: ${pokemonObj.weight}`;
  cardVitals.append(height, weight);

  const cardPower = document.createElement("p");
  cardPower.id = "card-power";
  let truncatedText = pokemonObj.powerText.length > 200 ? (pokemonObj.powerText.slice(0, 201) + "...") : pokemonObj.powerText;
  cardPower.innerText = truncatedText;

  const cardAbility = document.createElement("p");
  cardAbility.id = "card-ability";
  cardAbility.innerText = pokemonObj.abilitiesText;

  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");

  card.append(
    cardHeader,
    cardImg,
    cardVitals,
    cardPower,
    hr1,
    cardAbility,
    hr2
  );
};

const addCardToCart = (e) => {
  e.preventDefault();
  const qty = parseInt(e.target["card-qty"].value);
  const poke = document.getElementById("card-title").innerText;
  if (!userData.items[poke]) {
    userData.items[poke] = qty;
  } else {
    userData.items[poke] += qty;
  }
  addToCart.reset();
};

addToCart.addEventListener("submit", addCardToCart);
