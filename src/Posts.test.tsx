import { render, screen } from "@testing-library/react";
import { Posts } from "./Posts";
import { PostContent } from "./Post";

const POSTS: PostContent[] = [
  { id: 1, title: "Post 1", body: "Post 1 body" },
  { id: 2, title: "Post 2", body: "Post 2 body" },
  { id: 3, title: "Post 3", body: "Post 3 body" },
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
