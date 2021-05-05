import AllPokemon from './containers/AllPokemon';

const App = () => {

  return (
    <div className="App" class="text-center text-3xl m-10">
      Personal Pokedex
      <div class="text-2xl m-10">
        <AllPokemon />
      </div>
    </div>
  );
    
};

export default App;
