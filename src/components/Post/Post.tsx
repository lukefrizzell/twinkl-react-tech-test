import React from "react";
import './Post.css'
import { PostContent } from "../../usePosts";

export const Post: React.FC<{ post: PostContent }> = ({ post }) => {
  return (
    <div className="post">
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
};
