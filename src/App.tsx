import { Posts } from "./Posts";

const App = () => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default App;
