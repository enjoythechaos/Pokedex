var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ApiUtil = require('../../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return {pokemon: this.getStateFromStore()};
  },

  getStateFromStore: function() {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  _onChange: function () {
    this.setState({pokemon: this.getStateFromStore()});
    console.log("This part was called when our listening function was called by the store when it updated");
    console.log(this.state.pokemon);
  },

  componentDidMount: function() {
    this.listenerToken = PokemonStore.addListener(this._onChange);
    console.log("Here's the state:");
    console.log(this.state.pokemon);
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function() {
    ApiUtil.fetchSinglePokemon(parseInt(this.props.params.pokemonId));
    console.error("This part was called when the component received props");
    console.log(this.state.pokemon);
  },

  render: function() {
    var innerHTML = (<div className="detail"></div>);
    if (typeof this.state.pokemon !== 'undefined') {
      innerHTML = (
      <div classname="detail">
        <div>Name: </div>
        <div>Poketype: {this.state.pokemon.poke_type}</div>
        <div>Attack: {this.state.pokemon.attack}</div>
        <div>Defense: {this.state.pokemon.defense}</div>
        <div>Moves:
          {this.state.pokemon.moves}
        </div>
        <img src={this.state.pokemon.image_url}></img>
      </div>
      );
    }
    return (
      <div>
        <div className="pokemon-detail-pane">
          {innerHTML}
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;

// {...this.state.pokemon}
