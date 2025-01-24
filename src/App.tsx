import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";

const App = () => {
  return (
    <div>
      ...
      <Routes>
        <Route
          index
          element={ <Home /> }
        />

        <Route
          path='/about'
          element={ <About /> }
        />

        <Route
          path='/products/:categoryId/:productId'
          element={ <Product /> }
        />

      </Routes>
    </div>
  )
}

export default App;
