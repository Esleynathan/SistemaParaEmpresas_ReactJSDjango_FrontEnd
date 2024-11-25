import { ChangeEvent, useState } from "react"


const App = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(e.target.value)
  }

  // if (value != '') {
  //   return (
  //     <div>
  //       Você já escreveu.
  //     </div>
  //   )
  // }

  return (
      <div>
        {value == '' ?
          <>
            <input 
              value={value}
              onChange={handleChange}
              />
            <h2>{value}</h2>
          </>
          :
          'Você já escreveu.'
        }
      </div >
  )
}

export default App
