import React from "react";
import "./Post.css";
import { PostContent } from "../../PostContent";

export const Post: React.FC<{ post: PostContent }> = ({ post }) => {
  return (
    <div className="post">
      <div className="post-content">
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
      <div className="post-actions"><button onClick={() => {}}>Remove</button></div>
    </div>
  );
};
