import { Result } from "./Result";
import { PostContent } from "../PostContent";

export const POSTS_URI = "https://jsonplaceholder.typicode.com/posts";

const isPostContent = (data: any): data is PostContent =>
  typeof data.id === "number" &&
  typeof data.title === "string" &&
  typeof data.body === "string";

export const getPosts = async (): Promise<Result<PostContent[]>> => {
  try {
    const response = await fetch(POSTS_URI);

    if (!response.ok) {
      return {
        outcome: "error",
        error: "Failed to fetch posts",
      };
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return {
        outcome: "error",
        error: "Data does not contain a list of posts",
      };
    }

    if (data.some((post) => !isPostContent(post))) {
      return {
        outcome: "error",
        error: "Data contains invalid posts",
      };
    }

    return { outcome: "success", data };
  } catch (error) {
    return { outcome: "error", error };
  }
};
