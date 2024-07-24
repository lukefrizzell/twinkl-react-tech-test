import { render, screen } from "@testing-library/react";
import { Post } from "./Post";
import { PostContent } from "../../PostContent";

const POST: PostContent = { id: 1, title: "Post 1", body: "Post 1 body" };

describe("<Post />", () => {
  it("displays the post title", () => {
    render(<Post post={POST} />);
    const postTitle = screen.getByText(POST.title);
    expect(postTitle).toBeInTheDocument();
  });

  it("displays the post body", () => {
    render(<Post post={POST} />);
    const postTitle = screen.getByText(POST.body);
    expect(postTitle).toBeInTheDocument();
  });

  it("displays a remove button", () => {
    render(<Post post={POST} />);
    const removeButton = screen.getByRole("button", { name: "Remove" });
    expect(removeButton).toBeInTheDocument();
  });
});
