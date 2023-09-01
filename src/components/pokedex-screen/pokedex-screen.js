import React from 'react'
import Stat from '../pokemon-stat/stat.js'
import { imagesPokemon } from '../../const/const.js'
import './pokedex-screen.css';


function PokedexScreen({ pokemon, LoadingPokemon, ErrorPokemon, showStats }){
    if(ErrorPokemon){
      return(showError());
    }
    else if (LoadingPokemon && !showStats){
      return(showPokemonImage(pokemon));
    }
    else if (LoadingPokemon && showStats){
      return(showPokemonStats(pokemon));
    }
}
  
export default PokedexScreen


export function showError(){
  return (
    <div className="pokedex-screen">
      <img className="pokemon-image"
        src={imagesPokemon.error}
        alt="Hubo un error buscando tu pokemon"
      />
    </div>
  )
}



export function showPokemonImage(pokemon) {
  return (
    <div className="pokedex-screen">
        <img className="pokemon-image"
          src={pokemon.img}
          alt="Aún no hay ningun pokemon"
        /> 
    </div>
  )
}

export function showPokemonStats(pokemon){
  return (
    <div className="pokedex-screen-info">
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon.nombre}</h2>
          <img
            className="pokemon-image-info"
            src={pokemon.imgJuego}
            alt={pokemon.name}
          />
          <ul className="pokemon-stats">
              {showStatsList(pokemon)}
          </ul>
        </div>
    </div>
  )
}


export function showStatsList(pokemon) {
  if (pokemon.stats.length === 0) {
    return ""
  }
  return pokemon.stats.map((item) => {
    return(
      <Stat key={item.stat.name} item={item}/>
    );
  });
}



