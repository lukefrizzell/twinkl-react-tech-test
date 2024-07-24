import { Posts } from "./components/Posts";
import "./App.css";
import { usePosts } from "./usePosts";

const App = () => {
  const { posts } = usePosts();

  return (
    <div className="container">
      <div className="container-inner">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default App;
