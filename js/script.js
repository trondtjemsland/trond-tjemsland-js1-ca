async function getPokemon() {
  try {
    const response = await fetch('https://api.pokemontcg.io/v2/cards/');
    const jsonResults = await response.json();
    const pokemonResults = jsonResults.data;
    console.log(pokemonResults);

    for (let i = 0; i < pokemonResults.length; i++) {
      if (i === 100) {
        break;
      }

      document.querySelector('.cardscontainer').innerHTML += `
                <div class="cards">
                    <h2>${pokemonResults[i].name}</h2>
                    <img class="pokemon__img" src="${pokemonResults[i].images.small}"/>
                    <a class="button" href="details.html?id=${pokemonResults[i].id}"><p>Click for more</p></a>
                </div>
            `;
      console.log(pokemonResults[i].id);
    }
  } catch (error) {}
}

getPokemon();
