import React from "react";

import { IPokemon } from "../../contexts/PokemonContext";

const Product = ({ name, price, sprites, isShiny }: IPokemon) => {
  return (
    <div>
      <img src={sprites[0]} alt="" />
      <img src={sprites[1]} alt="" />
      <strong>{name}</strong>
      <span>{price}</span>
      {isShiny && "É SHINYYY"}
    </div>
  );
};

export default Product;
