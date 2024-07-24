import { Posts } from "./components/Posts";
import { DataStatus, usePosts } from "./usePosts";
import { PostContent } from "./PostContent";
import "./App.css";

type PostContentQueryStatus = DataStatus<PostContent[]>;

const ComponentsByResult: {
  [Outcome in PostContentQueryStatus["outcome"]]: React.FC<
    Extract<PostContentQueryStatus, { outcome: Outcome }>
  >;
} = {
  loading: () => <div>Loading...</div>,
  success: (result) => <Posts posts={result.data} />,
  error: () => null,
};

const App = () => {
  const { result } = usePosts();
  const Component = ComponentsByResult[result.outcome];

  return (
    <div className="container">
      <div className="container-inner">
        <Component {...(result as any)} />
      </div>
    </div>
  );
};

export default App;
