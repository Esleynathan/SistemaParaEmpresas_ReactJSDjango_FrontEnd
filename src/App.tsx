import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleadd = () => {
    if (inputValue == '') return;

    // Método 1:
    // setTasks ([...tasks, inputValue])

    // Método 2:
    // setTasks(tasks.concat([inputValue]))

    // Método 3:
    const newTasks = [...tasks]
    newTasks.push(inputValue)
    setTasks(newTasks)

    setInputValue('')
  }


  return (
      <div>
        <h1>Minha lista de tarefas:</h1>
        <div>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />

          <button onClick={handleadd}>
            Adicionar
          </button>  
        </div>


        <div>
          <ul>
            {tasks.map((value, key) => (
              <li key={key}>
                {value}

              </li>
              
            ))}
          </ul>
        </div>
    </div>
  )
}

export default App;
