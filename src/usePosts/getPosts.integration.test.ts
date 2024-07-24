import { getPosts } from "./getPosts";

describe("getPosts", () => {
    it("fetches a list of posts", async () => {
        const result = await getPosts();
        expect(result).toStrictEqual({
            outcome: "success",
            data: expect.any(Array),
        });
    });
})