import logo from './logo.svg';
import './App.css';

import Pokedex from './components/pokedex';

function App() {
  /*
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const pokemonID = getRandomInt(1, 152);
  console.log(pokemonID);
  */
  
  return (
    <div className="App">
      <div className="App-header">
        <Pokedex  />
      </div>
    </div>
  );
}

export default App;


/*
<div className="App">
      <header className="App-header">
        <Pokedex pokemonID={pokemonID} />
      </header>
    </div>

*/