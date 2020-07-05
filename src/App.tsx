import React from "react";

import PokemonContextProvider from "./contexts/PokemonContext";

import Cart from "./components/Cart";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";

import "./styles/global.css";

function App() {
  return (
    <PokemonContextProvider>
      <Layout>
        <ProductList />
        <Cart />
      </Layout>
    </PokemonContextProvider>
  );
}

export default App;
