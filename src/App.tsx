// import { UserInfo } from "./componentes/UserInfo";
import { Card } from "./componentes/Card";
import { UserName } from "./componentes/UserName";

const App = () => {
  // const isLogged = true;

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
      <Card> 
        <>
          <UserName 
            name="Ésley" 
          />

          <h1>Texto</h1>
        </>
      </Card>
    </div>

      {/* 
      <h1>Meu primeiro componente de usuário</h1>

      <UserInfo
          avatar = "https://clipart-library.com/2023/426-4262524_avatar-the-last-airbender-png-transparent-png.png"
          name = "Ésley"
          age = {30}
          email = "esley@hotmail.com"
          roles = {[{id: 1, title: 'CEO'}]}
      />

      <UserInfo
          name = "Nathan"
          age = {20}
          email = "nathan@hotmail.com"
          roles = {[{id: 2, title: 'CTO'}]}
      /> */}

  )




}

export default App;