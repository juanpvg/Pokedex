import React, { useState } from 'react'
import './pokemon-form.css';

function PokemonForm({ setPokemonId, setLoading, setError }){
    const [ pokemon, setPokemon ] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if(pokemon !== ''){
            const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
            setPokemonId(pokemonID);
            return
        }
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