import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import books from "./BookAPI";
import "./search.css";
import Navbar from "./Navbar";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useCartStore, useWishStore } from "../store/cartStore";

const Search = () => {
  const [bookData, setBookData] = useState(books);
  const [searchData, setSearchData] = useState(bookData);
  const [wishList, setWishList] = useState([0]);
  const [wish, setWish] = useState(wishList);
  const cartStore = useCartStore((state) => state);
  const { addWishItem, wishItems,removeWishItem } = useWishStore((state) => state);

  const navigate = useNavigate();

  const gOToAbout = (cur: any) => {
    navigate(`/details?id=${cur}`, { state: { id: cur } });
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("WishList", JSON.stringify(wishList));
  });

  const handelChange = (e: any) => {
    const searchItem = bookData.filter((f) => {
      return f.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchData(searchItem);
  };
  console.log(wishItems)

  return (
    <>
      {/* <Navbar/> */}
      <div className="search-home">
        <div className="search-bar">
          <div className="search-box">
            <div className="heading">
              <span className="span">Search</span>
            </div>
            <form className="search">
              <input
                className="input"
                type="text"
                onChange={handelChange}
                placeholder="Enter Book Name"
              />
              <SearchRoundedIcon className="search-icon" />
            </form>
            <div className="home-icon">
              <Link to="/">
                <HomeIcon className="home" />
              </Link>
            </div>
          </div>
        </div>

        <div className="home">
          <div className="products">
            {searchData.map((e) => {
              const curprice = (e.price - (e.price * e.discount) / 100).toFixed(
                1,
              );

              return (
                <>
                  <div className="product">
                    <div >
                      <div className="image">
                        <FavoriteIcon className={wishItems.includes(e.key)?"wishRed-icon":"wish-icon"} onClick={() =>
                        {
                          wishItems.includes(e.key)?removeWishItem(e.key): addWishItem(e.key)
                        }
                           
                          }
                        />
                        <img src={e.image_link} alt="image" onClick={() => gOToAbout(e.key)} />
                      </div>
                      <div className="details" onClick={() => gOToAbout(e.key)} >
                        <h2 className="title">{e.title}</h2>
                        <div className="price-box">
                          <span className="cur-price">₹{curprice}</span>
                          <span className="total-price">₹{e.price}</span>
                          <div className="discount">( {e.discount}% OFF )</div>
                        </div>
                      </div>
                    </div>
                    <div className="button" onClick={() => {
                      cartStore.items.includes(e.key)
                        ? cartStore.removeFromCart(e.key)
                        : cartStore.addToCart(e.key);
                    }}>
                      {cartStore.items.includes(e.key)
                        ? "REMOVE FROM CART"
                        : "ADD TO CART"}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>

    //  <div onClick={GOToAbout}>Home</div>
  );
};

export default Search;
