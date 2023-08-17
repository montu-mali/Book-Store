import React, { useEffect, useState } from "react";
import "./paninfo.scss";

const Paninfo = () => {
  const [saveData, setSaveData] = useState(true);
  const [panNumber, setPanNumber] = useState("");
  const [panName, setPanName] = useState("");

  const eventSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("PanNumber", panNumber);
    localStorage.setItem("PanName", panName);
    setSaveData(true);
  };

  const localPanNumber = localStorage.getItem("PanNumber");
  const localPanName = localStorage.getItem("PanName");

  const editData = (e: any) => {
    e.preventDefault();
    setSaveData(false);
    setPanNumber((localPanNumber ) || "");
    setPanName(localPanName || "");

  };

  useEffect(() => {
    // if (localPanName && localPanNumber) {
    //     setSaveData(true)
    // }
  });

  return (
    <>
      <div className="pan-info">
        <div className="head">
          <h3>PAN Card Information</h3>
        </div>
        <div className="info-box">
          {saveData && localPanName && localPanNumber ? (
            <>
              <div className="save-data">
                <div className="two-flbox">
                  <span className="title">PAN CARD NUMBER</span>
                  <span className="value">{localPanNumber}</span>
                </div>
                <div className="two-flbox">
                  <span className="title">FULL NAME</span>
                  <span className="value">{localPanName}</span>
                </div>

                <div className="two-flbox">
                  <span className="title">STATUS</span>
                  <span className="value">PENDING</span>
                </div>

                <div className="btn">
                  <button onClick={editData}>EDIT</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="fill-data">
                <form onSubmit={eventSubmit}>
                  <div className="pan-number two-box">
                    <label htmlFor="">PAN Card Number</label>
                    <input
                      type="text"
                      required
                      name="number"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                    />
                  </div>
                  <div className="pan-name two-box">
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={panName}
                      onChange={(e) => setPanName(e.target.value)}
                    ></input>
                  </div>
                  <div className="file two-box">
                    <label htmlFor="">
                      Upload PAN Card (Only JPEG,PNG file is allowed)
                    </label>
                    <input
                      className="file"
                      type="file"
                      required
                      accept="image/png, image/jpeg"
                    ></input>
                  </div>
                  <div className="check-box">
                    <div>
                      <input
                        className="checkBox"
                        type="checkBox"
                        required
                      ></input>
                    </div>
                    <span>
                      I do hereby declare that PAN furnished/stated above is
                      correct and belongs to me, registered as an account holder
                      with www.bookstore.com. I further declare that I shall
                      solely be held responsible for the consequences, in case
                      of any false PAN declaration.
                    </span>
                  </div>
                  <div className="two-btn">
                    <input className="submit" type="submit" />
                    <button
                      className="cancel"
                      onClick={() => setSaveData(true)}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Paninfo;
