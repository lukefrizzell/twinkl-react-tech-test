import { Posts } from "./components/Posts";
import "./App.css";
import { usePosts } from "./usePosts";

const App = () => {
  const { posts, loading } = usePosts();

  return (
    <div className="container">
      <div className="container-inner">
        {loading && <div>Loading...</div>}
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default App;
