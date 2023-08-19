import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Component/Search";
import Details from "./Component/Details";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Privacy from "./Component/Privacy";
import Library from "./Component/Library";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Account from "./Component/Account";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Shipping from "./Component/Shipping";
import Replacement from "./Component/Replacement";
import WishList from "./Component/WishList";
import Terms from "./Component/Terms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" Component={Home} />
        <Route path="/search" Component={Search} />
        <Route path="/details" Component={Details} />
        <Route path="/cart" Component={Cart} />
        <Route path="/privacy-policy" Component={Privacy} />
        <Route path="/replacement-policy" Component={Replacement} />
        <Route path="/shipping-policy" Component={Shipping} />
        <Route path="/terms-and-conditions" Component={Terms} />
        <Route path="/library" Component={Library} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/account" Component={Account} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
    
  );
}

export default App;
