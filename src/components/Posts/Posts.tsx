import { PostContent } from "../../PostContent";
import { Post } from "../Post";
import { useSearchablePosts } from "./useSearchablePosts";
import "./Posts.css";
import { removePost } from "./removePost";

export const Posts: React.FC<{ posts: PostContent[] }> = ({ posts }) => {
  const { filteredPosts, search } = useSearchablePosts(posts);

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
            <Post post={post} onRemove={async () => await removePost(post.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
