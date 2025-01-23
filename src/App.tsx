const App = () => {
  const handleGetPosts = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
      // body: JSON.stringify({title: 'Meu novo EDITADO', body: 'Corpo do meu post'}),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const result = await request.json()

    console.log('O resultado foi: ', result)
  }

  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisiçao.</button>
    </div>
  )
  }

export default App;
