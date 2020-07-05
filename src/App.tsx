import React from "react";

import CartContextProvider from "./contexts/CartContext";
import PokemonContextProvider from "./contexts/PokemonContext";

import Cart from "./components/Cart";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";

import "./styles/global.css";

function App() {
  return (
    <PokemonContextProvider>
      <CartContextProvider>
        <Layout>
          <ProductList />
          <Cart />
        </Layout>
      </CartContextProvider>
    </PokemonContextProvider>
  );
}

export default App;
