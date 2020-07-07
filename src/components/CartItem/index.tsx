import React, { useContext } from "react";

import S from "./CartItem.module.css";

import { IPokemon } from "../../contexts/Pokemon";
import { CartContext, ICartItem } from "../../contexts/CartContext";

import Utils from "../../services/Utils";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
//   const [cartQuantity, setCartQuantity] = useState(0);

  const { changeCartItems } = useContext(CartContext);

  const addToCart = (product: IPokemon) => {
    changeCartItems(product, "ADD");
  };

//   const setQuantityForItemOnCart = (product: IPokemon, quantity: number) => {
//     changeCartItems(product, "SET", quantity);
//   };

  const removeFromCart = (product: IPokemon) => {
    changeCartItems(product, "REMOVE");
  };

  return (
    <li className={S.CartItemContainer}>
      <img src={cartItem.sprites[0]} alt="" />

      <div className={S.CartItemInfoContainer}>
        <div>
          <span className={S.CartItemTitle}>{cartItem.name}</span> - {cartItem.quantity}x (0 shinys)
        </div>
        <div>{Utils.FormatNumber(cartItem.price)}</div>
      </div>

      <button className={S.CartItemButton} onClick={() => addToCart(cartItem)}>
        +
      </button>

      {/* <input
        type="text"
        onChange={(e) => {
          setQuantityForItemOnCart(cartItem, Number(e.target.value));
          setCartQuantity(Number(e.target.value));
        }}
        value={cartQuantity}
      /> */}

      <button
        className={S.CartItemButton}
        onClick={() => removeFromCart(cartItem)}
      >
        -
      </button>
    </li>
  );
};

export default CartItem;
