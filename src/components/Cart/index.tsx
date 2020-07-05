import React, { useContext, useState } from "react";

import { IPokemon } from "../../contexts/Pokemon";
import { CartContext, ICartItem } from "../../contexts/CartContext";

import Utils from "../../services/Utils";

const Cart = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const { getCart, changeCartItems } = useContext(CartContext);

  const addToCart = (product: IPokemon) => {
    changeCartItems(product, "ADD");
  };

  const setQuantityForItemOnCart = (product: IPokemon, quantity: number) => {
    changeCartItems(product, "SET", quantity);
  };

  const removeFromCart = (product: IPokemon) => {
    changeCartItems(product, "REMOVE");
  };

  return (
    <section
      style={{
        marginTop: "60px",
        width: "35%",
        marginLeft: "auto",
        boxShadow: "0 2px 6px #3d3d4f24",
        background: "#fff",
        borderRadius: "10px",
        padding: "10px 12px",
      }}
    >
      <h1>Carrinho</h1>
      <ul>
        {getCart().products.map((cartItem: ICartItem) => (
          <li
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
            }}
          >
            <img src={cartItem.sprites[0]} alt="" />
            <div style={{ marginLeft: "12px" }}>
              <div>
                {cartItem.name} - {cartItem.quantity}x ({shinyCount} shinys)
              </div>
              <div>{Utils.FormatNumber(cartItem.price)}</div>
            </div>
            <button onClick={() => addToCart(cartItem)}>+</button>
            <input
              type="text"
              onChange={(e) => {
                setQuantityForItemOnCart(cartItem, Number(e.target.value));
                setCartQuantity(Number(e.target.value));
              }}
              value={cartQuantity}
            />
            <button onClick={() => removeFromCart(cartItem)}>-</button>
          </li>
        ))}
      </ul>
      <div>Preço: {Utils.FormatNumber(getCart().totalPrice)}</div>
      {getCart().totalDiscount > 0 && (
        <div>Desconto: {Utils.FormatNumber(getCart().totalDiscount)}</div>
      )}
      <button>Finalizar Compra</button>
    </section>
  );
};

export default Cart;
