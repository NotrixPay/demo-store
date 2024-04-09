import React from "react";
import { CartItem } from "./CartItem";
import { fakeProducts } from "../utils/fakeData";
export const CartItems = () => {
  return (
    <div className=" p-4 grid grid-cols-1  justify-items-center gap-8  md:grid-cols-2 md:gap-x-20 xl:grid-cols-3 ">
      {fakeProducts.map((product) => (
        <CartItem {...product} key={product.uuid} />
      ))}
    </div>
  );
};
