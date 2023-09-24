const url = 'https://pokedex2.p.rapidapi.com/pokedex/uk';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80b2f4be83msh3ce26828c556768p1b5eb7jsne93fd8b1bddd',
		'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
	}
};
let arr = []
let demo = {}
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const request = (obj) => {
  fetch('http://localhost:3000/pokemon/1', {
    method: "PATCH",
    headers: {
      "Content-Type" : 'application/json'
    },
    body: JSON.stringify({arr: obj})
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
const init = () => {
  fetch(url, options)
    .then((resp) => resp.json())
    .then((data) => {
      demo = data
      request(data)
    // data.forEach(item => {
    //     arr.push(item)
    //     request(item)
    //   })
     })
    .catch((err) => console.log(err));
};
init();