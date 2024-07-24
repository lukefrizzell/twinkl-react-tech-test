import { useEffect, useState } from "react";
import { PostContent } from "./components/Post";
import { getPosts } from "./getPosts";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialisePosts = async () => {
      const result = await getPosts();
      setPosts(result);
      setLoading(false);
    };

    initialisePosts();
  }, [setLoading, setPosts]);

  return { posts, loading };
};
