import React from "react";

import Utils from "../../services/Utils";

import { IPokemon } from "../../contexts/Pokemon";

const Product = ({ id, name, price, sprites, isShiny, types, discount }: IPokemon) => {
  return (
    <div style={{background: "#000", margin: "20px", width: "450px", marginTop: "50px", color: '#fff'}}>
      <img style={{marginTop: "-50px", display: "inline-block"}} src={sprites[0]} alt="" />
      <img style={{marginTop: "-50px", display: "inline-block"}} src={sprites[1]} alt="" />
      <strong>{name}</strong>
      <span>{Utils.FormatNumber(price)}</span>
      <ul>
        {types.map(type => <li>{type}</li>)}
      </ul>
      {isShiny && "  É SHINYYY"}
    </div>
  );
};

export default Product;
