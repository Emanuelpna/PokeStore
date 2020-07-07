import React from "react";

import CartContextProvider from "./contexts/CartContext";
import PokemonContextProvider from "./contexts/PokemonContext";

import Home from "./pages/Home";

import "./styles/global.css";

function App() {
  return (
    <PokemonContextProvider>
      <CartContextProvider>
        <Home />
      </CartContextProvider>
    </PokemonContextProvider>
  );
}

export default App;
