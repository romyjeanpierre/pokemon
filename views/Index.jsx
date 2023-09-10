const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};



function capFirstLet(string){
    return string[0].toUpperCase() + string.slice(1);
}



function Index ({pokemon}){
    return (<div style={myStyle}>
        <h1> List of Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon, i) => {
                    return(
                        <li>
                            {capFirstLet(pokemon.name)}
                        </li>)
                })
            }
        </ul>
    </div>)
}

module.exports = Index;