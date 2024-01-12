import React from "react";
import Home from "../home/Home";
import { Women } from "../data/Women.jsx";
import Cartslide from "../cartcaresol/Cartslide.jsx";
import Men from "../data/Men.jsx";
import { Lenga } from "../data/Lenga.jsx";
import { Dress } from "../data/Jeans.jsx";

const Homepage = () => {
  return (
    <div>
      <Home />

      <div className="space-y-10 py-20 flex flex-col justify-center">
        <Cartslide data={Men} sectionName={"Mens Kurta"} />
        <Cartslide data={Women} sectionName={"Women Kurta"} />
        <Cartslide data={Lenga} sectionName={"Women Lehenga"} />
        <Cartslide data={Dress} sectionName={"Girl Top"} />
      </div>
    </div>
  );
};

export default Homepage;
