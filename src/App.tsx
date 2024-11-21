import { UserInfo } from "./componentes/UserInfo";

const App = () => {
  const isLogged = false;

  // if (isLogged) {
  //   return (
  //     <div>
  //       <h1>Dados do usuario: </h1>

  //       <UserInfo />
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     <h1>Não esta logado:</h1>
  //   </div>
  // )


  // if (!isLogged) {
  //   return;
  // }

  return (
    <div>
      {isLogged ? 'Meu primeiro componente de usuário' : 'Não está logado'}

      {isLogged && <UserInfo />}
      {/* {isLogged ? <UserInfo /> : <h1>Não esta logado:</h1>} */}
    </div>
  )




}

export default App;