const React = require("react");

function New() {
  return (
    <div>
      <h1>Add Pokemon</h1>

      <form action='/pokemon' method='POST'>
        Name: <input type='text' name='name' />
        <br />
        Image: <input type='text' name='img' />
        <br />
        <input type='submit' name='' value='Create Pokemon' />
      </form>
    </div>
  );
}

module.exports = New;