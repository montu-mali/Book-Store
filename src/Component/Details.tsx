import React, { useEffect, useState } from "react";
import books from "./BookAPI";
import {
  useLocation,
  useNavigate,
  Link,
  useParams,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import cod from "../assets/cod.svg";
import genuine from "../assets/genuine.svg";
import secure from "../assets/secure.svg";
import "./detail.scss";
import LinearProgress from "@mui/material/LinearProgress";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Similar from "./Similar";
import { useCartStore,useWishStore } from "../store/cartStore";

const Details = () => {
  const [bookData] = useState(books);
  const cartStore = useCartStore((state) => state);
  const { addWishItem, wishItems,removeWishItem } = useWishStore((state) => state);

  const navigate = useNavigate();
  const idNumber = useLocation();

  const id = idNumber.state.id;

  const newItem = bookData.filter((old) => {
    return old.key === id;
  });

  return (
    <>
      <div className="details-header">
        <div className="arrow-box" onClick={() => navigate(-1)}>
          <div className="arrow">
            <WestRoundedIcon className="arrow-icon" />
            <span>Go Back</span>
          </div>
        </div>
        <div className="cart-box">
          <Link to="/cart">
            <ShoppingCartOutlinedIcon className="cart-icon" />
          </Link>
        </div>
      </div>

      <div className="details-box">
        {newItem.map((e) => {
          const curprice = e.price - (e.price * e.discount) / 100;
          const saveprice = (e.price - curprice).toFixed(1);
          const category = e.category;

          return (
            <>
              <div className="image-detail">
                <div className="image-box">
                  <div className="image">
                  <FavoriteIcon className={wishItems.includes(e.key)?"wishRed-icon":"wish-icon"} onClick={() =>
                        {
                          wishItems.includes(e.key)?removeWishItem(e.key): addWishItem(e.key)
                        }
                           
                          }/>
                    <img src={e.image_link} alt="" />
                  </div>
                </div>
                <div className="detail-box">
                  <div className="content">
                    <h2 className="dTitle">{e.title}</h2>
                    <p className="dAbout">{e.about}</p>
                    <div className="price-box">
                      <span className="cur-price">₹{curprice}</span>
                      <span className="total-price">₹{e.price}</span>
                      <span className="discount">( {e.discount}% OFF )</span>
                    </div>
                    <p className="save-price">
                      you save
                      <span>
                        <b>₹{saveprice}</b>
                      </span>
                    </p>
                    <div className="logo-box">
                      <img className="logo" src={secure} alt="logo" />
                      <img className="logo" src={genuine} alt="logo" />
                      <img className="logo" src={cod} alt="logo" />
                    </div>
                  </div>

                  <div className="two-button">
                    <button
                      className="cart"
                      onClick={() => {
                        cartStore.items.includes(e.key)
                          ? cartStore.removeFromCart(e.key)
                          : cartStore.addToCart(e.key);
                      }}
                    >
                      {cartStore.items.includes(e.key)
                        ? "REMOVE FROM CART"
                        : "ADD TO CART"}
                    </button>
                    <button className="buy">BUY NOW</button>
                  </div>
                </div>
              </div>

              <div className="rews-speci">
                <div>
                  <h2 className="rate-head">Ratings & Reviews</h2>
                  <div className="rate-review">
                    <div className="review-box">
                      <div className="review">
                        <div className="rew-number">
                          <div className="avg">
                            4.5
                            <StarIcon className="avg-star" />
                          </div>
                          <div className="total">
                            400 Ratings &<br /> 0 Reviews
                          </div>
                        </div>
                        {/* <div className="add-rew"></div> */}
                      </div>
                    </div>
                    <div className="rating-box">
                      <div className="rating">
                        <ul>
                          <li>
                            <span>
                              5 <StarIcon className="star" fontSize="small" />
                            </span>
                            <LinearProgress
                              className="progress"
                              color="success"
                              variant="determinate"
                              value={70}
                              max-value="100"
                            />
                          </li>
                          <li>
                            <span>
                              4 <StarIcon className="star" fontSize="small" />
                            </span>
                            <LinearProgress
                              className="progress"
                              color="success"
                              variant="determinate"
                              value={60}
                              max-value="100"
                            />
                          </li>
                          <li>
                            <span>
                              3 <StarIcon className="star" fontSize="small" />
                            </span>
                            <LinearProgress
                              className="progress"
                              color="success"
                              variant="determinate"
                              value={35}
                              max-value="100"
                            />
                          </li>
                          <li>
                            <span>
                              2 <StarIcon className="star" fontSize="small" />
                            </span>
                            <LinearProgress
                              className="progress"
                              color="warning"
                              variant="determinate"
                              value={40}
                              max-value="100"
                            />
                          </li>
                          <li>
                            <span>
                              1 <StarIcon className="star" fontSize="small" />
                            </span>
                            <LinearProgress
                              className="progress"
                              color="error"
                              variant="determinate"
                              value={10}
                              max-value="100"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="speci">
                  <div className="table-box">
                    <table className="table">
                      <tr className="head">
                        <th>Specifications</th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>Title</td>
                        <td>{e.title}</td>
                      </tr>
                      <tr>
                        <td>Author</td>
                        <td>{e.author}</td>
                      </tr>
                      <tr>
                        <td>Language</td>
                        <td>{e.language}</td>
                      </tr>
                      <tr>
                        <td>Pages</td>
                        <td>{e.pages}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td>{e.category}</td>
                      </tr>
                      <tr>
                        <td>Published Date</td>
                        <td>{e.published_year}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                <Similar category={category} title={"Similar products"} />
                {/* <Similar  /> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Details;
