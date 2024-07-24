import { render, screen } from "@testing-library/react";
import { Posts } from "./Posts";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

describe("<Posts />", () => {
  it("should render a list of posts", () => {
    render(<Posts posts={POSTS} />);
    const posts = screen.getAllByRole("listitem");
    expect(posts).toHaveLength(POSTS.length);
  });

  it.each(POSTS)("should display the post title", (post) => {
    render(<Posts posts={POSTS} />);
    const postTitle = screen.getByText(post.title);
    expect(postTitle).toBeInTheDocument();
  });
});
