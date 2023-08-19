import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, NavLink, useNavigate, Route } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { useAddressStore, useCartStore, useSaveForLater, useWishStore } from "../store/cartStore";
import bookLogo from '../assets/bookLogo.svg'



const Navbar = () => {
  const [navNalue, setNavValue] = useState(false);
  const goTo = useNavigate();
  const { items, addBooks } = useCartStore((state) => state);
  const { item, addSaveBooks } = useSaveForLater((state) => state);
  const { address, addLocalAddress } = useAddressStore((state) => state)
  const { wishItems, addedItems } = useWishStore((state) => state);

  const toSearch = () => {
    goTo("/search");
  };

  const navbarTogal = () => {
    setNavValue(true);
  };
  const navbarClose = () => {
    setNavValue(false);
  };

  useEffect(() => {
    if (items.length !== 0) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    if (item.length !== 0) {
      localStorage.setItem("SaveItems", JSON.stringify(item));
    }
  }, [item]);

  useEffect(() => {
    if (address.length !== 0) {
      localStorage.setItem("SaveAddress", JSON.stringify(address));
    }
  }, [address]);

  useEffect(() => {
    if(wishItems.length!==0){
      localStorage.setItem("saveWishItems", JSON.stringify(wishItems));
    }
  }, [wishItems])

  useEffect(() => {
    addBooks(JSON.parse(localStorage.getItem("cartItems") as any) || []);
    addSaveBooks(JSON.parse(localStorage.getItem("SaveItems") as any) || []);
    addLocalAddress(JSON.parse(localStorage.getItem("SaveAddress") as any) || []);
    addedItems(JSON.parse(localStorage.getItem("saveWishItems") as any) || [])
  }, []);

  console.log((JSON.parse(localStorage.getItem("saveWishItems") as any) || []))
  console.log((JSON.parse(localStorage.getItem("cartItems") as any) || []))


  return (
    <>
      <nav>
        <div className="navbar">
          <div className="header">
            <img
              src={bookLogo}
              alt=""
            />
          </div>
          <div className="tools">
            <ul className="tool">
              {/* <li className='Home'>Home</li> */}
              <Link  className="link" to="/">
                {" "}
                <li className="Home">Home</li>
              </Link>
              <Link className="link" to="/library">
                <li className="Category">Library</li>
              </Link>
              <Link className="link" to="about">
                <li className="About">About us</li>
              </Link>
              <Link className="link" to="/privacy-policy">
                <li className="Privacy">Privacy Policy</li>
              </Link>
              <Link className="link" to="./replacement-policy">
                <li className="Replacement">Replacement Policy</li>
              </Link>
            </ul>
            <div className="menu" onClick={navbarTogal}>
              <MenuIcon className="icon" />
            </div>
          </div>
          <div
            className={navNalue ? "nav-tools" : "close-tools"}
            onClick={() => {
              setNavValue(false);
            }}
          >
            <div className="tool-head">
              <div className="menu">Menu</div>
              <div className="cross" onClick={navbarClose}>
                <CloseRoundedIcon />
              </div>
            </div>
            <ul className="list">
              <Link className="link" to="/">
                <li className="">Home</li>
              </Link>
              <Link className="link" to="/library">
                <li className="">Library</li>
              </Link>
              <Link className="link" to="/cart">
                <li className="">Cart</li>
              </Link>
              <Link className="link" to="/contact">
                <li className="">Contact Us</li>
              </Link>
              <Link className="link" to="/about">
                <li className="">About us</li>
              </Link>
              <Link className="link" to="/privacy-policy">
                <li className="">Privacy Policy</li>
              </Link>
              <Link className="link" to="./replacement-policy">
                <li className="Replacement">Replacement Policy</li>
              </Link>
              <Link className="link" to="./terms-and-conditions">
                <li className="">Terms & Conditions</li>
              </Link>
              <Link className="link" to="/account">
                <li className="">Account</li>
              </Link>
            </ul>
          </div>

          <div className="search">
            <Link to="/search">
              <SearchRoundedIcon className="s-icon" />
            </Link>
          </div>
          <div className="icons">
            <ul>
              <li className="searchs">
                <Link className="link" to="/search">
                  <SearchRoundedIcon className="iconss" />
                </Link>
              </li>
              <li className="home">
                <Link className="link" to="/">
                  <HomeIcon className="icon" />
                </Link>
              </li>
              <li className="heart">
                <Link className="link" to="./library">
                  <LibraryBooksOutlinedIcon className="icon" />
                </Link>
              </li>
              <li className="card">
                <span className="count">{items.length}</span>
                <Link className="link" to="/cart">
                  <ShoppingCartOutlinedIcon className="icon" />
                </Link>
              </li>
              <li className="user">
                <Link className="link" to="/account">
                  <PermIdentityOutlinedIcon className="icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
