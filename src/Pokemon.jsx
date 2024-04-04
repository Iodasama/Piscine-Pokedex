const Pokemon = ({pokemon}) => {

    return (
        <article>
                    <h2>Name:{pokemon.name}</h2>
                    <p>Class:{pokemon.type}</p>
                    <img src={pokemon.image} alt={pokemon.name}/>
        </article>
      );

};

export default Pokemon;