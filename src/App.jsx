
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import Homepage from "./components/pages/Homepage";
import Footer from "./components/footer/Footer";
import Products from "./components/Product/Products";
import Signin from "./components/Login/Signin.jsx";
import Signup from "./components/Login/Signup.jsx"
import Addto from "./components/addtocart/Addto.jsx";
import Cloths from "./components/Product/Cloths.jsx";
import Dress2 from "./components/Product/Dress2.jsx";
import Saree from "./components/Product/Saree2.jsx";


function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Addto />} />
            <Route path="/pants" element={<Cloths />} />
            <Route path="/dress" element={<Dress2 />} />
            <Route path="/saree" element={<Saree />} />
           
            {/* Add a fallback route */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
