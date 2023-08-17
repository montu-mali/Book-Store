import React, { useState } from "react";
import books from "./BookAPI";
import { useNavigate } from "react-router-dom";
import "./library.scss";
import Footer from "./Footer";
import { useCartStore } from "../store/cartStore";

const unicList = [
  "All",
  Array.from(
    new Set(
      books.map((curElem) => {
        return curElem.category;
      }),
    ),
  ),
];
const dataArray = unicList.flat();

const Library = () => {
  const [allBooks, setAllBooks] = useState(books);
  const [allCategory, setAllCategory] = useState(dataArray);
  const [dataCat, setDatacat] = useState(allBooks);
  const [catName, setCatName] = useState("All");
  const [filerSlide, setFilterSlide] = useState(false);
  const cartStore = useCartStore((state) => state);

  const navigate = useNavigate();

  const gOToAbout = (cur: any) => {
    navigate(`/details?id=${cur}`, { state: { id: cur } });
    window.scrollTo({
      top: 0,
    });
  };

  const changeCatagory = (category: any) => {
    setCatName(category);

    if (category === "All") {
      setDatacat(allBooks);
      return;
    }
    const filterCat = allBooks.filter((curElem) => {
      return curElem.category === category;
    });
    setDatacat(filterCat);

    window.scrollTo({
      top: 0,
    });
  };

  const filterClear = () => {
    setDatacat(allBooks);
    setCatName("All");
    window.scrollTo({
      top: 0,
    });
    setFilterSlide(false);
  };

  return (
    <>
      <div className="library-box">
        <div className="library">
          <div className={filerSlide ? "mobile-filter filter" : "filter"} onClick={() => setFilterSlide(false)}>
            <div className="header">
              <span className="head">Filter</span>
              <span className="clear-all" onClick={filterClear}>
                Clear All
              </span>
            </div>
            <div className="all-filter" >
              <div className="category-box">
                <span>Category</span>
                <ul>
                  {allCategory.map((e) => {
                    return (
                      <>
                        <li className={e} onClick={() => changeCatagory(e)}>
                          {e}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="price-box">
                <span className="head">Price</span>
                <ul>
                  <li>
                    <label htmlFor="">
                      <input type="checkBox" disabled/>
                      <span className="price">Under-₹500</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="" >
                      <input type="checkBox" disabled/>
                      <span className="price">₹500-₹999</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="">
                      <input type="checkBox" disabled />
                      <span className="price">₹1000-₹1499</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="">
                      <input type="checkBox" disabled/>
                      <span className="price">₹1500-₹1999</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="">
                      <input type="checkBox" disabled/>
                      <span className="price">Above-₹2000</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="book-box">
            <div className="heading">
              <div className="filter-icon" onClick={() => setFilterSlide(true)}>
                Filter
              </div>
              <div className="head">{catName}</div>
            </div>
            <div className="books">
              {dataCat.map((e) => {
                const curprice = (
                  e.price -
                  (e.price * e.discount) / 100
                ).toFixed(1);
                return (
                  <>
                    <div className="product" onClick={() => gOToAbout(e.key)}>
                      <div>
                        <div className="image">
                          <img src={e.image_link} alt="image" />
                        </div>
                        <div className="details">
                          <h2 className="title">{e.title}</h2>
                          <div className="price-box">
                            <span className="cur-price">₹{curprice}</span>
                            <span className="total-price">₹{e.price}</span>
                            <div className="discount">
                              ( {e.discount}% OFF )
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="button" onClick={() => {
                        cartStore.items.includes(e.key)
                          ? cartStore.removeFromCart(e.key)
                          : cartStore.addToCart(e.key);
                      }}>
                        {cartStore.items.includes(e.key)
                          ? "REMOVE FROM CART"
                          : "ADD TO CART"}
                      </div> */}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
