"use client";
import React from "react";
import { useCartStore } from "@/app/utils/store";
import { FaCheckCircle } from "react-icons/fa";

import type { Product } from "../utils/types";

export const CartItem = ({
  name,
  description,
  uuid,
  imageURL,
  price,
  quantity,
}: Product) => {
  const { count, add, remove, isInCart } = useCartStore();
  const product = { uuid, name, price, imageURL, quantity } as Product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="w-full"><img className="w-full max-h-[250px]" src={imageURL} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {isInCart(uuid) ? (
            <div className="flex items-center gap-2">
              <p className="text-success">Added to cart</p>
              <FaCheckCircle className="icon" size="26px" color="#00ca92" />
            </div>
          ) : (
            <button
              className="btn btn-primary cursor-pointer"
              onClick={() => add(product)}
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div >

    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img src={image} alt="Shoes" className="rounded-xl max-h-44 max-w-lg" />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">{name ? name : "Shoes!"}</h2>
    //     <p>
    //       {description
    //         ? description
    //         : "If a dog chews shoes whose shoes does he choose?"}
    //     </p>
    //     <div className="card-actions flex">
    //       {isInCart(id) ? (
    //         <FaCheckCircle className="icon" size="30px" color="green" />
    //       ) : (
    //         <button
    //           className="btn btn-primary cursor-pointer"
    //           onClick={() => add(product)}
    //         >
    //           Buy Now
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};
