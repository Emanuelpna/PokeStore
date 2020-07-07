import React, { useContext, useEffect, useState, useMemo } from "react";

import { PageContext } from "../../contexts/PageContext";
import { PokemonContext } from "../../contexts/PokemonContext";

import Product from "../Product";
import Loading from "../Loading";

import S from "./ProductList.module.css";
import Pagination from "../Pagination";

const ProductList = () => {
  const { pokemon, getAllPokemon, getPokemonByType } = useContext(
    PokemonContext
  );

  const { previousPage, nextPage, page, setPage } = useContext(PageContext);

  const [loading, setLoading] = useState(true);
  const [alreadyFetched, setAlreadyFetched] = useState(false);

  const emptyPokemonList = useMemo(
    () => pokemon.length === 0 && alreadyFetched,
    [pokemon, alreadyFetched]
  );
  const firstLoad = useMemo(() => pokemon.length === 0 && loading, [
    pokemon,
    loading,
  ]);

  useEffect(() => {
    (async () => {
      await getAllPokemon(page);

      setLoading(false);
      setAlreadyFetched(true);

      console.log(emptyPokemonList);
      console.log(firstLoad);
    })();
  }, [page]);

  return (
    <section className={S.ProductListContainer}>
      {firstLoad && !emptyPokemonList && <Loading />}

      {!firstLoad && emptyPokemonList && "Lista Vazia"}

      {!emptyPokemonList &&
        !firstLoad &&
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
