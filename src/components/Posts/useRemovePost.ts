import { useCallback, useEffect, useState } from "react";
import { PostContent } from "../..//PostContent";
import { removePost as remove } from "./removePost";

export const useRemovePost = (posts: PostContent[]) => {
  const [remainingPosts, setRemainingPosts] = useState(posts);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setRemainingPosts(posts);
  }, [posts]);

  const removePost = useCallback(
    async (id: number) => {
      const result = await remove(id);

      if (result.outcome === "error") {
        setError("Failed to remove post");
      }

      const updatedPosts = remainingPosts.filter((post) => post.id !== id);
      setRemainingPosts(updatedPosts);
    },
    [remainingPosts, setRemainingPosts]
  );

  return { remainingPosts, removePost, error };
};
