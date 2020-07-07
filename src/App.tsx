import React from "react";

import CartContextProvider from "./contexts/CartContext";
import PageContextProvider from "./contexts/PageContext";
import PokemonContextProvider from "./contexts/PokemonContext";

import Home from "./pages/Home";

import "./styles/global.css";

function App() {
  return (
    <PokemonContextProvider>
      <PageContextProvider>
        <CartContextProvider>
          <Home />
        </CartContextProvider>
      </PageContextProvider>
    </PokemonContextProvider>
  );
}

export default App;
