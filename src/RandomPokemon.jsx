import Pokemon from "./Pokemon";

const RandomPokemon = ({pokemons}) => {
   
    
    
    const randomPoke = pokemons[Math.round(Math.random()*9)]


    return (

            
        <section>
                    <Pokemon pokemon={randomPoke}/>
        </section>
            )
        };

export default RandomPokemon;