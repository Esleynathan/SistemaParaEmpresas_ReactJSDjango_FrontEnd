import axios from "axios"

const App = () => {
  // const handleGetPosts = async () => {
  //   const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   console.log(posts.data)
  // }

  const handleGetPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data)
      })
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisiçao.</button>
    </div>
  )
  }

export default App;
