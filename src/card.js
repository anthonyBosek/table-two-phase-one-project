// const cardBackgrounds = {
//   "fire": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f144fa15-4001-4f05-83d9-73ad837f6bc4/d4wcj31-53a8338d-c2b1-4a00-ad15-aaa314cb9f6b.png/v1/fit/w_425,h_612,q_70,strp/classic_pkmn_tcg_texture_pack_by_flamingclaw_d4wcj31-375w-2x.jpg",
//   "electricity": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oun1x-6975d2e1-093f-4f3f-88f4-21ea09a01e93.png/v1/fit/w_431,h_614,q_70,strp/lightning__bw__texture_by_pkmncardmaker264_d5oun1x-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvODFjY2ZkYjctYWMxZC00MjNmLWEyNzYtYWY2M2FiYWU1YmEyXC9kNW91bjF4LTY5NzVkMmUxLTA5M2YtNGYzZi04OGY0LTIxZWEwOWEwMWU5My5wbmciLCJ3aWR0aCI6Ijw9NDMxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.jHEFjRdLUpvvMcXU77rGv4MY7ngZQHSZtnoszNFbqvs",
//   "water": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oujyw-580a0eed-e966-46c3-b46c-19ad3e890981.png/v1/fit/w_429,h_614,q_70,strp/water__bw__texture_by_pkmncardmaker264_d5oujyw-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvODFjY2ZkYjctYWMxZC00MjNmLWEyNzYtYWY2M2FiYWU1YmEyXC9kNW91anl3LTU4MGEwZWVkLWU5NjYtNDZjMy1iNDZjLTE5YWQzZTg5MDk4MS5wbmciLCJ3aWR0aCI6Ijw9NDI5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6vfShTuSTxItZrdM2HzCBsDrEkjnNwILQs5R6m6KOpQ",
//   "grass": "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81ccfdb7-ac1d-423f-a276-af63abae5ba2/d5oulfh-45f9111f-d787-4040-8609-50e8ce099b31.png/v1/fit/w_430,h_614,q_70,strp/grass__bw__texture_by_pkmncardmaker264_d5oulfh-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvODFjY2ZkYjctYWMxZC00MjNmLWEyNzYtYWY2M2FiYWU1YmEyXC9kNW91bGZoLTQ1ZjkxMTFmLWQ3ODctNDA0MC04NjA5LTUwZThjZTA5OWIzMS5wbmciLCJ3aWR0aCI6Ijw9NDMwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KhGvu2QKX0z1d5CUobflhVbQuhvPPJ380st6H4Igq5M')",
//   "bug": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiv7n-fb799d0b-66c7-4075-9312-f36f259600f0.png/v1/fit/w_426,h_614/poison_texture_by_metagross101_d6aiv7n-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdjduLWZiNzk5ZDBiLTY2YzctNDA3NS05MzEyLWYzNmYyNTk2MDBmMC5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iWJn_KhI4D5pVMrLDRMMjvoYOuWX_pj-fRrhFLoS9qY",
//   "normal": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiu5e-337f596a-ae46-496e-9c27-83d4eaca7938.png/v1/fit/w_420,h_590/bug_texture_by_metagross101_d6aiu5e-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdTVlLTMzN2Y1OTZhLWFlNDYtNDk2ZS05YzI3LTgzZDRlYWNhNzkzOC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7vqTNaTnkQcJYCJVm5O5LBjrB9d_N6HSzH1e0FnIbt8",
//   "poison": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiuus-3fe6c676-7bfe-4fac-ae3e-4766f488d001.png/v1/fit/w_426,h_612/ghost_texture_by_metagross101_d6aiuus-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjEyIiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdXVzLTNmZTZjNjc2LTdiZmUtNGZhYy1hZTNlLTQ3NjZmNDg4ZDAwMS5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KY34e5Ox3e6rK9veeFnMoUJHMgkImB0HDezBdxcQ2Lc",
//   "fairy": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c938f85-f834-4bb3-b3b2-97d295769464/d6d1w95-26a79564-1c1e-4f4e-9199-a20cb77de658.png/v1/fit/w_420,h_590/dream_texture_by_icycatelf_d6d1w95-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkwIiwicGF0aCI6IlwvZlwvM2M5MzhmODUtZjgzNC00YmIzLWIzYjItOTdkMjk1NzY5NDY0XC9kNmQxdzk1LTI2YTc5NTY0LTFjMWUtNGY0ZS05MTk5LWEyMGNiNzdkZTY1OC5wbmciLCJ3aWR0aCI6Ijw9NDIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._QmZK1WObkmhoEcYlA7_VDJ9yrYmwZALq0uAxkzogtI",
//   "ground": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafcbb8b-6adb-4b6b-9e8b-60ed07e17c32/d6aiv12-db33a9c2-3c51-4ed0-b65a-c519a9a742ca.png/v1/fit/w_430,h_615/ground_texture_by_metagross101_d6aiv12-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE1IiwicGF0aCI6IlwvZlwvYmFmY2JiOGItNmFkYi00YjZiLTllOGItNjBlZDA3ZTE3YzMyXC9kNmFpdjEyLWRiMzNhOWMyLTNjNTEtNGVkMC1iNjVhLWM1MTlhOWE3NDJjYS5wbmciLCJ3aWR0aCI6Ijw9NDMwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EYPtV1PwoOvXrv2Xr0zy0lf6nmgyxGSQFkB7g-482Es",
// }

const createCard = (pokemonObj) => {
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
  card.append(cardHeader, cardImg, cardVitals, cardPower, hr1, cardAbility, hr2);

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
