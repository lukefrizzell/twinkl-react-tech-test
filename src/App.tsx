const App = () => {
  const posts = [
      { id: 1, },
      { id: 2, },
      { id: 3, },
  ]

  return (
      <div>
          <ul>
              {posts.map(post => (
                  <li key={post.id}>post</li>
              ))}
          </ul>
      </div>
  )
}

export default App;