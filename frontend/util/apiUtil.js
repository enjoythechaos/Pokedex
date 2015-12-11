var PokemonActions = require('../actions/pokemonActions');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.get("api/pokemon", {}, function(pokemons){
      PokemonActions.receiveAllPokemons(pokemons);
    });
  },

  fetchSinglePokemon: function(pokemonId) {
    $.get("api/pokemon/" + pokemonId, {}, function(pokemon){
      PokemonActions.receiveSinglePokemon(pokemon);
    });
  }
};

module.exports = ApiUtil;
