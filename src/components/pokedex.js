import './pokedex.css';
import React from 'react'
import { useState } from 'react'

import PokedexScreen from './pokedex-screen/pokedex-screen.js'
import PokemonForm from './pokemon-form/pokemon-form.js'
import GetPokemon from './service-models/get-pokemon.js'


//import styled from 'styled-components'
//Ambas son válidas
/*
'pokeapi.co/api/v2/pokemon/25'
'pokeapi.co/api/v2/pokemon/pikachu'
*/


function Pokedex(){
    let [pokemon, setPokemon] = useState(EmptyPokemon);
    let [loading, setLoading] = useState(true);
    let [showStats, setShowStats] = useState(false);
    let [error, setError] = useState(false);
    
    const loadNewPokemon = (pokemonID) => {
        GetPokemon(pokemonID, setPokemon, setLoading, setError);
    };
            
    return (
    <div className="pokedex">
        <div className="pokedex-left">
            <div className="pokedex-left-top">
                <div className='light is-sky is-big'/>
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
                <PokemonForm className="setPokemonId" setPokemonId={loadNewPokemon} setLoading={setLoading} setError={setError} />
            </div>
        </div>
        <div className="pokedex-right-front" />
        <div className="pokedex-right-back" />
    </div>
    )
}
export default Pokedex

export function EmptyPokemon() {
    return ({
        id: -1,
        img: "",
        imgJuego: "",
        imgCvg: "",
        nombre: "",
        experiencia: 0,
        hp: 0,
        ataque: 0,
        defensa: 0,
        especial: 0,
        stats: []
    });
}

export function showPokemon(pokemon, LoadingPokemon, showStats, error){
    return (
        <PokedexScreen pokemon={pokemon} LoadingPokemon={LoadingPokemon} ErrorPokemon={error} showStats={showStats} />
    )
}
