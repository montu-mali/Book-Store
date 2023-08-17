import React from "react";
import "./shipping.scss";

const Shipping = () => {
  return (
    <>
      <div className="shipping">
        <div className="head">
          <h1>Shipping Policy</h1>
        </div>

        <div className="deliver">
          <p>
            We deliver to 27000+ pin codes across India Including JAMMU AND
            KASHMIR, LADAKH, NORTH EAST STATES, & OTHER UNION TERRITORIES LIKE
            ANDAMAN AND NICOBAR ISLANDS.
          </p>
        </div>

        <div className="shipping-time">
          <p>
            <span>SHIPPING TIME: </span>2-10 DAYS DEPENDING ON THE CUSTOMER’S
            LOCATION
          </p>
          <p>
            <span>SHIPPING PARTNERS:</span> SHIPROCKET, DELHIVERY, XPRESSBEES,
            ECOM EXPRESS
          </p>
        </div>
      </div>
    </>
  );
};

export default Shipping;
