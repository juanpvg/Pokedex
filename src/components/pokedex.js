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
    
    const forward = ">";
    const back = "<";

    const greenState = () => {
       return !(error || loading);
    }

    const findPokemon = (pokemonID) => {
        setLoading(true);
        setError(false);
        GetPokemon(pokemonID, arrayPokemon, setArrayPokemon, setPokemon, setLoading, setError);
    };

    
    const goBack = () => {
        if(arrayPokemon.currentPokemon > 0){
            arrayPokemon.currentPokemon+= -1;
            setPokemon(arrayPokemon.pokemonList[arrayPokemon.currentPokemon]);
        }
    }
    const goForward = () => {
        if(arrayPokemon.currentPokemon < arrayPokemon.pokemonList.length-1){
            arrayPokemon.currentPokemon+= 1;
            setPokemon(arrayPokemon.pokemonList[arrayPokemon.currentPokemon]);
        }
    }

    return (
    <div className="pokedex">
        <div className="pokedex-left">
            <div className="pokedex-left-top">
                <div className='light is-sky is-big'>{arrayPokemon.currentPokemon+1 + "|" + arrayPokemon.pokemonList.length}</div>
                <div className={"light is-red " + error} />
                <div className={"light is-yellow " + loading} />
                <div className={"light is-green " + greenState()} />
            </div>
            <div className="pokedex-screen-container">
                {showPokemon(pokemon, loading, showStats, error)}
            </div>
            <div className="pokedex-left-bottom">
                <div className="pokedex-left-bottom-lights">
                    <button className="light is-blue is-medium button" onClick={() => goBack()}>{back}</button>
                    <button className="light is-green is-large button" onClick={() => setShowStats(false)}  >IMAGE</button>
                    <button className="light is-orange is-large button" onClick={() => setShowStats(true)}  >STATS</button>
                    <button className="light is-blue is-medium button" onClick={() => goForward()}>{forward}</button>
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
