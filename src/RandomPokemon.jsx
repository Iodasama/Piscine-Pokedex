const RandomPokemon = ({pokemons}) => {
   
    
    
    const randomPoke = pokemons[Math.round(Math.random()*9)]


    return (

            
        <section>
                    <article>
                    <h2>Name:{randomPoke.name}</h2>
                    <p>Class:{randomPoke.type}</p>
                    <img src={randomPoke.image}/>
                    </article>;
            
        </section>
            )
        };

export default RandomPokemon;