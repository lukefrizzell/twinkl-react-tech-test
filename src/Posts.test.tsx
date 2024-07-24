import { render, screen } from "@testing-library/react";
import { Posts } from "./Posts";

const POSTS = [{ id: 1 }, { id: 2 }, { id: 3 }];


describe("<Posts />", () => {
  it("should render a list of posts", () => {
    render(<Posts posts={POSTS} />);
    const posts = screen.getAllByRole("listitem");
    expect(posts).toHaveLength(POSTS.length);
  });
});
