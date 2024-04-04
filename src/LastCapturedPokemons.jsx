import Pokemon from "./Pokemon";
const LastCapturedPokemons = ({pokemons}) => {
   
    
    const pokemonCapturedByDate = pokemons.sort((a, b) => {
        return new Date(b.capturedAt) - new Date(a.capturedAt);
      });
    
    const lastThreePokemons = pokemonCapturedByDate.slice (0,3);
  console.log (lastThreePokemons)
    return (
      <section>
        {lastThreePokemons.map((pokemons) => {
          return (
            <article>
             <Pokemon pokemon={pokemons}/>
            </article>
          );
        })}
      </section>
    );
  };
  
  export default LastCapturedPokemons;
  