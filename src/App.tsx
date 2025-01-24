import axios, { Axios, AxiosError } from "axios"

const App = () => {

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  })


  const handleGetPosts = async () => {
    // const posts = await api.get('posts').catch(response => { console.log(response)})

    try{
      const posts = await api.get('posts')
      console.log(posts.data)
      
    } catch (e){

      const error = e as AxiosError
      console.log('O erro foi:', error.message)
    }
  }


  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisiçao.</button>
    </div>
  )
  }

export default App;
