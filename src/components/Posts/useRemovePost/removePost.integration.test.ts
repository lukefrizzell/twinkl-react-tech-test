import { removePost } from "./removePost";

describe("removePost", () => {
  it("calls the API to remove the post", async () => {
    const id = 1;
    await expect(removePost(id)).resolves.toStrictEqual({
      outcome: "success",
      data: null,
    });
  });
});
