import React, { Component } from "react";
import PokedexScreen from './pokedex-screen/pokedex-screen'
  
class showPokemon extends Component {
    //console.log("no hay pokemon");
    //console.log(this.props.pokemon);
    shouldComponentUpdate(nextProps) {
        // Rendering the component only if 
        // passed props value is changed
    
        if (nextProps !== this.props) {
        return true;
        } else {
        return false;
        }
    }
    /*
    if(!pokemon){
        console.log("no hay pokemon");
        console.log(this.props.pokemon);
        return (
            <PokedexScreen pokemon={pokemon} LoadingPokemon={false} ErrorPokemon={true} showStats={showStats} />
        )
        
    }
    else {
        if(this.props.loading){
            console.log("show Pokemon");
            console.log(pokemon);
            console.log("loading es true");
            return (
                <PokedexScreen pokemon={this.props.pokemon} LoadingPokemon={true} ErrorPokemon={false} showStats={this.props.showStats} />
            )
        }
        else{
            console.log("loading es false");
            console.log(pokemon);
            return (
                <PokedexScreen pokemon={this.props.pokemon} LoadingPokemon={false} ErrorPokemon={true} showStats={this.props.showStats} />
            )
        }
    }
    */
}
  
export default showPokemon;


