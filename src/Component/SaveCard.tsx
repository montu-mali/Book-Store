import React from "react";
import "./saveUpi.scss";

const SaveCard = () => {
  return (
    <>
      <div className="main-box">
        <div className="head">
          <h3>Manage Saved Cards</h3>
        </div>
        <div className="faqs">
          <div className="head">
            <h3>FAQs</h3>
          </div>
          <div className="faqs-detail">
            <p className="que">Is it safe to tokenise my card?</p>
            <p className="ans small-tx">
              Yes. A tokenised card transaction is considered safer as the
              actual card details are not shared with the Book Store during
              transaction processing . Card information is stored with the
              authorised card networks or card issuers only and Book Store does
              not store your 16-digit card number..
            </p>
            <p className="que">Is tokenisation of card mandatory?</p>
            <p className="ans small-tx">
              No, customer can choose whether or not to tokenise their card.
            </p>
            <p className="que">
              What happens if I don’t give consent to secure my card?
            </p>
            <p className="ans small-tx">
              If you don’t give consent to tokenise your card, you need to enter
              your card details for every transaction as stipulated under the
              RBI guidelines.
            </p>
            <p className="que">Why is my card being tokenised?</p>
            <p className="ans small-tx">
              As per the new RBI guidelines to make card data more secure,
              merchants like Book Store cannot store the card details of users.
              As an alternative, RBI has authorised card networks and card
              issuers to offer card tokenisation services, which means the
              replacement of actual credit and debit card details with an
              alternate code called “token”. The user can either choose to
              tokenise their card by giving consent for future transactions or
              choose to continue without tokenisation.
            </p>
            <p className="que">What is a token?</p>
            <p className="ans small-tx">
              A token is generated when a user gives consent to Book Store to
              tokenise their card. A token is a unique value for a combination
              of card, token requestor (Book Store is a token requestor &
              accepts request from the customer for tokenisation of a card and
              passes it onto the card network to issue a corresponding token)
              and device. The token does not contain any personal information
              linked to your card and is generated only when a customer uses a
              new card for a successful transaction on Book Store.
            </p>
            <p className="que">
              Do I need to provide consent separately for each card?
            </p>
            <p className="ans small-tx">
              Yes, as per the RBI guidelines, you need to provide consent to
              secure each card separately.
            </p>
            <p className="que">• Can I delete my tokenised cards?</p>
            <p className="ans small-tx">
              Yes, you can delete your tokenised cards at any given time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveCard;
