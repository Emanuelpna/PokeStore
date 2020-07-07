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
    </>
  );
}

export default Home;
