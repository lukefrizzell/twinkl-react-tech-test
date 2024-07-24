import { Post, PostContent } from "./Post";

export const Posts: React.FC<{ posts: PostContent[] }> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}><Post post={post} /></li>
      ))}
    </ul>
  );
};
