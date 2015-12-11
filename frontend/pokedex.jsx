var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var ApiUtil = require('./util/apiUtil.js');
var PokemonActions = require('./actions/pokemonActions');
var PokemonStore = require('./stores/pokemon');

var App = require('./components/app');
var PokemonDetail = require('./components/pokemons/pokemonDetail');

// var PokemonsIndex = require('./components/pokemons/pokemonsindex');

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
});
