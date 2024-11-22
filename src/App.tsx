import { UserInfo } from "./componentes/UserInfo";

const App = () => {
  const isLogged = true;

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
      <h1>Meu primeiro componente de usuário</h1>

      <UserInfo
          avatar = "https://img.favpng.com/17/24/10/computer-icons-user-profile-male-avatar-png-favpng-jhVtWQQbMdbcNCahLZztCF5wk.jpg"
          name = "Ésley"
          age = {30}
          email = "esley@hotmail.com"
          roles = {[{id: 1, title: 'CEO'}]}
      />

      <UserInfo
          avatar = "https://clipart-library.com/2023/426-4262524_avatar-the-last-airbender-png-transparent-png.png"
          name = "Nathan"
          age = {20}
          email = "nathan@hotmail.com"
          roles = {[{id: 2, title: 'CTO'}]}
      />

    </div>
  )




}

export default App;