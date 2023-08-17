import React from "react";
import "./reviews.scss";
import NoReview from "../assets/NoReview.png";

const Reviews = () => {
  //   const arrayWithDuplicates=localStorage.getItem("WishList")
  //   const uniqList=  new Set(arrayWithDuplicates);
  //   console.log(uniqList)

  return (
    <>
      <div className="review-rating">
        <div className="no-review">
          <figure>
            <img src={NoReview} alt="ImG" />
          </figure>

          <h2>No Reviews & Ratings</h2>
          <p>You have not rated or reviewed any product yet!</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
