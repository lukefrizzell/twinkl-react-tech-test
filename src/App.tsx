import { Posts } from "./Posts";
import "./App.css";

const App = () => {
  const posts = [
    { id: 1, title: "Post 1", body: "Post 1 body" },
    { id: 2, title: "Post 2", body: "Post 2 body" },
    { id: 3, title: "Post 3", body: "Post 3 body" },
  ];

  return (
    <div className="container">
      <div className="container-inner">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default App;
