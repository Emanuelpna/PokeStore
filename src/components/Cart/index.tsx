import React, { useContext } from "react";

import CartItem from "../CartItem";

import S from "./Cart.module.css";

import { ICartItem } from "../../contexts/Cart";
import { CartContext } from "../../contexts/CartContext";

import Utils from "../../services/Utils";

const Cart = () => {
  const { getCart } = useContext(CartContext);

  return (
    <section className={S.CartContainer}>
      <h1 className={S.CartTitle}>Carrinho de Compras</h1>

      <ul className={S.CartListContainer}>
        {getCart().products.map((cartItem: ICartItem) => (
          <>
            <CartItem cartItem={cartItem} />
            {/* <CartItem cartItem={cartItem} />
            <CartItem cartItem={cartItem} />
            <CartItem cartItem={cartItem} />
            <CartItem cartItem={cartItem} />
            <CartItem cartItem={cartItem} /> */}
          </>
        ))}
      </ul>

      <div className={S.CartSummary}>
        <span className={S.CartSummaryTitle}>Preço:</span>
        <span className={S.CartSummaryValue}>
          {Utils.FormatNumber(getCart().totalPrice)}
        </span>

        {getCart().totalDiscount > 0 && (
          <>
            <span className={S.CartSummaryTitle}>Desconto:</span>
            <span className={S.CartSummaryValue}>
              {Utils.FormatNumber(getCart().totalDiscount)}
            </span>
          </>
        )}
      </div>

      <button className={S.CartButton}>Finalizar Compra</button>
    </section>
  );
};

export default Cart;
