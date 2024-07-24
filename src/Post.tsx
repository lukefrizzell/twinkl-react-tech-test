export type PostContent = {
  id: number;
  title: string;
  body: string;
};

export const Post: React.FC<{ post: PostContent }> = ({ post }) => {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
};
