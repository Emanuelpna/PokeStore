import React, { useContext, useEffect, useState } from "react";

import { PokemonContext } from "../../contexts/PokemonContext";

import Product from "../Product";

const ProductList = () => {
  const { getAllPokemon, getPokemonByType } = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const result = await getAllPokemon(10);
      setPokemon(result);
    })();
  }, [getAllPokemon]);

  return (
    <>
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
    </>
  );
};

export default ProductList;
