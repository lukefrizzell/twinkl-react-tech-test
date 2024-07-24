import { useCallback, useState } from "react";
import { PostContent } from "../../PostContent";
import { Post } from "../Post";
import "./Posts.css";

const useSearchablePosts = (posts: PostContent[]) => {
  const [filteredPosts, setFilteredPosts] = useState<PostContent[]>(posts);

  const search = useCallback(
    (searchTerm: string) => {
      const lowerSearchTerm = searchTerm.toLowerCase();

      const filteredPosts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          post.body.toLowerCase().includes(lowerSearchTerm)
      );

      setFilteredPosts(filteredPosts);
    },
    [posts]
  );

  return { filteredPosts, search };
};

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
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
