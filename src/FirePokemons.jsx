import Pokemon from "./Pokemon";
const FirePokemons = ({pokemons}) => {
   
    
      
      
      const result = pokemons.filter((Type) => {
        return Type.type == "Fire"});

      return (
            
            <section>
                 {result.map((pokemonfire) => {
                        return( 
                            <Pokemon pokemon={pokemonfire}/>
                );
                })};
               
            </section>

);
};

export default FirePokemons;
