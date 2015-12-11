var React = require('react');
var History = require('react-router').History;
// var PokemonActions = require('../../actions/pokemonActions');
// var ApiUtil = require('../../util/apiUtil');
// var PokemonStore = require('../../stores/pokemon');

var PokemonIndexItem = React.createClass({
  mixins: [History],
  showDetail: function() {
    var pokemonDetailUrl = "pokemon/" + this.props.pokemon.id;
    this.history.push(pokemonDetailUrl);
  },
  render: function() {
    return (
      <li className='poke-list-item' onClick={this.showDetail}>{this.props.pokemon.name} {this.props.pokemon.poke_type}</li>
    );
  }
});

module.exports = PokemonIndexItem;
