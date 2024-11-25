import { ChangeEvent, useState } from "react"


const App = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(e.target.value)
  }

  return (
      <div>
        <input 
          value={value}
          onChange={handleChange}
          />

          <h2>{value}</h2>
      </div >
  )
}

export default App
