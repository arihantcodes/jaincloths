import { Fragment, useState } from "react";
import React from "react";

import Productxyz from "./Jeans";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store";

export default function Cloths() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const products = [...Productxyz];

  return (
    <div className="bg-white">
      {/* Product grid */}
      <div className="lg:col-span-3">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
             Women Jeans
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
              {products.map((product) => {
                const image = product.image;
                const brand = product.brand;
                const title = product.title;
                const discountedPrice = product.discountedPrice;
                const price = product.price;
                const id = product.id;

                return (
                  <div
                    key={id}
                    className="group relative border-2 overflow-hidden shadow-md shadow-slate-200"
                  >
                    <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="object-cover object-center w-full h-[368px]"
                      />
                    </div>
                    <div className=" mt-4 ml-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-md font-semibold text-gray-500">
                          {product.brand}
                          <br />
                          <a href="#" className=" text-gray-900">
                            {product.title}
                          </a>
                        </h3>
                        <div className="flex  items gap-4 mt-2">
                          <h4 className="text-md  text-gray-900 font-semibold">
                            ₹{product.discountedPrice}
                          </h4>
                          <h4 className="text-md text-gray-500 line-through">
                            ₹{product.price}
                          </h4>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-indigo-700 rounded-md font-semibold font-sans mb-4 mr-4 hover:bg-indigo-500 shadow-md text-white px-8 py-2 mt-3"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
