import { getPosts } from "./getPosts";

describe("getPosts", () => {
    it("should fetch a list of posts", async () => {
        const posts = await getPosts();
        expect(posts.length).toBeGreaterThan(0);
    });
})