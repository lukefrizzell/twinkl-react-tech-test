import { render, screen } from "@testing-library/react";
import { usePosts } from "./usePosts";

const Posts: React.FC = () => {
    const { posts, loading } = usePosts();

    return (
        <div>
            {loading && <div>Loading...</div>}
            {posts.map((post) => (
                <div data-testid="post" key={post.id} />
            ))}
        </div>
    );
};

describe("usePosts", () => {
    it("returns an empty list whilst loading", () => {
        render(<Posts />);
        const posts = screen.queryAllByTestId("post");
        expect(posts).toStrictEqual([]);
    });

    it("returns a loading state", () => {
        render(<Posts />);
        const loading = screen.getByText("Loading...");
        expect(loading).toBeInTheDocument();
    });

    it("returns a list of posts once loaded", async () => {
        render(<Posts />);
        const posts = await screen.findAllByTestId("post");
        expect(posts.length).toBeGreaterThan(0);
    });

    it('does not display the loading state once loaded', async () => {
        render(<Posts />);
        await screen.findAllByTestId("post");
        const loading = screen.queryByText('Loading...');
        expect(loading).not.toBeInTheDocument();
    })
})