import React from "react";
import "./Post.css";
import { PostContent } from "../../PostContent";

export const Post: React.FC<{ post: PostContent; onRemove: () => void }> = ({
  post,
  onRemove,
}) => {
  return (
    <div className="post">
      <div className="post-content">
        <div className="post-title">{post.title}</div>
        <div>{post.body}</div>
      </div>
      <div className="post-actions">
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};
