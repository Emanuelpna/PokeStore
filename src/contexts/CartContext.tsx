import React, { ReactElement, useState } from "react";

// import Utils from "../services/Utils";
// import CharizardMock from "../services/CharizardMock";
import { IPokemon } from "./Pokemon";

export const CartContext = React.createContext({
  cart: {},
});

interface ICart {
  products: Array<IPokemon>;
  totalPrice: number;
  totalDiscount: number;
}

interface ICartProps {
  children: ReactElement;
}

export interface ICartContext {
  cart: ICart;
}

const CartContextProvider: React.FC<ICartProps> = ({ children }) => {
  const [cart, setCart] = useState<ICart>({
    products: [],
    totalPrice: 0,
    totalDiscount: 0,
  });

  const addProductsToCart = (products: Array<IPokemon>) => {
    const oldProducts = cart.products;

    const newProducts = [...oldProducts, ...products];

    const finalPrice = newProducts.reduce(
      (total, product) => total + product.price,
      0
    );

    const totalShinys = newProducts.reduce(
      (total, product) => (product.isShiny ? total++ : total),
      0
    );

    setCart({
      products: newProducts,
      totalPrice: finalPrice,
      totalDiscount: finalPrice / (0.5 * totalShinys)
    })
  };

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
