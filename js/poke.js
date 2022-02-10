$(() => {
  //Variables
  const atrapar = document.getElementById("btnPoke");
  atrapar.addEventListener("click", fetchKantoPokemon);
  //Traer Pokémon
  function fetchKantoPokemon(e) {
    e.preventDefault();
    $("#btnPoke").remove();
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((respuesta) => respuesta.json())
      .then(function (allPokemon) {
        allPokemon.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon);
        });
      });
  }
  //Traer datos Pokémon
  function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        catchPoke(pokeData);
      });
  }
  //Crear Elementos HTML
  function catchPoke(pokeData) {
    let parrafo2 = document.createElement("li");
    parrafo2.innerHTML = `<li>${pokeData.id}-${
      pokeData.name
    } <img src="${`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${pokeData.id}.svg`}" /></li>`;
    document.body.appendChild(parrafo2);
  }
});
