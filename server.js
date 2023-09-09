const express = require("express");


// Create a variable 
const PORT = 3000;

// Create an instance of express
const app = express();
 app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})


// Listen to the port
app.listen(PORT, () => {
    console.log(`Server running of port: ${PORT}`);
  });