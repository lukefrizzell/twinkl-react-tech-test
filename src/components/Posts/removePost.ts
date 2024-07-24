import { Result } from "../../Result";

export const removePost = async (id: number): Promise<Result<null>> => {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!result.ok) {
      return {
        outcome: "error",
        error: "Failed to delete post",
      };
    }

    return { outcome: "success", data: null };
  } catch {
    return {
      outcome: "error",
      error: new Error("Failed to fetch"),
    };
  }
};
