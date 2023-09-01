import React from 'react'
import Stat from '../pokemon-stat/stat.js'

import { imagesPokemon } from '../../const/const.js'

import './pokedex-screen.css';


function PokedexScreen({ pokemon, LoadingPokemon, ErrorPokemon, showStats }){
    // Si hay un error en la petición a la API, devuelve este componente.
    // Recuerda que al hacer un return, el resto de código, no se ejecutará.

    console.log("en la tabla:");
    console.log(pokemon);
    console.log(ErrorPokemon);

    if(ErrorPokemon){
      return(showError());
    }
    else if (LoadingPokemon && !showStats){
      return(showPokemonImage(pokemon));
    }
    else if (LoadingPokemon && showStats){
      return(showPokemonStats(pokemon));
    }

    /*
    return (
      <div className="pokedex-screen">
        { !pokemon || LoadingPokemon ? // Si no hay pokemon o si esta cargando
          <img className="pokemon-image"
            src={pokemon.img}
            alt="Aún no hay ningun pokemon"
          /> : // Todo cool, entonces devuelve un lindo pokemon
          <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img
              className="pokemon-image"
              src={pokemon.img}
              alt={pokemon.name}
            />
            <ul className="pokemon-stats">
                {statsList(pokemon)}
            </ul>
          </div>
        }
      </div>
  )
  */
}
  
export default PokedexScreen


export function showError(){
  console.log("mostrar error");
  console.log(imagesPokemon.error);
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
  console.log("lista de stats: ")
  if (pokemon.stats.length === 0) {
    return ""
  }
  return pokemon.stats.map((item) => {
    return(
      <Stat key={item.stat.name} item={item}/>
    );
  });
}



