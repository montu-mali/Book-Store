import React, { useEffect, useState } from "react";
import "./profile.scss";
import { textChangeRangeIsUnchanged } from "typescript";
import { NULL } from "sass";

const Profile = (props: any) => {
  const [fName, setFName] = useState(props.name);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(props.number);
  const [editName, setEditName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editNumber, setEditNumber] = useState(true);

  useEffect(() => {
    const getLocalEmail = localStorage.getItem("Email") || "";
    setEmail(getLocalEmail);
  }, []);

  const saveName = () => {
    setEditName(true);
    localStorage.setItem("Name", fName);
  };

  const saveEmail = () => {
    setEditEmail(true);
    localStorage.setItem("Email", email);
  };
  const saveNumber = () => {
    setEditNumber(true);
    localStorage.setItem("Number", number);
  };

  return (
    <>
      <div className="profile ">
        <div className="personal-info three-info">
          <div className="head">
            <h3>Personal Information</h3>
            {editName ? (
              <div className="edit" onClick={() => setEditName(false)}>
                Edit
              </div>
            ) : (
              <div className="edit"></div>
            )}
          </div>
          <form action="">
            <div className="name label">
              <label htmlFor="">Your Name</label>
              <div className="name hide-unhide">
                {editName ? (
                  <div className="hide-div">{fName}</div>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder=""
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="gender">
              <span>Your Gender</span>
              <div className="radio">
                <input type="radio" name="gender" value="male" checked />
                Male
                <input type="radio" name="gender" value="female" />
                Female
              </div>
            </div>
            {editName ? (
              <div className="hide-button"></div>
            ) : (
              <>
                <div className="button" onClick={saveName}>
                  SAVE
                </div>
              </>
            )}
          </form>
        </div>
        <div className="email-add three-info">
          <div className="head">
            <h3>Email Address</h3>
            {editEmail ? (
              <div className="edit" onClick={() => setEditEmail(false)}>
                Edit
              </div>
            ) : (
              <div className="edit"></div>
            )}
          </div>
          <form action="">
            <div className="email label">
              <div className="email hide-unhide">
                {editEmail ? (
                  <div className="hide-div">{email}</div>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </>
                )}
              </div>
            </div>
            {editEmail ? (
              <div className="hide-button"></div>
            ) : (
              <>
                <div className="button" onClick={saveEmail}>
                  SAVE
                </div>
              </>
            )}
          </form>
        </div>
        <div className="mo-number three-info">
          <div className="head">
            <h3>Mobile Number</h3>
            {editNumber ? (
              <div className="edit" onClick={() => setEditNumber(false)}>
                Edit
              </div>
            ) : (
              <div className="edit"></div>
            )}
          </div>
          <form action="">
            <div className="mobile label">
              <div className="number hide-unhide">
                {editNumber ? (
                  <div className="hide-div">{number}</div>
                ) : (
                  <>
                    <input
                      type="number"
                      placeholder=""
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </>
                )}
              </div>
            </div>
            {editNumber ? (
              <div className="hide-button"></div>
            ) : (
              <>
                <div className="button" onClick={saveNumber}>
                  SAVE
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
