import React from "react";
import ReactDOM from "react-dom";
import Overview from "./Overview";
import Button from "../Button";

const Homecart = ({ Men }) => {
  const handleView = () => {
    // Open a new window
    const newWindow = window.open("", "_blank");

    // Include Tailwind CSS in the new window
    const styleLink = newWindow.document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.type = "text/css";
    styleLink.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.css";
    newWindow.document.head.appendChild(styleLink);

    // Pass the Men data to the new window
    newWindow.Men = Men;

    // Set the title of the new window
    newWindow.document.title = "Product Overview";

    // Create a container div for the Overview component
    const container = newWindow.document.createElement("div");
    newWindow.document.body.appendChild(container);

    // Render the Overview component in the container
    ReactDOM.render(<Overview />, container);

    // Focus the new window
    newWindow.focus();
  };

  return (
    <>
      <div className="cursor-pointer flex-col flex items-center w-[15rem] mx-5 bg-white rounded-lg shadow-lg overflow-hidden border">
        <div className="h-[13rem] w-[10rem]" onClick={handleView}>
          <img
            className="object-cover rounded-sm object-top w-full h-[14rem]"
            src={Men.image}
            alt=""
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 ">{Men.brand} </h3>
          <p className="mt-2 text-sm font-normal text-gray-500 ">{Men.title}</p>
          <h3 className="font-semibold text-lg">
            ₹{Men.discountedPrice}
            <span className="text-gray-500 ml-4 line-through ">
              ₹{Men.price}
            </span>
          </h3>
        </div>
        <Button />
      </div>
    </>
  );
};

export default Homecart;
