import React from "react";
import "../rightbar/rightbar.css";
import { Cake } from "@mui/icons-material";

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <Cake className="birthdayImg" />
          <span className="birthdayText">
            <strong>James Erics </strong> and <strong>3 other friends</strong>{" "}
            have a birthday today
          </span>
        </div>
        <img
          src={require("../assets/ad_1.jpg")}
          alt=""
          className="rightBarAd"
        />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src={require("../assets/profile_3.jpg")}
                alt=""
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">Jessika</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
