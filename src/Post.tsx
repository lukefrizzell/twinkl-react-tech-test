import React from "react";
import './Post.css'

export type PostContent = {
  id: number;
  title: string;
  body: string;
};

export const Post: React.FC<{ post: PostContent }> = ({ post }) => {
  return (
    <div className="post">
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
};
