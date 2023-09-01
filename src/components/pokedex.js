import React from 'react'
import { useState, useEffect, Component } from 'react'

//import showPokemon  from './show-pokemon.js'
import PokedexScreen from './pokedex-screen/pokedex-screen'
import PokemonForm from './pokemon-form/pokemon-form'

import './pokedex.css';

import { imagesPokemon } from '../const/const.js'
//import styled from 'styled-components'

//Ambas son válidas
/*
'pokeapi.co/api/v2/pokemon/25'
'pokeapi.co/api/v2/pokemon/pikachu'
*/


function Pokedex(){
    let [pokemon, setPokemon] = useState(EmptyPokemon);
    //let [pokemon, setPokemon] = useState();
    let [loading, setLoading] = useState(false);
    let [showStats, setShowStats] = useState(false);
    let [error, setError] = useState();
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const fetchData = async (id) => {
        try {
            //console.log(id)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json();
            console.log("información:");
            console.log(data)

            const newPokemon = {
                id: -id,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                imgJuego: data.sprites.front_default,
                imgCvg: data.sprites.other.dream_world.front_default,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
                stats: data.stats,
            }
            setPokemon(newPokemon);
            setLoading(true);
            loading = true;
            //showPokemon(pokemon, pokemon.img , loading)
        } catch (error) {
            console.log(error);
            
        }
    }
    
    const loadNewPokemon = (pokemonID) => {
        //setLoading(false);
        console.log("verifica si ingresa a carga: " + loading);
        if(loading){
            return ""; 
        }
        else{
            console.log("pokemon a buscar paso 2: " + pokemonID);
            //const pokemonID = getRandomInt(1, 152);
            fetchData(pokemonID);
        }
    };
    
    const setShowStatsFunction = (newValue) => {
        setShowStats(newValue);
    }
        
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
                {showPokemon(pokemon, loading, showStats)}
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

// {showPokemon(pokemon, loading, showStats)}
// <showPokemon pokemon={pokemon} loading={loading} showStats={showStats} />

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

export function showPokemon(pokemon, LoadingPokemon, showStats){
    if(pokemon.id === -1){
    //if(!pokemon){
        console.log("no hay pokemon");
        console.log(pokemon);
        return (
            <PokedexScreen pokemon={pokemon} LoadingPokemon={false} ErrorPokemon={true} showStats={showStats} />
        )
        
    }
    else {
        if(LoadingPokemon){
            console.log("show Pokemon");
            console.log(pokemon);
            console.log("loading es true");
            return (
                <PokedexScreen pokemon={pokemon} LoadingPokemon={true} ErrorPokemon={false} showStats={showStats} />
            )
        }
        else{
            console.log("loading es false");
            console.log(pokemon);
            return (
                <PokedexScreen pokemon={pokemon} LoadingPokemon={false} ErrorPokemon={true} showStats={showStats} />
            )
        }
    }
}
