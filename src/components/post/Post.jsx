import React from "react";
import "./post.css";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";

export default function Post() {
  return (
    <>
      <div className="post">
        <div className="postwrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={require("../assets/profile_1.jpg")}
                alt=""
                className="postProfileImg"
              />
              <span className="postUserName">KLuhh</span>
              <span className="postDate">5 Minutes Ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">Hey! Its my first post</span>
            <img
              src={require("../assets/post_1.jpg")}
              alt=""
              className="postImg"
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <ThumbUp className="likeIconThumb" />
              <Favorite className="likeIconHeart" />
              <span className="likeCounter">32 people liked this</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
