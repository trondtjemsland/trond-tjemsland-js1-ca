// async function getPokemon() {
// 	try {
// 		const response = await fetch('https://api.pokemontcg.io/v2/cards/');
// 		const jsonResults = await response.json();
// 		const pokemonResults = jsonResults.data;
// 		console.log(pokemonResults);

// 		for (let i = 0; i < pokemonResults.length; i++) {
// 			if (i === 30) {
// 				break;
// 			}

// 			document.querySelector('.cardscontainer').innerHTML += `
//               <div class="cards">
//                   <h2>${pokemonResults[i].name}</h2>
//                   <img src=""/>
//               </div>
//           `;
// 		}
// 		console.log(pokemonResults[i]);
// 	} catch (error) {}
// }

// getPokemon();

async function getPokemon() {
	try {
		const response = await fetch('https://api.pokemontcg.io/v2/cards/');
		const jsonResults = await response.json();
		const pokemonResults = jsonResults.data;
		console.log(pokemonResults);

		for (let i = 0; i < pokemonResults.length; i++) {
			if (i === 30) {
				break;
			}

			document.querySelector('.cardscontainer').innerHTML += `
                <div class="cards">
                    <h2>${pokemonResults[i].name}</h2>
                    <img src="${pokemonResults[i].images.small}"/>
                    <a href="details.html?id=${pokemonResults[i].id}">Click for more</a>
                </div>
            `;
		}
		console.log(pokemonResults[i]);
	} catch (error) {}
}

getPokemon();
