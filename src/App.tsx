
const App = () => {
  const handleGetPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    }).then( _response => {console.log('Tudo certo!')})

  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisiçao.</button>
    </div>
  )
}

export default App
