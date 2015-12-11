var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonStore = new Store(AppDispatcher);
var PokemonConstants = require('../constants/pokemonConstants');

var _pokemons = {};

PokemonStore.all = function() {
  var result = [];
  for (var id in _pokemons) {
    if (_pokemons.hasOwnProperty(id)) {
      result.push(_pokemons[id]);
    }
  }
  return result;
};

PokemonStore.find = function(pokemonId) {
  return _pokemons[pokemonId];
};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};

PokemonStore.updatePokemon = function(pokemon) {
  _pokemons[pokemon.id] = pokemon;
  this.__emitChange();
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.updatePokemon(payload.pokemon);
      break;
    // Add a case for POKEMON_RECEIVED that updates our pokemon in _pokemons
  }
};


module.exports = PokemonStore;
