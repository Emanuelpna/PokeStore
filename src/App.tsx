import React from "react";

import PokemonContextProvider from "./contexts/PokemonContext";

import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <PokemonContextProvider>
      <div className="App">
        <ProductList />
        <Cart />
      </div>
    </PokemonContextProvider>
  );
}

export default App;
