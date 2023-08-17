import React from "react";
import "./contact.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const submit = () => {
    alert("submite complete");
    navigate(-1);
  };

  return (
    <>
      <div className="main">
        <div className="contact">
          <div className="contact-box">
            <div className="input-box">
              <form className="form" action="" onSubmit={submit}>
                <span className="contact-us">Contact</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name*"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email*"
                />
                <input type="number" name="number" placeholder="Phone/Mobile" />
                <textarea
                  name="text"
                  id=""
                  placeholder="Description:*"
                  required
                  rows={4}
                ></textarea>
                <input
                  className="submit-btn"
                  type="submit"
                  name="submit"
                  placeholder="Submit"
                />
              </form>
            </div>
            <div className="cros">
              <CancelIcon onClick={() => navigate(-1)} className="cros-icon" />
            </div>
          </div>
          <div className="blur-box"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
