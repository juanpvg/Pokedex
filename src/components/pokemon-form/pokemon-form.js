import React, { useState } from 'react'
import './pokemon-form.css';

function PokemonForm({ setPokemonId, setLoading, setError }){
    const [ pokemon, setPokemon ] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if(pokemon !== ''){
            //console.log("pokemon a buscar: " + pokemon);
            // Estara cargando por que hará una petición a la API
            //setLoading(true);
            //setError(false);
            const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
            setPokemonId(pokemonID);
            //setPokemon('');
            return
        }
        //setError(true) //Si manda el formulario vacío, hay un error
    }

    return (
        <form className="pokemon-form" onSubmit={handleSubmit}>
            <input
            className="pokemon-input"
            type="text"
            name="pokemon"
            value={pokemon}
            placeholder="Look for your pokemon"
            onChange={e => setPokemon(e.target.value)}
            autoComplete="off"/>
            <input type="submit" className="pokemon-btn" value=""/>
        </form>
    )
}

export default PokemonForm