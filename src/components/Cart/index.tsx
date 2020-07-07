import React, { useContext, useState, useMemo } from "react";

import CartItem from "../CartItem";
import PaymentSucessfull from "../PaymentSucessfull";

import S from "./Cart.module.css";

import { ICartItem } from "../../contexts/Cart";
import { CartContext } from "../../contexts/CartContext";

import Utils from "../../services/Utils";

const Cart = () => {
  const { getCart, doPayment } = useContext(CartContext);

  const [payment, setPayment] = useState(false);

  const cart = useMemo(() => getCart(), [getCart]);

  return (
    <section className={S.CartContainer}>
      <h1 className={S.CartTitle}>Carrinho de Compras</h1>

      <ul className={S.CartListContainer}>
        {cart.products.map((cartItem: ICartItem) => (
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
          {Utils.FormatNumber(cart.totalPrice)}
        </span>

        {cart.totalDiscount > 0 && (
          <>
            <span className={S.CartSummaryTitle}>Desconto:</span>
            <span className={S.CartSummaryValue}>
              {Utils.FormatNumber(cart.totalDiscount)}
            </span>
          </>
        )}
      </div>

      <button
        onClick={() => {
          if (cart.products.length > 0) {
            doPayment();
            setPayment(true);
          }
        }}
        className={S.CartButton}
      >
        Finalizar Compra
      </button>

      {payment && <PaymentSucessfull setPayment={setPayment} />}
    </section>
  );
};

export default Cart;
