import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SwitchStatement } from "typescript";
import CancelIcon from "@mui/icons-material/Cancel";
import "./account.scss";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import InputIcon from "@mui/icons-material/Input";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import profile from "../assets/profile.svg";
import Profile from "./Profile";
import Address from "./Address";
import SaveUpi from "./SaveUpi";
import SaveCard from "./SaveCard";
import Reviews from "./Reviews";
import WishList from "./WishList";
import Paninfo from "./Paninfo";

const Account = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [slide, setSlide] = useState("profile-info");
  const [menu, setMenu] = useState(false);

  const addNumber = (e: any) => {
    setNumber(e.target.value);
  };
  const addName = (e: any) => {
    setName(e.target.value);
  };
  const storeData = () => {
    localStorage.setItem("Number", number);
    localStorage.setItem("Name", name);
  };

  const clear = () => {
    setNumber("");
    localStorage.removeItem("Number");
    navigate(-1);
  };

  const getLocalNumber = localStorage.getItem("Number");
  const getLocalName = localStorage.getItem("Name");

  function switchs() {
    switch (slide) {
      case "profile-info":
        return <Profile number={getLocalNumber} name={getLocalName} />;
      case "manage-address":
        return <Address />;
      case "saved-upi":
        return <SaveUpi />;
      case "save-card":
        return <SaveCard />;
      case "reviews-ratings":
        return <Reviews />;
      case "wish-list":
        return <WishList />;
      case "pan-info":
        return <Paninfo />;
    }
  }

  return (
    <>
      <div className="account-login">
        {getLocalNumber ? (
          <>
            <div className="togle">
              <div className="togle-box">
                <SwitchLeftIcon
                  onClick={() => setMenu(true)}
                  className="icon"
                />
                <PowerSettingsNewRoundedIcon onClick={clear} />
              </div>
            </div>
            <div className="account">
              <div
                className={
                  menu ? "accountMobile-box account-box" : "account-box"
                }
              >
                {/* account-box */}
                <div className="account-slide" onClick={() => setMenu(false)}>
                  <div className="photo-name">
                    <div className="photo">
                      <img src={profile} alt="" />
                    </div>
                    <div className="name">
                      {getLocalName ? getLocalName : "Hello"}
                    </div>
                  </div>
                  <div className="slide-bar">
                    <div className="my-order ">
                      <div className="head">
                        <InputIcon className="icon" />
                        <span>MY ORDERS</span>
                      </div>
                      <div className="order-icon">
                        <KeyboardArrowRightIcon className="arrow-icon" />
                      </div>
                    </div>
                    <div className="setting  main-div">
                      <div className="head">
                        <PersonIcon className="icon" />
                        <span>ACCOUNT SETTINGS</span>
                      </div>
                      <ul>
                        <li
                          value={"profile-info"}
                          onClick={(e) => setSlide("profile-info")}
                        >
                          <Link className="link" to="">
                            Profile Information
                          </Link>
                        </li>
                        <li onClick={(e) => setSlide("manage-address")}>
                          <Link className="link" to="">
                            Manage Addresses
                          </Link>
                        </li>
                        <li onClick={(e) => setSlide("pan-info")}>
                          <Link className="link" to="">
                            PAN Card Information
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="payment main-div">
                      <div className="head">
                        <AccountBalanceWalletIcon className="icon" />
                        <span>PAYMENTS</span>
                      </div>
                      <ul>
                        <li
                          value={"saved-upi"}
                          onClick={(e) => setSlide("saved-upi")}
                        >
                          <Link className="link" to="">
                            Saved UPI
                          </Link>
                        </li>
                        <li
                          value={"save-card"}
                          onClick={(e) => setSlide("save-card")}
                        >
                          <Link className="link" to="">
                            Saved Cards
                          </Link>
                        </li>
                        {/* <li aria-disabled
                          value={"profile-info"}
                          onClick={(e) => setSlide("profile-info")}
                        >
                          <Link className="link" to="" aria-disabled>
                            Gift Cards
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                    <div className="stuff main-div">
                      <div className="head">
                        <FolderSharedIcon className="icon" />
                        <span>MY STUFF</span>
                      </div>
                      <ul>
                        <li
                          value={"wish-list"}
                          onClick={(e) => setSlide("wish-list")}
                        >
                          <Link className="link" to="">
                            My Wishlist
                          </Link>
                        </li>
                        <li
                          value={"reviews-ratings"}
                          onClick={(e) => setSlide("reviews-ratings")}
                        >
                          <Link className="link" to="">
                            My Reviews & Ratings
                          </Link>
                        </li>
                        {/* <li
                          value={"profile-info"}
                          onClick={(e) => setSlide("profile-info")}
                        >
                          <Link className="link" to="">
                            All Notifications
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                    <div className="log-out ">
                      <div className="head" onClick={clear}>
                        <PowerSettingsNewRoundedIcon className="icon" />
                        <span>Logout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all-form">{switchs()}</div>
            </div>
          </>
        ) : (
          <>
            <div className="login-main">
              <div className="login">
                <div className="blur-box"></div>
                <div className="login-box">
                  <h2>Login</h2>
                  <form action="" onSubmit={storeData}>
                    <input
                      type="name"
                      placeholder="Your Name"
                      onChange={addName}
                    />
                    <input
                      type="number"
                      placeholder="Your Number"
                      required
                      onChange={addNumber}
                    />
                    <input
                      type="submit"
                      className="submit-button"
                      placeholder="Submit"
                      name="Submit"
                    />
                  </form>
                  <div className="cros">
                    <CancelIcon
                      onClick={() => navigate(-1)}
                      className="cros-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
