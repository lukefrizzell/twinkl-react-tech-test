import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import "./Post.css";
import { PostContent } from "../../PostContent";

export const Post: React.FC<{ post: PostContent; onRemove: () => void }> = ({
  post,
  onRemove,
}) => {
  return (
    <div className="post">
      <div className="post-content">
        <h4 className="post-title">{post.title}</h4>
        <div>{post.body}</div>
      </div>
      <div className="post-actions">
        <a
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          aria-label="Remove"
        >
          <CloseIcon/>
        </a>
      </div>
    </div>
  );
};
