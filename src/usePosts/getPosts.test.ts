import { getPosts } from "./getPosts";
import { vitest } from "vitest";

describe("getPosts", () => {
  it("returns an error when the request fails", async () => {
    const error = new Error("Failed to fetch");
    vitest.spyOn(global, "fetch").mockRejectedValueOnce(error);
    await expect(getPosts()).resolves.toStrictEqual({
      outcome: "error",
      error,
    });
  });

  it("returns an error when the data does not contain a list of posts", async () => {
    vitest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => ({}),
      ok: true,
    } as any);

    await expect(getPosts()).resolves.toStrictEqual({
      outcome: "error",
      error: "Data does not contain a list of posts",
    });
  });

  it("returns an error when posts are invalid", async () => {
    vitest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => [{ not: "a valid post" }],
      ok: true,
    } as any);

    await expect(getPosts()).resolves.toStrictEqual({
      outcome: "error",
      error: "Data contains invalid posts",
    });
  });

  it("returns an error when the status code is not ok", async () => {
    vitest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as any);

    await expect(getPosts()).resolves.toStrictEqual({
      outcome: "error",
      error: "Failed to fetch posts",
    });
  });
});
