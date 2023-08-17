import React, { useEffect, useState } from "react";
import { useCartStore,useSaveForLater } from "../store/cartStore";
import "./cart.scss";

export default function SaveForLater() {
  const [qty, setQty] = useState(1);
  const [cartItem, setCartItem] = useState();
  const cartStore = useCartStore((state) => state);
  const saveForLater =useSaveForLater((store)=>store);

  console.log(cartStore.items);

  useEffect(() => {
    const upadateCartItem = (key: any) => {
      setCartItem(key);
    };
  });

  const increment = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <div className="save-later">
        <div className="main-heading">
          <span className="">Saved For Later</span>
        </div>
        <div className="item-box">
          <div className="items">
            <div className="image-add">
              <div className="image">
                <img
                  src="https://m.media-amazon.com/images/I/81YW99XIpJL._AC_UY327_FMwebp_QL65_.jpg"
                  alt=""
                />
              </div>
              <div className="add">
                <button className="decrement" onClick={decrement}>
                  -
                </button>
                <div>{qty}</div>
                <button className="increment" onClick={increment}>
                  +
                </button>
              </div>
              <div></div>
            </div>
            <div className="details">
              <div className="title">The Girl with the Dragon Tattoo</div>
              <div className="lan-auth">English,Stieg Larsson,Crime</div>
              <div className="price-box">
                <span className="cur-price">₹1000</span>
                <span className="total-price">1500</span>
                <span className="discount">( 10% OFF )</span>
              </div>
              <span className="stoke">In Stoke</span>
              <div className="three-button">
                <button>delete</button>
                <button>Add to LIst</button>
                {/* <button>Buy this now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
