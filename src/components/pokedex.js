import React from 'react'
import { useState, useEffect } from 'react'

import PokedexScreen from './pokedex-screen'
import PokemonForm from './pokemon-form'

import './pokedex.css';
//import styled from 'styled-components'

//Ambas son válidas
/*
'pokeapi.co/api/v2/pokemon/25'
'pokeapi.co/api/v2/pokemon/pikachu'
*/


function Pokedex(){
    let [pokemon, setPokemon] = useState(EmptyPokemon());
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState();
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //const pokemonID = getRandomInt(1, 152);
    //const pokemonRandom = pokemonID.pokemonID;
    /*
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
          .then(res => res.json())
          .then(data => {
            setPokemon(data)
            setLoading(false)
            setError(false)
            console.log("el pokemon es: " + data);
          })
          .catch(err => {
            console.log("error");
            setLoading(false)
            setError(true)
          })
      }, [pokemonID]);
    */
     
    const fetchData = async (id) => {
        try {
            //console.log(id)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json();
            console.log("información:");
            console.log(data)

            const newPokemon = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                imgJuego: data.sprites.front_default,
                imgCvg: data.sprites.other.dream_world.front_default,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
            }
            //pintarCard(pokemon)
            //console.log("el pokemon es:");
            //console.log(pokemon);
            setPokemon(newPokemon);
            setLoading(true);
            loading = true;
            //showPokemon(pokemon, pokemon.img, loading);        
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
    
    //fetchData(pokemonID);
    /*
    useEffect(() => {
        const fetchPokemon = async ()=>{
            const tempPokemon = await fetchData(pokemonID);
            setPokemon(tempPokemon);
            console.log("el pokemon es:");
            console.log(pokemon);
        }
        fetchPokemon().catch(
            console.log("Error")
        );
    }, )
    */

    //console.log(pokemon);
      
        
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
            {showPokemon(pokemon, pokemon.img , loading)}
        </div>
        <div className="pokedex-left-bottom">
            <div className="pokedex-left-bottom-lights">
                <div className="light is-blue is-medium" />
                <div className="light is-green is-large" />
                <div className="light is-orange is-large" />
            </div>
            <PokemonForm setPokemonId={loadNewPokemon} setLoading={setLoading} setError={setError} />
        </div>
        </div>
        <div className="pokedex-right-front" />
        <div className="pokedex-right-back" />
    </div>
    )
}

/*
    {fetchData(pokemonRandom)}


                <PokemonForm
                    setPokemonId={setPokemonId}
                    setLoading={setLoading}
                    setError={setError}
                />
*/
export default Pokedex



export function EmptyPokemon() {
    return ({
        img: "",
        imgJuego: "",
        imgCvg: "",
        nombre: "",
        experiencia: 0,
        hp: 0,
        ataque: 0,
        defensa: 0,
        especial: 0,
    });
}

export function showPokemon(pokemon, pokemonImage, loading) {
    if(loading){
        console.log("show Pokemon");
        console.log(pokemon);
        return (
            <PokedexScreen pokemon={pokemon} LoadingPokemon={pokemonImage} ErrorPokemon={false} />
        )
    }
    else{
        return "";
    }
    
}