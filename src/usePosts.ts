import { useEffect, useState } from "react";
import { PostContent } from "./components/Post";
import { getPosts } from "./getPosts";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initialisePosts = async () => {
      const result = await getPosts();
      
      if(result.outcome === "error") {
        setLoading(false);
        setError("Could not load posts");
        return 
      }

      setPosts(result.data);
      setLoading(false);
    };

    initialisePosts();
  }, [setLoading, setPosts]);

  return { posts, loading, error };
};
