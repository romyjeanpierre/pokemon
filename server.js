const express = require("express");
const pokemon = require("./models/pokemon");

const jsxEngine = require("jsx-view-engine");
//require("dotenv").config();

// Create a variable 
const PORT = 3000;

// Create an instance of express
const app = express();

// Config app
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//Routes
app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    <a href='/pokemon'>View All</a>`);
  });



// Display Pokemon data 

app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon,
    });
  });


app.get("/pokemon/:id", (req, res) => {
    res.send(req.params.id);
  });
  

// Listen to the port
app.listen(PORT, () => {
    console.log(`Server running of port: ${PORT}`);
  });