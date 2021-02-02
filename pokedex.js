function listePokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/"; // URL ressource
  let fetchOptions = { method: "GET" }; // Options de l'API fetch

  // Exécuter la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      let Pokemons = dataJSON.results; // liste des Pokémon
      // Ici le traitement des données
      console.log(Pokemons);
      Pokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
      let texteHTML = "";
      for (let pokemon of Pokemons) {
        texteHTML =
          texteHTML +
          "<option value=" +
          pokemon.url +
          " >" +
          pokemon.name +
          "</option>";
      }

      // pour affichage dans le navigateur
      document.getElementById("liste").innerHTML = texteHTML;
    })
    .catch((error) => {
      // Gestion des erreurs
      console.log(error);
    });
}
listePokemon(); //écrit tous les noms des pokemons dans "liste"

document.getElementById("liste").addEventListener("change", getPokemon);
function getPokemon() {
  const url = event.target.value; // URL ressource
  let fetchOptions = { method: "GET" }; // Options de l'API fetch

  // Exécuter la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      let infosPokemon = dataJSON; // Contient les infos sur le Pokémon choisi
      // Ici pas de .results car élément et non sous-élément

      let texteHTML =
        "Le Pokémon de nom anglais " +
        infosPokemon.name +
        " mesure " +
        infosPokemon.height * 10 +
        " cm et pèse " +
        infosPokemon.weight / 10 +
        " kg." +
        "</br>" +
        "<img src=" +
        infosPokemon.sprites.front_default +
        "></img>";
      console.log(infosPokemon.name);

      // pour affichage dans le navigateur
      document.getElementById("detail").innerHTML = texteHTML;
    })
    .catch((error) => {
      // Gestion des erreurs
      console.log(error);
    });
}
