import SearchPokemon from "./service.pokemon.js"

export function EmptyPokemon() {
    return ({
        id: "-1",
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

export function EmptyArrayPokemon() {
    return ({
        currentPokemon: -1,
        pokemonList: []
    });
}

export function GetPokemon(id, arrayPokemon, setArrayPokemon, setPokemon, setLoading, setError){
    let  arrayTemp = arrayPokemon;
    const errorPokemon = (error) => {
        console.log("Error: " + error);
        setPokemon(EmptyPokemon());
        arrayTemp.currentPokemon = -1;
        setArrayPokemon(arrayTemp);
        setError(true);
        setLoading(false);
    };
    const addPokemon = (pokemon) => {
        setPokemon(pokemon);
        arrayTemp.pokemonList.push(pokemon);
        setLoading(false);
        setError(false);
        arrayTemp.currentPokemon = arrayTemp.pokemonList.length - 1;
        setArrayPokemon(arrayTemp);
    };

    const index = findPokemon(id, arrayPokemon);
    if(index === -1){
        SearchPokemon(id,addPokemon,errorPokemon); 
    }
    else {
        setPokemon(arrayPokemon.pokemonList[index]);
        arrayTemp.currentPokemon = index;
        setArrayPokemon(arrayTemp);
        setLoading(false);
        setError(false);
    }
    console.log(id + " position: " + index);
    console.log(arrayTemp);
}

export function findPokemon(id, arrayPokemon) {
    const pokemons = arrayPokemon.pokemonList;
    let index = pokemons.findIndex(pokemon => pokemon.id === id);
    console.log("index por id: " + index);
    if(index === -1){
        index = pokemons.findIndex(pokemon => pokemon.nombre === id);
        console.log("index por nombre: " + index);
    }
    console.log("index a retornar: " + index);
    return index;
}

