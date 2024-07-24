import { useCallback, useEffect, useState } from "react";
import { PostContent } from "../..//PostContent";
import { removePost as remove } from "./removePost";

export const useRemovePost = (posts: PostContent[]) => {
  const [remainingPosts, setRemainingPosts] = useState(posts);

  useEffect(() => {
    setRemainingPosts(posts);
  }, [posts]);

  const removePost = useCallback(
    async (id: number) => {
      await remove(id);
      const updatedPosts = remainingPosts.filter((post) => post.id !== id);
      setRemainingPosts(updatedPosts);
    },
    [remainingPosts, setRemainingPosts]
  );

  return { remainingPosts, removePost };
};
