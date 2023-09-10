const React = require('react');

function Show({pokemon}){
    const pokemonUrl = pokemon.img + '.jpg';

    console.log(pokemonUrl);

    return(<div>
        <h1>Gotta Catch 'Em All'</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemonUrl} alt={pokemon.name}/>
        <a href='/pokemon'>Back</a>
    </div>)
}

module.exports = Show;