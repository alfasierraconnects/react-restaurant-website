import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Footer/DownloadApp";

const App = () => {
  return (
    <>
      <div className="App min-h-screen">
        <div className="w-[80%] m-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
      </div>
      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
