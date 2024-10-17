// import { UserName } from './UserName'
// import UserName from './UserName'
import {UserName as Usname} from './UserName'
import {UserEmail} from './UserName'
import UserAge  from './UserName'

  
  const App = () => {
  return (
    <div>
      <h1>Meu primeiro componente de usuário.</h1>

      <Usname />
      <UserEmail />
      <UserAge />
    </div>
  )
}

export default App;