import { FormEvent } from "react"

const App = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    alert ('Formulário enviado com sucesso!')
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input />
          <button>Enviar</button>
        </form>
      </div >
  )
}

export default App
