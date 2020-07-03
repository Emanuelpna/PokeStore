import React, { useContext, useEffect, useState } from "react";

import { PokemonContext } from "../../contexts/PokemonContext";

import Product from "../Product";

const ProductList = () => {
  const { getAllPokemon } = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const result = await getAllPokemon();
      setPokemon(result);
    })();
  }, [getAllPokemon]);

  return (
    <>
      {pokemon.map((poke: any) => (
        <Product
          name={poke.name}
          sprites={poke.sprites}
          price={poke.price}
          isShiny={poke.isShiny}
        />
      ))}
    </>
  );
};

export default ProductList;
