import { PostContent } from "../../PostContent";
import { Post } from "../Post";
import { useRemovePost } from "./useRemovePost";
import { useSearchablePosts } from "./useSearchablePosts";
import SearchIcon from "@mui/icons-material/Search";
import "./Posts.css";

export const Posts: React.FC<{ posts: PostContent[] }> = ({ posts }) => {
  const { remainingPosts, removePost, error } = useRemovePost(posts);
  const { filteredPosts, search } = useSearchablePosts(remainingPosts);

  return (
    <>
      {error && <div className="error">{error}</div>}
      <div className="search-container">
        <div className="searchbar">
          <input
            type="text"
            role="search"
            placeholder="Search"
            onChange={(event) => search(event.target.value)}
          />
          <SearchIcon />
        </div>
      </div>
      <div className="posts-container">
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
    </>
  );
};
