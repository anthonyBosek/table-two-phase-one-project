/* Function that takes two arguments, an object and a boolean to create a card to be displayed on page */
const createCard = (pokemonObj, bool = false) => {
  /* Empty out the card elements and classes */
  card.innerHTML = "";
  card.className = "";
  /* Add class for background colors */
  card.classList.add(pokemonObj.type[0]);
  /* If bool is true, add the class 'flip' to turn card over */
  if (bool) {
    card.classList.add("flip");
  }
  /* Create elements of card and assign ids, text, and image then append them into the card */
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

  const cardVitals = document.createElement("div");
  cardVitals.id = "card-vitals";
  const height = document.createElement("span");
  height.innerText = `Height: ${pokemonObj.height}`;
  const weight = document.createElement("span");
  weight.innerText = `Weight: ${pokemonObj.weight}`;
  cardVitals.append(height, weight);

  const cardPower = document.createElement("p");
  cardPower.id = "card-power";
  /* Ternary to ensure the text of 'cardPower' is not over 200 characters long */
  let truncatedText =
    pokemonObj.powerText.length > 200
      ? pokemonObj.powerText.slice(0, 201) + "..."
      : pokemonObj.powerText;
  cardPower.innerText = truncatedText;

  const cardAbility = document.createElement("p");
  cardAbility.id = "card-ability";
  cardAbility.innerText = pokemonObj.abilitiesText;

  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");

  cardQty.max = pokemonObj.inventory;

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

/* Function that will add the card that is being displayed's info to the cart when the target of the event is clicked  */
const addCardToCart = (e) => {
  e.preventDefault();
  const qty = parseInt(e.target["card-qty"].value);
  const max = parseInt(e.target["card-qty"].max);
  const poke = document.getElementById("card-title").innerText;
  if (qty) {
    if (!userData.items[poke]) {
      userData.items[poke] = [qty, max];
    } else {
      userData.items[poke][0] += qty;
      userData.items[poke][1] = max;
    }
    addToCart.reset();
    alert(`${qty} ${poke} added to cart!`);
  } else {
    alert("Please enter a quantity");
  }
};

/* Add a submit event listener to 'addCardToCart */
addToCart.addEventListener("submit", addCardToCart);