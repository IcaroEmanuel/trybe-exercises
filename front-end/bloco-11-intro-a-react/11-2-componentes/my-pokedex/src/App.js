import './App.css';
import Pokedex from './pokemon/Pokedex';
import data from './data';
function App() {
  return (
    <div className="App">
      <Pokedex pokemon={ data } />
    </div>
  );
}

export default App;
