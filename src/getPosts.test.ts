import { getPosts } from "./getPosts";
import { vitest } from "vitest";

describe("getPosts", () => {
  it("returns an error when the request fails", async () => {
    const error = new Error("Failed to fetch");
    vitest.spyOn(global, "fetch").mockRejectedValueOnce(error);
    await expect(getPosts()).resolves.toStrictEqual({outcome: 'error', error});
  });
});
