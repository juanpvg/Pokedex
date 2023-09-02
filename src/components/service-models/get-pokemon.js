
function GetPokemon(id, setPokemon, setLoading, setError){
    setLoading(true);
    setError(false);
    const fetchData = async (id) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json();
            console.log("información:");
            console.log(data)

            const newPokemon = {
                id: -id,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
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
            setLoading(false);
            setError(false);
        } catch (error) {
            setError(true);
        }
    }
    fetchData(id);
    
}
export default GetPokemon






