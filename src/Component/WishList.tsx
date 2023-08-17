import React, { useState, useEffect } from "react";
import "./wishlist.scss";
import emptyWishList from "../assets/emptyWishList.png";
import { useWishStore } from "../store/cartStore";
import API from "./BookAPI";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const { wishItems, removeWishItem } = useWishStore((state) => state)
  const [wishItem, setWishItem] = useState<any[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    const saveWishItems = wishItems.map((item: any) =>
      API.find((e) => e.key === item)
    )
    setWishItem(saveWishItems);
  }, [wishItems])

  const gOToAbout = (cur: any) => {
    navigate(`/details?id=${cur}`, { state: { id: cur } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="wish-list">
        {
          wishItems.length ? (<div className="save-list">
            <div className="header">
              <h3>My Wishlist ({wishItems.length})</h3>
            </div>
            <div className="wish-book">
              {
                wishItem.map((e) => {
                  return (
                    <div className="book-delet">
                      <div className="book" onClick={() => gOToAbout(e.key)}>
                        <div className="image">
                          <img src={e.image_link} alt="" />
                        </div>
                        <div className="detail">
                          <div className="title">
                            <span className="head">{e.title}</span>
                          </div>
                          <div className="price">
                            <span className="cur-price">₹{Number(e?.price - (e?.price * e?.discount) / 100)}</span>
                            <span className="total-price">₹{e?.price}</span>
                            <span className="discount">( {e?.discount}% OFF )</span>
                          </div>
                        </div>
                      </div>
                      <div className="delet">
                        <DeleteIcon className="delet-icon" onClick={() => removeWishItem(e.key)} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          ) : (
            <div className="empty-list">
              <figure>
                <img src={emptyWishList} alt="ImG" />
              </figure>

              <h2>Empty Wishlist</h2>
              <p>You have no items in your wishlist. Start adding!</p>
            </div>)
        }


      </div>
    </>
  );
};

export default WishList;
