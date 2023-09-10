const React = require("react");

const viewList = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index(props) {
    const { pokemon } = props;
    console.log("pokemon");
    return (
      <div style={viewList}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((pm, i) => {
            const firstLet = pm.name.charAt(0);
            const firstLetCap = firstLet.toUpperCase();
            const restOfLetters = pm.name.slice(1);
            pm.name = firstLetCap + restOfLetters;
  
            return (
              <li key={i}>
                {pm.name} <br />
                <img src={pm.img} alt='Image' />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  module.exports = Index;