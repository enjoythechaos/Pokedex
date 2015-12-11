var React = require('react');
var PokemonActions = require('../../actions/pokemonActions');
var ApiUtil = require('../../util/apiUtil');
var PokemonStore = require('../../stores/pokemon');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {pokemons: []};
  },

  _onChange: function() {
    this.setState({pokemons: PokemonStore.all()});
  },

  componentDidMount: function() {
    PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function(){
    PokemonStore.removeListener(this._onChange);
  },

  render: function() {
    return(
      <ul>
        {
          this.state.pokemons.map(function(pokemon){
            return <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>;
          })
        }
      </ul>
    );
  }
});


module.exports = PokemonsIndex;
