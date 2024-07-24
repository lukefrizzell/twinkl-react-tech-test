import { Post, PostContent } from "../Post";
import "./Posts.css";

export const Posts: React.FC<{ posts: PostContent[] }> = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};
