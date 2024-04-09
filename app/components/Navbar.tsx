"use client";
import React from "react";
import { useCartStore } from "@/app/utils/store";
import { CiTrash } from "react-icons/ci";
import { notrixProcess } from "../utils/notrixAction";
import notrixLogo from "@/public/favicon.png";
import Link from "next/link";
export const Navbar = () => {
  const { count, cart, total, remove } = useCartStore();

  return (
    <div className="navbar bg-base-100 justify-between pe-6">
      <Link href={"/"} className="cursor-pointer btn btn-ghost flex items-center">
        <img src={notrixLogo.src} alt="" width={"50px"} height={"50px"} />
        <p>Demo Store</p>
      </Link>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{count()}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow max-w-5xl"
          >
            <div className="card-body ">
              <span className="font-bold text-lg">{count()} Items</span>
              <span className="text-info">Subtotal: ${total()}</span>
              <ul className="menu bg-base-200 w-full p-0 [&_li>*]:rounded-none gap-2 ">
                {cart.length
                  ? cart.map((item, index) => (
                      <li className="border-2 rounded-lg" key={index}>
                        <div className="flex gap-2 justify-between ">
                          <div className="flex gap-2">
                            <img
                              src={item.imageURL}
                              className="max-h-10 max-w-10 rounded-xl"
                              alt={item.name}
                            />
                          </div>
                          <div className="flex  gap-4 items-center">
                            <p>{item.name}</p>

                            <p className="font-light">${item.price}</p>
                            <CiTrash onClick={() => remove(item.uuid)} />
                          </div>
                        </div>
                      </li>
                    ))
                  : "no Item"}
              </ul>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => notrixProcess(cart)}
                  disabled={cart.length < 1}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
