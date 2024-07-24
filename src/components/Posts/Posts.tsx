import { PostContent } from "../../PostContent";
import { Post } from "../Post";
import "./Posts.css";
import { useRemovePost } from "./useRemovePost";
import { useSearchablePosts } from "./useSearchablePosts";

export const Posts: React.FC<{ posts: PostContent[] }> = ({ posts }) => {
  const { remainingPosts, removePost } = useRemovePost(posts);
  const { filteredPosts, search } = useSearchablePosts(remainingPosts);

  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          role="search"
          placeholder="Search"
          onChange={(event) => search(event.target.value)}
        />
      </div>
      <ul className="posts">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Post
              post={post}
              onRemove={async () => await removePost(post.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
