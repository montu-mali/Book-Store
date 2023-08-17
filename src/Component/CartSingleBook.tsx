import { useState } from "react";
import { useCartStore,useSaveForLater } from "../store/cartStore";

export const SingleBook = ({ data }: { data: any }) => {
  const [qty, setQty] = useState(1);
  const[saveLater,setSaveLater]=useState([null])

  const { removeFromCart, items } = useCartStore((store) => store);
  const{addToSaveLater} =useSaveForLater((store)=>store)



  return (
    <div key={data.key} className="items">
      <div className="image-add">
        <div className="image">
          <img src={data?.image_link} alt="" />
        </div>
        <div className="add">
          <button className="decrement" onClick={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}>
            -
          </button>
          <div>{qty}</div>
          <button className="increment" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>
        <div></div>
      </div>
      <div className="details">
        <div className="title">{data?.title}</div>
        <div className="lan-auth">
          {data?.language} {data?.author} {data?.category}
        </div>
        <div className="price-box">
          <span className="cur-price">
            ₹{Number(data?.price - (data?.price * data?.discount) / 100)}
          </span>
          <span className="total-price">₹{data?.price}</span>
          <span className="discount">( {data?.discount}% OFF )</span>
        </div>
        <span className="stoke">In Stoke</span>
        <div className="three-button">
          <button className="remove"
            onClick={() => {
              removeFromCart(data.key);
              if (items.length >= 1) {
                localStorage.removeItem("cartItems");
              }
            }}
          >
            Remove
          </button>
          <button className="save-later" onClick={()=>{
            removeFromCart(data.key);
            addToSaveLater(data.key)
          }}>Save for later</button>
          <button>Buy this now</button>
        </div>
      </div>
    </div>
  );
};
