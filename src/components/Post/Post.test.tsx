import { render, screen } from "@testing-library/react";
import { Post } from "./Post";
import { PostContent } from "../../PostContent";
import { vitest } from "vitest";

const POST: PostContent = { id: 1, title: "Post 1", body: "Post 1 body" };

const onRemove = vitest.fn();

describe("<Post />", () => {
  beforeEach(() => {
    vitest.resetAllMocks();
  });

  it("displays the post title", () => {
    render(<Post post={POST} onRemove={() => onRemove()} />);
    const postTitle = screen.getByText(POST.title);
    expect(postTitle).toBeInTheDocument();
  });

  it("displays the post body", () => {
    render(<Post post={POST} onRemove={() => onRemove()} />);
    const postTitle = screen.getByText(POST.body);
    expect(postTitle).toBeInTheDocument();
  });

  it("displays a remove button", () => {
    render(<Post post={POST} onRemove={() => onRemove()} />);
    const removeButton = screen.getByRole("button", { name: "Remove" });
    expect(removeButton).toBeInTheDocument();
  });

  it("calls onRemove when the remove button is clicked", () => {
    render(<Post post={POST} onRemove={() => onRemove()} />);
    const removeButton = screen.getByRole("button", { name: "Remove" });
    removeButton.click();
    expect(onRemove).toHaveBeenCalled();
  });
});
