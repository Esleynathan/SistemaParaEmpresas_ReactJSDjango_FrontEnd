import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
      <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>Remover um.</button>
        <button onClick={handleClick}>Adicionar um.</button>

      </div >
  )
}

export default App
