import { vitest } from "vitest";
import { removePost } from "./removePost";

describe("removePost", () => {
  it("returns an error when the request fails", async () => {
    const error = new Error("Failed to fetch");
    global.fetch = vitest.fn().mockRejectedValueOnce(error);
    await expect(removePost(1)).resolves.toStrictEqual({
      outcome: "error",
      error,
    });
  });

  it("returns an error when the status code is not ok", async () => {
    global.fetch = vitest.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
    });
    await expect(removePost(1)).resolves.toStrictEqual({
      outcome: "error",
      error: "Failed to delete post",
    });
  })
});
