import './pokedex.css';
import React from 'react'
import { useState } from 'react'

import PokedexScreen from './pokedex-screen/pokedex-screen.js'
import PokemonForm from './pokemon-form/pokemon-form.js'
import { GetPokemon, EmptyPokemon, EmptyArrayPokemon } from './service-models/model.pokemon.js'


//import styled from 'styled-components'
//Ambas son válidas
/*
'pokeapi.co/api/v2/pokemon/25'
'pokeapi.co/api/v2/pokemon/pikachu'
*/


function Pokedex(){
    let [pokemon, setPokemon] = useState(EmptyPokemon);
    let [arrayPokemon, setArrayPokemon] = useState(EmptyArrayPokemon);
    let [loading, setLoading] = useState(true);
    let [showStats, setShowStats] = useState(false);
    let [error, setError] = useState(false);
    
    const findPokemon = (pokemonID) => {
        setLoading(true);
        setError(false);
        GetPokemon(pokemonID, arrayPokemon, setArrayPokemon, setPokemon, setLoading, setError);
    };
    
    return (
    <div className="pokedex">
        <div className="pokedex-left">
            <div className="pokedex-left-top">
                <div className='light is-sky is-big'>{arrayPokemon.pokemonList.length}</div>
                <div className="light is-red" />
                <div className="light is-yellow" />
                <div className="light is-green" />
            </div>
            <div className="pokedex-screen-container">
                {showPokemon(pokemon, loading, showStats, error)}
            </div>
            <div className="pokedex-left-bottom">
                <div className="pokedex-left-bottom-lights">
                    <div className="light is-blue is-medium" />
                    <button className="light is-green is-large button" onClick={() => setShowStats(false)}  >IMAGE</button>
                    <button className="light is-orange is-large button" onClick={() => setShowStats(true)}  >STATS</button>
                </div>
                <PokemonForm className="setPokemonId" setPokemonId={findPokemon} setLoading={setLoading} setError={setError} />
            </div>
        </div>
        <div className="pokedex-right-front" />
        <div className="pokedex-right-back" />
    </div>
    )
}
export default Pokedex

export function showPokemon(pokemon, LoadingPokemon, showStats, error){
    return (
        <PokedexScreen pokemon={pokemon} LoadingPokemon={LoadingPokemon} ErrorPokemon={error} showStats={showStats} />
    )
}
