import React, { useState } from "react";


import { useDispatch } from "react-redux";
import { addToCart } from "../Store";
const Homecart = ({ Men}) => {
  
  
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(Men));
  };


  return (
    <>
    
  <div className="cursor-pointer flex-col flex items-center  w-[15rem] mx-5 bg-white rounded-lg shadow-lg overflow-hidden border">
 
    <div className="h-[13rem] w-[10rem] " >
     
      {Men && Men.image && (
        <img
          className="object-cover rounded-sm object-top w-full h-full"
          src={Men.image}
          alt=""
        />
      )}
    </div>

    <div className="p-5">
      {/* Check if Men is defined before accessing its properties */}
      {Men && (
        <>
          <h3 className="text-lg font-medium text-center text-gray-900 ">{Men.brand} </h3>
          <p className="mt-2 text-sm font-normal text-center text-gray-500 ">{Men.title}</p>
          <h3 className="font-semibold text-lg text-center">
            ₹{Men.discountedPrice}
            <span className="text-gray-500 ml-4 line-through text-center ">
              ₹{Men.price}
            </span>
          </h3>
        </>
      )}
    </div>
        
    <button
    className="bg-indigo-700 rounded-md font-semibold font-sans mb-4 hover:bg-indigo-500 shadow-md text-white px-6 py-2 mt-1"
    onClick={handleAddToCart}
  >
    Add to Cart
  </button>
  </div>
  
</>

  );
};

export default Homecart;
