const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);

const id = params.get('id');

async function getPokemonId(pokemonId) {
  try {
    console.log(pokemonId);
    document.querySelector('.loading').innerHTML = ` 
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAz1BMVEX////6+vr89PT+/Pz87OL86Nr89vaxvIL4sXv8///l6NbM1c2istT4r3b2l3f9lamwwdft8OX+9/SYlcuwu9XV2uajtNLO1eS4xNfz8+z19fGxvIXM07utuXyyvIrEy6j98Ov66ur707n84c/f3sb3pmW2wZX5u4z3rob5wJb4q2/86OP5y6/71b398+z64uH219L3p4v1nYD6vK32kXH2tKH2oZP1zcP4s6r1w7T7sbj9i6L7nq7Y2tX4xsjh5eXh5+38v8mpq9Khnc61tNbzoKeKAAACnElEQVR4nO3Za1PaQBiG4d0EA4EECKBgkIq1Vm1toK2lrVCh6P//Td1NsuXUAn6KGe7LmRw2+bDzzLuHoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJyz7ax7kEe2ZZHbC5yexifHspz4gqrbR9jtnemzia1RKJDbbkGvGOdmKSJOrdDIuk85EL4pFnuBqTZbpUa17eO8WCyem9j6KrV+1j3KhUDF1rXTlZRi2+3i7aWO6F2v15XpCmpmtkZEeP9z5ftXdyqe8vsz0xT19XLaP1Iy7Njrdu2XSn5pc93UoR0VMuhQPlg3Orfb9eZCHBuDdIlcubOuP/j+jRW3S/PIjmstSU2uvn+w1mP4eHf7ab09KkRseFfpeGRaQ1K6riuEq+/1n36QPEpaFq8ffM3JZODpWFz3YjCwFvfpVXyyndBZff2wmTlMnYefq9Xql6+WaTe1JaQdlLWGMI0bY/vQpINPHaP7qnb/bdFuYktSK5eXUz5sS9U2SnL77qb3i9jCJLWAajMW4Qjn8sdo9LPvmrAWsckwCspBaEvmttTy0qgXUleYBXQpUHVQn/Zplqyk/+L0Nz4HpCMZllsNHsbjibPaJiuVyi/+HbPF47hWq03WPgl0bJXKNJse5cFQpzZ+XG+ekttWOrXaUF3M/o5TGapDGOeWXb9euYfa5Lcaoc68OTdNnXpb/9A7pdp2em42n9Reo9WSOrZ6J+v+5EO72dTVdux5x3FsdepsH3MVW1uIlue11CynYuuw+dht9qSKTQ3PE887UbOaLje2urvN1Mw2EyY2EarcZtn2KBfs1rPedIiO58WLQdhuZ9uhfGl7Hnm9nN1hKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA3PsD/R0hdMCZUboAAAAASUVORK5CYII="/>`;

    const response = await fetch(
      'https://api.pokemontcg.io/v2/cards/' + pokemonId
    );
    const jsonResults = await response.json();

    console.log(jsonResults);

    const data = jsonResults.data;

    document.title = data.name;
    document.querySelector(
      '.detailsimg'
    ).style.backgroundImage = `url('${data.images.small}')`;
    document.querySelector('h1').innerHTML = `${data.name}`;
    document.querySelector('.rarity').innerHTML = `${data.rarity}`;
    document.querySelector('.types').innerHTML = `${data.types}`;
    if (data.flavorText === undefined) {
      document.querySelector('.desc').innerHTML = `No flavor text`;
    } else {
      document.querySelector('.desc').innerHTML = `${data.flavorText}`;
    }
  } catch (error) {
    document.querySelector('.alert').innerHTML += showAlertTouser(
      error,
      'danger'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);

    document.querySelector('.loading').innerHTML = ``;
  }
}

getPokemonId(id);
