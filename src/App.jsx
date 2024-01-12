
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import Homepage from "./components/pages/Homepage";
import Footer from "./components/footer/Footer";
import Products from "./components/Product/Products";
import Signin from "./components/Login/Signin.jsx";
import Signup from "./components/Login/Signup.jsx"


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
            {/* Add a fallback route */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
