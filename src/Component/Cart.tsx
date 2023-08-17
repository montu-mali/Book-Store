import { useEffect, useState } from "react";
import "./cart.scss";
import { useCartStore, useSaveForLater,useAddressStore } from "../store/cartStore";
import API from "./BookAPI";
import { SingleBook } from "./CartSingleBook";
// import SaveForLater from "./SaveForLater";

const Cart = () => {
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [saveItem, setSaveItem] = useState<any[]>([]);
  const cartStore = useCartStore((state) => state);
  const saveForLater = useSaveForLater((state) => state);
  
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const cartItemsDetails = cartStore.items.map((item: any) =>
      API.find((e) => e.key === item)
    );
    setCartItem(cartItemsDetails);

  }, [cartStore.items]);

  useEffect(() => {
    const saveLaterItem = saveForLater.item.map((itm) =>
      API.find((e) => e.key === itm)
    )
    setSaveItem(saveLaterItem)
  },[saveForLater.item])



  const TOTALPRICE = cartItem.reduce((total, book) => {
    return total + book.price;
  }, 0);

  const TOTALDISCOUNT = cartItem.reduce((totaldiscount, book) => {
    return totaldiscount + book.discount * book.price * 0.01;
  }, 0);



  return (
    <>
      <div className="cart">
        <div className="address"></div>
        {cartItem.length === 0
          ? (<div className="cart-Empty">
            <div className="head">
              <h2>Cart Is Empty</h2>
            </div>
          </div>)
          : (
            <div className="cartIn-box">
              <div className="cart-In">
                <div className="main-heading">
                  <span className="">Shopping Cart</span>
                </div>
                <div className="item-box">
                  {
                    cartItem.map((e) => {
                      return <SingleBook data={e} />;
                    })}
                </div>
              </div>
              <div className="price-details">
                <div className="price">
                  <span className="head">Price Details</span>
                  <div className="three-price">
                    <div className="price-item">
                      <span className="price">
                        price({cartStore.items.length} item)
                      </span>
                      <span className="number">₹{TOTALPRICE}</span>
                    </div>
                    <div className="discount">
                      <span className="price">Discount</span>
                      <span className="number">
                        -₹{Number(TOTALDISCOUNT).toFixed(2)}
                      </span>
                    </div>
                    <div className="Delivery-charge">
                      <span className="price">Delivery Charges</span>
                      <span className="number">FREE Delivery</span>
                    </div>
                  </div>
                  <div className="total">
                    <span className="amount">Total Amount</span>
                    <span className="number">
                      ₹{(TOTALPRICE - TOTALDISCOUNT).toFixed(2)}
                    </span>
                  </div>
                  <div className="save">
                    <span>
                      You will save ₹{Number(TOTALDISCOUNT).toFixed(2)} on this
                      order{" "}
                    </span>
                  </div>
                </div>
                <div className="place-order">
                  <button className="order">Place Order</button>
                </div>
              </div>
            </div>
          )}
        {
          saveItem.length === 0 ? null :
            (
              <div className="save-later">
                <div className="main-heading">
                  <span className="">Saved For Later</span>
                </div>
                <div className="item-box">
                  {
                    saveItem.map((cur) => {
                      return (
                        <div className="items">
                          <div className="image-add">
                            <div className="image">
                              <img
                                src={cur.image_link}
                                alt=""
                              />
                            </div>
                            <div className="add">
                            </div>
                            <div></div>
                          </div>
                          <div className="details">
                            <div className="title">{cur.title}</div>
                            <div className="lan-auth">{cur.language},{cur.author},{cur.category}</div>
                            <div className="price-box">
                              <span className="cur-price"> ₹{Number(cur?.price - (cur?.price * cur?.discount) / 100)}</span>
                              <span className="total-price">{cur?.price}</span>
                              <span className="discount">( {cur?.discount}% OFF )</span>
                            </div>
                            <span className="stoke" >In Stoke</span>
                            <div className="three-button">
                              <button className="delet" onClick={() => {
                                saveForLater.removeSaveLater(cur.key)
                              }}>delete</button>
                              <button className="add-list" onClick={() => {
                                cartStore.addToCart(cur.key)
                                saveForLater.removeSaveLater(cur.key)
                              }}>Add to LIst</button>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
        }
      </div>

    </>
  );
};

export default Cart;
