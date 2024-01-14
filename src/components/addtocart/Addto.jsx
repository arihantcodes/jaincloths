import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);

  const calculateTotalPrice = () => {
    // Calculate the total price logic here based on cartItems
  };

  const calculateTotalCost = () => {
    // Calculate the total cost logic here based on cartItems and shipping
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="text-md font-semibold text-gray-600">
        <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
        <div className="hidden md:block">Product Details</div>
        <div className="text-center ">Quantity</div>
        <div className="text-center">Price</div>
        <div className="text-center">Total</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="mb-4">
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center mb-2 md:mb-0">
                <img
                  className="h-20 w-20 object-cover rounded mr-4"
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src =
                      "https://rukminim1.flixcart.com/image/612/612/krme93k0/lehenga-choli/9/t/e/free-half-sleeve-ghaghra-choli-coconut-original-imag5df5ktsnnypv.jpeg?q=70";
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-sm">{item.title}</span>
                  <Link
                    to="#"
                    className="text-gray-500 text-xs hover:text-red-500"
                  >
                    Remove
                  </Link>
                </div>
              </div>

              <div className="flex   md:w-3/5 mt-2 md:mt-0">
              <button className="text-gray-600 mx-2 focus:outline-none">
              <svg
                className="fill-current w-6 cursor-pointer"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </button>
            <input
              className="mx-2 border text-center w-12"
              type="text"
              defaultValue="1"
            />
            <button className="text-gray-600 mx-2 focus:outline-none">
              <svg
                className="fill-current w-6 cursor-pointer"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </button>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-sm">Price: ₹{item.discountedPrice}</span>
              <span className="text-sm">Total: ₹{item.discountedPrice}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <Link
          to="/"
          className="text-indigo-600 text-sm flex items-center mb-4 md:mb-0"
        >
          <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>

        <div
          id="summary"
          className="w-full md:w-1/4 px-4 py-8 mb-7 bg-gray-100 rounded-lg"
        >
          <h1 className="font-semibold text-2xl border-b pb-4">
            Order Summary
          </h1>
          <div className="flex flex-col md:flex-row justify-between mt-6 mb-4">
            <span className="text-sm uppercase">Items {cartItems.length}</span>
            <span className="text-sm">${calculateTotalPrice()}</span>
          </div>
          <div>
            <label className="font-medium mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm border">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-6">
            <label
              htmlFor="promo"
              className="font-semibold mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full border"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 text-sm text-white uppercase w-full mb-4 rounded-md">
            Apply
          </button>
          <div className="border-t">
            <div className="flex font-semibold justify-between py-4 text-sm uppercase">
              <span>Total cost</span>
              <span>${calculateTotalCost()}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 px-6 py-3 text-sm text-white uppercase w-full rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;