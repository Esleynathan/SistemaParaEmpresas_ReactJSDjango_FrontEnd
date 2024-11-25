import { Button } from "./componentes/Button";

function App() {

  const handleClick = (label: string) => alert (label);

  return (
    <div>
      < Button
        onClick={handleClick}
      />

    </div >
  )
}

export default App
