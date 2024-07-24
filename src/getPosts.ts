import { PostContent } from "./components/Post";

export const POSTS_URI = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<PostContent[]> => {
  const response = await fetch(POSTS_URI);
  console.log(response);
  return await response.json();
};
