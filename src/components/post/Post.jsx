import React from "react";
import "./post.css";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";

export default function Post({ post }) {
  console.log("desconstructed post object:", post);

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
              <span className="postUserName">{post.userName}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src="" alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <ThumbUp className="likeIconThumb" />
              <Favorite className="likeIconHeart" />
              <span className="likeCounter">{post.like}</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
