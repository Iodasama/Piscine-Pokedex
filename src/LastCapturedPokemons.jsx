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
              <h2>Name:{pokemons.name}</h2>
              <p> Type: {pokemons.type}</p>
              <img src= {pokemons.image} alt={pokemons.name}/>
            </article>
          );
        })}
      </section>
    );
  };
  
  export default LastCapturedPokemons;
  