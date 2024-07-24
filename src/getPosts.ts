import { Result } from "./Result";
import { PostContent } from "./components/Post";

export const POSTS_URI = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<Result<PostContent[]>> => {
  try {
    const response = await fetch(POSTS_URI);
    const data = await response.json();
    return { outcome: "success", data };
  } catch (error) {
    return { outcome: "error", error };
  }
};
