import { useCallback, useEffect, useState } from "react";
import { PostContent } from "../../PostContent";

export const useSearchablePosts = (posts: PostContent[]) => {
  const [filteredPosts, setFilteredPosts] = useState<PostContent[]>(posts);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

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
    [posts, setFilteredPosts]
  );

  return { filteredPosts, search };
};
