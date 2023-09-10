const express = require("express");
const Pokemon = require("./models/pokemons");
const pokemon = require("./models/pokemon");
const database = require('./config/database');
const jsxEngine = require("jsx-view-engine");
require("dotenv").config();

// Create a variable 
const PORT = 3000;

// Create an instance of express
const app = express();

// Config app
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());


// Middleware
app.use((req, res, next) => {
    console.log(`Requested - ${req.method}: ${req.url}`);
    next();
    });
  app.use(express.urlencoded({ extended: false }));
  


//Routes
app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    <a href='/pokemon'>View All</a>`);
  });



// Display Pokemon data 

app.get("/pokemon", async (req, res) => {
    try {
      let pokemonFromDB = await Pokemon.find({});
      console.log(pokemonFromDB);
  
      if (!pokemonFromDB.length)
        pokemonFromDB = await Pokemon.insertMany(pokemon);
  
      res.render("Index", {
        pokemon: pokemonFromDB,
      });
    } catch (error) {
      console.log("Error in fetching the Pokemon: ", error);
    }
  });


//New Page 
app.get("/pokemon/new", (req, res) => {
    res.render("New", {});
  });


//create a new pokemon in the database
  app.post("/pokemon", async (req, res) => {
    try {
      const createdPokemon = await Pokemon.create(req.body);
      console.log("Created: ", createdPokemon);
  
      // Redirect user
      res.redirect("/pokemon");
    } catch (error) {
      console.log("Error creating Pokemon: ", error);
    }
  });



  /*app.get("/pokemon/:id", async (req, res) => {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    res.render("Show", {
      pokemon: pokemon [id],
    });
  }); */

//display Pokemon 
app.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;

    res.render('Show', {
        pokemon: pokemon[id]
    });
});
  

database();
// Listen to the port
app.listen(PORT, () => {
    console.log(`Server running of port: ${PORT}`);
  });