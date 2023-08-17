import { Link } from "react-router-dom";
import React from "react";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="help">
            <div className="help-box">
              <div className="company three-box">
                <h4 className="head">Company</h4>
                <ul className="help-lu ">
                  <li>
                    <Link className="link" to="./about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="./library">
                      Library
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="policies three-box">
                <h4 className="head">Policies</h4>
                <ul>
                  <li>
                    <Link className="link" to="./privacy-policy">
                      Privacy Policies
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/terms-and-conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="">
                      Secure Shopping
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="">
                      Copyright Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="help three-box">
                <h4 className="head">Help</h4>
                <ul>
                  <li>
                    <Link className="link" to="./replacement-policy">
                      Replacement Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="">
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="./shipping-policy">
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contect">
              <div className="contect-box">
                <ul>
                  <li>
                    <Link to="">
                      <FacebookTwoToneIcon className="facebook icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <InstagramIcon className="insta icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <TwitterIcon className=" twiter icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <LinkedInIcon className="linked icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <YouTubeIcon className="youtube icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copy-right">
              <div className="copy">
                <span>
                  Copyright © {year} - All rights reserved by Mk Information
                  Service Pvt Ltd.
                </span>
              </div>
              <div className="Powered">
                <span>Powered by : Mk Publications Pvt Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
