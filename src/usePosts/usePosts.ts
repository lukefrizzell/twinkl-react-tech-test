import { useEffect, useState } from "react";
import { PostContent } from "../PostContent";
import { getPosts } from "./getPosts";
import { Result } from "./Result";

type LoadingStatus = { outcome: "loading" };
export type DataStatus<TData> = Result<TData> | LoadingStatus;

export const usePosts = () => {
  const [result, setResult] = useState<DataStatus<PostContent[]>>({
    outcome: "loading",
  });

  useEffect(() => {
    const initialisePosts = async () => {
      const getPostsResult = await getPosts();
      setResult(getPostsResult);
    };

    initialisePosts();
  }, [setResult]);

  return { result };
};
