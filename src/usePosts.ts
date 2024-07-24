import { useEffect, useState } from "react";
import { PostContent } from "./components/Post";

const POSTS_URI = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async (): Promise<PostContent[]> => {
  const response = await fetch(POSTS_URI);
  console.log(response);
  return await response.json();
};

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
