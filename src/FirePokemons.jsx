const FirePokemons = ({pokemons}) => {
   
    
      
      
      const result = pokemons.filter((Type) => {
        return Type.type == "Fire"});

      return (
            
            <section>
                 {result.map((pokemonfire) => {
                        return( <article>
                        <h2>Name:{pokemonfire.name}</h2>
                        <p>Class:{pokemonfire.type}</p>
                        <img src={pokemonfire.image}/>
                        </article>
                );
                })};
               
            </section>

);
};

export default FirePokemons;
