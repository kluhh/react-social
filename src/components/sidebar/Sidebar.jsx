import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Groups,
  Bookmark,
  Help,
  Event,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chat</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilled className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Groups className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmark</span>
          </li>
          <li className="sideBarListItem">
            <Help className="sideBarIcon" />
            <span className="sideBarListItemText">Help</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Sarah Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_3.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_4.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Phillip Rogers</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_5.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Brett Hanes</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src={require("../assets/profile_2.jpg")}
              alt="Friend"
            />
            <span className="sideBarFriendName">Jane 5</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
