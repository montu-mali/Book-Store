import React from "react";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="head">
          <h1>About us</h1>
        </div>
        <div className="welcome">
          <h2>Welcome !!!</h2>
        </div>
        <div className="three-pare">
          <p className="p1">
            <span className="bold">OnlineBookstore</span> is India's Largest
            Book Store, Book Shopping Website. OnlineBookstore is an exclusive
            Platform for New & Used Books.
          </p>
          <p className="p2">
            Anyone can buy books at a reasonable price from OnlineBookstore in
            any part of India. OnlineBookstore customizes the book shopping
            experience of booklovers to a new level. We make online book
            shopping easier. One can buy Books of various eminent Authors and
            Publishers in Paperback or Hardback format.
          </p>
          <p className="p3">
            Our bookstore has a special "No Extra Shipping Charge & Fast
            Shipment" service on OnlineBookstore verified books. Shop books from
            different categories like Fiction, Non-Fiction, Self-help,
            Autobiography, Mystery, Romance Classics, Kid Books from the
            Publishers like Penguin, Harper Collins, Bloomsbury Publication,
            Rupa Publication Om Books International, and many more. Our Book app
            also has a large collection of international Bestselling books.
          </p>
        </div>

        <div className="four-hase">
          <span className="#">
            <span className="bold">#Awesome:-</span>Books are New & Exclusive.
          </span>
          <span className="#">
            <span className="bold">#Like New:-</span>Books are a little bit old
            but of awesome quality.
          </span>
          <span className="#">
            <span className="bold">#Average:-</span>Books are a little bit old.
          </span>
          <span className="#">
            <span className="bold">#Used:-</span>Books are used but in good
            quality.
          </span>
        </div>
        <div className="four-star">
          <span className="*">*Easy Book Replacements.</span>
          <span className="*">*24/7 Customer care service.</span>
          <span className="*">*Fast Book Delivery</span>
          <span className="*">*3 quality checks before shipment.</span>
        </div>
        <div className="contact">
          <div className="email">
            <span className="bold">Email: </span> xbookstore@gmail.com
          </div>
          <div className="mobile">
            <span className="bold">Mobile No: </span> xxxxxx7955
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
