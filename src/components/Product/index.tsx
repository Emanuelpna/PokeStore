import React, { useState } from "react";

import S from "./Product.module.css";

import Utils from "../../services/Utils";

import { IPokemon } from "../../contexts/Pokemon";

const Product = ({
  id,
  name,
  price,
  sprites,
  isShiny,
  types,
  discount,
}: IPokemon) => {
  const [sprite, setSprite] = useState(0);

  const getNewSprite = () => {
    return setSprite((sprite + 1) % 2);
  };

  return (
    <div className={S.ProductContainer}>
      <div className={S.ProductDisplay}>
        <div className={S.ProductSpriteContainer}>
          <img
            className={S.ProductSprite}
            onMouseEnter={getNewSprite}
            onMouseLeave={getNewSprite}
            src={sprites[sprite]}
            alt=""
          />
        </div>
        <div className={S.ProductTitleContainer}>
          <strong className={S.ProductTitle}>{name}</strong>
          <ul className={S.ProductTypeList}>
            {types.map((type, index) => (
              <li
                className={`${S.ProductType} ${
                  types.length > 1 ? "" : S.Single
                }`}
                style={{ background: `var(--${type})` }}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className={`${S.ProductPrice}`}>
        {Utils.FormatNumber(price)}
      </span>

      {isShiny && <span className={S.Discount}>50% OFF</span>}

      <button className={S.ProductBuyButton}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;
