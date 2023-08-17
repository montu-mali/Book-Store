import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import books from "./BookAPI";
import "./similar.scss";


const Similar = (props: any) => {
  const [bookData, setBookData] = useState(books);

  const simiItem = bookData.filter((cur) => {
    return cur.category === props.category;
  });

  const navigate = useNavigate();

  const gOToAbout = (cur: any) => {
    navigate(`/details?id=${cur}`, { state: { id: cur } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="similar-product">
        <h2 className="simi-head">{props.title}</h2>
        <div className="product-box">
          <div
            // slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            className="products"
          >
            {simiItem.map((cur: any) => {
              const curprice = (
                cur.price -
                (cur.price * cur.discount) / 100
              ).toFixed(0);

              return (
                <div className="product" onClick={() => gOToAbout(cur.key)}>
                  <div className="image">
                    <img src={cur.image_link} alt="image" />
                  </div>
                  <div className="details">
                    <h2 className="title">{cur.title}</h2>
                    <div className="price-box">
                      <span className="cur-price">₹{curprice}</span>
                      <span className="total-price">₹{cur.price}</span>
                      <div className="discount">( {cur.discount}% OFF )</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Similar;
