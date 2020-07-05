import React, { useContext, useEffect, useState } from "react";

import { PokemonContext } from "../../contexts/PokemonContext";

import Product from "../Product";

import S from "./ProductList.module.css";

const ProductList = () => {
  const { getAllPokemon, getPokemonByType } = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const result = await getAllPokemon(50);
      setPokemon(result);
    })();
  }, [getAllPokemon]);

  return (
    <section className={S.ProductListContainer}>
      {pokemon.map(
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
    </section>
  );
};

export default ProductList;
