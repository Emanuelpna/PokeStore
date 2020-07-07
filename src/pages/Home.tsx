import React from "react";

import Cart from "../components/Cart";
import Search from "../components/Search";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <Search />
      <Layout>
        <ProductList />
        <Cart />
      </Layout>
      <footer style={{ width: "100%", textAlign: "center", margin: "4rem 0" }}>
        Feito por Emanuel Andrade.
      </footer>
    </>
  );
};

export default Home;
