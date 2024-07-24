import { render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import { usePosts } from "./usePosts";
import { getPosts } from "./getPosts";
import { PostContent } from "./components/Post";

vitest.mock("./getPosts");

const POSTS: PostContent[] = [
  { id: 1, title: "Post 1", body: "Post 1 body" },
  { id: 2, title: "Post 2", body: "Post 2 body" },
];

const Posts: React.FC = () => {
  const { result } = usePosts();

  return (
    <div>
      outcome: {result.outcome}
      {result.outcome === "success" &&
        result.data.map((post) => <div data-testid="post" key={post.id} />)}
    </div>
  );
};

const getPostsMock = vitest.mocked(getPosts);

describe("usePosts", () => {
  describe("when posts are loading", () => {
    beforeEach(() => {
      getPostsMock.mockResolvedValue({ outcome: "success", data: [] });
    });

    it("returns an empty list whilst loading", () => {
      render(<Posts />);
      const posts = screen.queryAllByTestId("post");
      expect(posts).toStrictEqual([]);
    });

    it("returns a loading state", () => {
      render(<Posts />);
      const loading = screen.queryByText('outcome: loading');
      expect(loading).toBeInTheDocument();
    });
  });

  describe("when posts are loaded", () => {
    beforeEach(() => {
      getPostsMock.mockResolvedValue({ outcome: "success", data: POSTS });
    });

    it("returns a list of posts once loaded", async () => {
      render(<Posts />);
      const posts = await screen.findAllByTestId("post");
      expect(posts).toHaveLength(POSTS.length);
    });

    it("does not display the loading state once loaded", async () => {
      render(<Posts />);
      await screen.findAllByTestId("post");
      const loading = screen.queryByText('outcome: loading');
      expect(loading).not.toBeInTheDocument();
    });
  });

  describe("when posts fail to load", () => {
    beforeEach(() => {
      getPostsMock.mockResolvedValue({
        outcome: "error",
        error: "Failed to load posts",
      });
    });

    it("displays an error message", async () => {
      render(<Posts />);
      const error = await screen.findByText("outcome: error");
      expect(error).toBeInTheDocument();
    });
  });
});
