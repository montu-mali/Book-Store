import React from "react";
import "./saveUpi.scss";

const SaveUpi = () => {
  return (
    <>
      <div className="main-box">
        <div className="head">
          <h3>No VPAs saved to be shown</h3>
        </div>
        <div className="faqs">
          <div className="head">
            <h3>FAQs</h3>
          </div>
          <div className="faqs-detail">
            <p className="que">Why is my UPI being saved on Book Store?</p>
            <p className="ans">
              It's quicker. You can save the hassle of typing in the complete
              UPI information every time you shop at Book Store by saving your
              UPI details. You can make your payment by selecting the saved UPI
              ID of your choice at checkout. While this is obviously faster, it
              is also very secure.
            </p>
            <p className="que">Is it safe to save my UPI on Book Store?</p>
            <p className="ans">
              Absolutely. Your UPI ID information is 100 percent safe with us.
              UPI ID details are non PCI compliant and are non confidential
              data.
            </p>
            <p className="que">What all UPI information does Book Store ?</p>
            <p className="ans">
              Book Store only stores UPI ID and payment provider details. We do
              not store UPI PIN/MPIN.
            </p>
            <p className="que">Can I delete my saved UPI?</p>
            <p className="ans">
              Yes, you can delete your UPI ID at any given time.
            </p>
            <p className="que">How many UPI IDs can I save on Book Store?</p>
            <p className="ans">
              You should have a registered account with Book Store. You should
              be logged in to your Book Store account. Due to security reasons,
              this feature is not available during guest checkout.
            </p>
            <p className="que">How do I make a payment using a saved UPI ID?</p>
            <p className="ans">
              You can view your saved UPI IDs on the preferred section on the
              payment options page at checkout. Select a saved UPI ID that you
              wish to use to make the payment. You will receive a push
              notification and/or SMS for the collect request. Once you accept
              the collect request, enter the UPI PIN / MPIN. You will get
              confirmation of the payment being successful on the Book Store
              app/website.
            </p>
            <p className="que">How many UPI IDs can I save on Book Store?</p>
            <p className="ans">You can save upto 10 IDs as of now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveUpi;
