import axios from "axios"

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

const App = () => {
  // const handleGetPosts = async () => {
  //   const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
  //     params: {
  //       parametro1: 'valor1',
  //       parametro2: 'valor2',
  //     }
  // })


  // const handleGetPosts = async () => {
  //   const posts = await axios.post('https://jsonplaceholder.typicode.com/posts', {
  //     title: 'Meu novo post',
  //     body: 'Conteudo do meu post',
  //     userId: 1
  // })


  // const handleGetPosts = () => {
  //   axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       console.log(response.data[0].title)
  //     })
  // }
  
  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  })

  // axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

  const handleGetPosts = async () => {
    const posts = await api.get('posts')
    console.log(posts.data)

  }


  return (
    <div>
      <button onClick={handleGetPosts}>Fazer requisiçao.</button>
    </div>
  )
  }

export default App;
