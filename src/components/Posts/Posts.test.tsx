import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Posts } from "./Posts";
import { PostContent } from "../../PostContent";
import { vitest } from "vitest";
import { removePost } from "./useRemovePost/removePost";

const POSTS: PostContent[] = [
  { id: 1, title: "Post 1", body: "Post 1 body" },
  { id: 2, title: "Post 2", body: "Post 2 body" },
  { id: 3, title: "Post 3", body: "Post 3 body" },
];

vitest.mock("./useRemovePost/removePost");
const removePostMock = vitest.mocked(removePost);

describe("<Posts />", () => {
  beforeEach(() => {
    vitest.resetAllMocks();
    removePostMock.mockResolvedValue({ outcome: "success", data: null });
  });

  it("renders a list of posts", () => {
    render(<Posts posts={POSTS} />);
    const posts = screen.getAllByRole("listitem");
    expect(posts).toHaveLength(POSTS.length);
  });

  it.each(POSTS)("displays the post title", (post) => {
    render(<Posts posts={POSTS} />);
    const postTitle = screen.getByText(post.title);
    expect(postTitle).toBeInTheDocument();
  });

  it("removes a post when the remove button is clicked", async () => {
    render(<Posts posts={POSTS} />);
    const removeButton = screen.getAllByRole("button", { name: "Remove" })[0];
    fireEvent.click(removeButton);
    expect(removePostMock).toHaveBeenCalledWith(POSTS[0].id);
    await waitForElementToBeRemoved(() => screen.queryByText(POSTS[0].title));
  });

  it("does not remove a post when the remove button is clicked and the API call fails", async () => {
    removePostMock.mockResolvedValue({
      outcome: "error",
      error: "Failed to remove post",
    });
    render(<Posts posts={POSTS} />);
    const removeButton = screen.getAllByRole("button", { name: "Remove" })[0];
    fireEvent.click(removeButton);
    expect(removePostMock).toHaveBeenCalledWith(POSTS[0].id);
    expect(
      await screen.findByText("Failed to remove post")
    ).toBeInTheDocument();
  });

  describe("search bar", () => {
    it("displays a search bar", () => {
      render(<Posts posts={POSTS} />);
      const searchBar = screen.getByRole("search");
      expect(searchBar).toBeInTheDocument();
    });

    it("filters posts by title", () => {
      render(<Posts posts={POSTS} />);
      const searchBar = screen.getByRole("search");

      fireEvent.change(searchBar, { target: { value: "1" } });

      const posts = screen.getAllByRole("listitem");
      expect(posts).toHaveLength(1);
    });

    it("filters posts by body", () => {
      render(<Posts posts={POSTS} />);
      const searchBar = screen.getByRole("search");

      fireEvent.change(searchBar, { target: { value: "3 body" } });

      const posts = screen.getAllByRole("listitem");
      expect(posts).toHaveLength(1);
    });

    it("accepts search term in any case", () => {
      render(<Posts posts={POSTS} />);
      const searchBar = screen.getByRole("search");

      fireEvent.change(searchBar, { target: { value: "POST 3 BODY" } });

      const posts = screen.getAllByRole("listitem");
      expect(posts).toHaveLength(1);
    });
  });
});
