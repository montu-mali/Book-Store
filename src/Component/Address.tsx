import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./address.scss";
import AddIcon from "@mui/icons-material/Add";
import { useAddressStore } from "../store/cartStore";

const Address = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [addressDtl, setAddressDtl] = useState({
    name: "",
    number: "",
    pincode: "",
    locality: "",
    houseNo: "",
    city: "",
    state: "",
    landmark: "",
    altermateNo: "",
  });
  const [allData, setAllData] = useState([]);

  const { address, addAddress, removeAddress } = useAddressStore((state) => state)

  const addEvent = (e: any) => {
    const { name, value } = e.target;

    setAddressDtl((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const formSubmit = (e: any) => {
    e.preventDefault()
    addAddress(addressDtl)

    setAddressDtl({
      name: "",
      number: "",
      pincode: "",
      locality: "",
      houseNo: "",
      city: "",
      state: "",
      landmark: "",
      altermateNo: "",
    });
    setAddBtn(true);
  };

  const addButton = () => {
    setAddBtn(false);
  };
  const cancelBtn = () => {
    setAddBtn(true);
    setAddressDtl({
      name: "",
      number: "",
      pincode: "",
      locality: "",
      houseNo: "",
      city: "",
      state: "",
      landmark: "",
      altermateNo: "",
    });
  };


  return (
    <>
      <div className="address">
        <div className="address-box">
          <div className="head">
            <h3>Manage Addresses</h3>
          </div>
          <div className="add-save">
            <div className="add-address">
              <div className="add-new">
                {addBtn ? (
                  <>
                    <div className="new" onClick={addButton}>
                      <div className="icon-box">
                        <AddIcon className="icon" />
                      </div>
                      <span>ADD A NEW ADDRESS</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="add">
                      <span>ADD A NEW ADDRESS</span>
                      <form action="" onSubmit={formSubmit}>
                        <div className="two-box">
                          <div className="box-1 box-12">
                            <label htmlFor="">Name</label>
                            <input
                              type="text"
                              required
                              name="name"
                              value={addressDtl.name}
                              onChange={addEvent}
                            />
                          </div>{" "}
                          <div className="box-2 box-12">
                            <label htmlFor="">Mobile Number</label>
                            <input
                              type="number"
                              required
                              name="number"
                              value={addressDtl.number}
                              onChange={addEvent}
                            />
                          </div>
                        </div>
                        <div className="two-box">
                          <div className="box-1 box-12">
                            <label htmlFor="">Pincode</label>
                            <input
                              type="text"
                              name="pincode"
                              value={addressDtl.pincode}
                              onChange={addEvent}
                              required
                            />
                          </div>{" "}
                          <div className="box-2 box-12">
                            <label htmlFor="">Locality</label>
                            <input
                              type="text"
                              name="locality"
                              value={addressDtl.locality}
                              onChange={addEvent}
                            />
                          </div>
                        </div>
                        <div className="area-box">
                          <label htmlFor="">House no.,Flat,Apartment</label>
                          <input
                            type="text"
                            required
                            name="houseNo"
                            value={addressDtl.houseNo}
                            onChange={addEvent}
                          />
                        </div>
                        <div className="two-box">
                          <div className="box-1 box-12">
                            <label htmlFor="">City/district/Town</label>
                            <input
                              type="text"
                              required
                              name="city"
                              value={addressDtl.city}
                              onChange={addEvent}
                            />
                          </div>{" "}
                          <div className="box-2 box-12">
                            <label htmlFor="">State</label>
                            <input
                              type="text"
                              required
                              name="state"
                              value={addressDtl.state}
                              onChange={addEvent}
                            />
                          </div>
                        </div>
                        <div className="two-box">
                          <div className="box-1 box-12">
                            <label htmlFor="">Landmark(optinal)</label>
                            <input
                              type="text"
                              name="landmark"
                              value={addressDtl.landmark}
                              onChange={addEvent}
                            />
                          </div>{" "}
                          <div className="box-2 box-12">
                            <label htmlFor="">Alternate Phone (optional)</label>
                            <input
                              type="text"
                              name="altermateNo"
                              value={addressDtl.altermateNo}
                              onChange={addEvent}
                            />
                          </div>
                        </div>
                        <div className="two-button">
                          <input type="submit" className="save" placeholder="Save" />
                          {/* <button className="save" onClick={formSubmit}>
                            Save
                          </button> */}
                          <button className="cancel" onClick={cancelBtn}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
            {
              address.length === 0 ? "" :
                (
                  <div className="save-address">
                    <div className="all-address">
                      {address.map((e: any, i) => {
                        return (
                          <>
                            <div className="address">
                              <div className="name-twoButton">
                                <span className="name">{e.name}</span>
                                <div className="two-button">
                                  <button className="edit" onClick={() => {
                                         setAddressDtl(e)
                                         removeAddress(e)
                                         setAddBtn(false)
                                  }}>Edit</button>
                                  <button className="remove" onClick={() => {
                                       removeAddress(e)
                                  }}>Remove</button>
                                </div>
                              </div>
                              <div className="locality-box">
                                <span>{e.houseNo},</span> {e.locality}, {e.landmark?e.landmark+",":""} {e.city},{e.state}-{e.pincode}
                              </div>
                              <div className="number-box">
                                <span className="number">{e.number}</span> <span className="alt-number"> {e.altermateNo}</span>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
