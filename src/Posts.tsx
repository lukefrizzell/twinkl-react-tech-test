import { Post } from "./Post";

export const Posts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>post</li>
      ))}
    </ul>
  );
};
