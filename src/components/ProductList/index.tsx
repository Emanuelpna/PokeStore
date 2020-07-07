import React, { useContext, useEffect, useState, useMemo } from "react";

import { PageContext } from "../../contexts/PageContext";
import { PokemonContext } from "../../contexts/PokemonContext";
import { LoadingContext } from "../../contexts/LoadingContext";

import Product from "../Product";
import Loading from "../Loading";

import S from "./ProductList.module.css";
import Pagination from "../Pagination";

const ProductList = () => {
  const { pokemon, getAllPokemon, getPokemonByType } = useContext(
    PokemonContext
  );
  const { loading, openLoading, closeLoading } = useContext(LoadingContext);
  const { page, typeOfPage } = useContext(PageContext);

  const [alreadyFetched, setAlreadyFetched] = useState(false);

  const emptyPokemonList = useMemo(
    () => pokemon.length === 0 && alreadyFetched,
    [pokemon, alreadyFetched]
  );


  useEffect(() => {
    (async () => {
      if(typeOfPage === "LIST") {
        openLoading();
  
        await getAllPokemon(page);
  
        closeLoading();
        setAlreadyFetched(true);
      }
    })();
  }, [page]);

  return (
    <section className={S.ProductListContainer}>
      {loading && !emptyPokemonList && <Loading />}

      {!loading && emptyPokemonList && "Lista Vazia"}

      {!emptyPokemonList &&
        !loading &&
        pokemon.map(
          ({ id, name, sprites, types, price, discount, isShiny }: any) => (
            <Product
              key={id}
              id={id}
              name={name}
              sprites={sprites}
              types={types}
              discount={discount}
              price={price}
              isShiny={isShiny}
            />
          )
        )}
      <Pagination />
    </section>
  );
};

export default ProductList;
