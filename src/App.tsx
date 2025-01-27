import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { MainLayout } from "./components/MainLayout";

const App = () => {
  return (
    <div>
      ...
      <Routes>
        <Route element={<MainLayout />}> 

          <Route
            index
            element={ <Home />}
          />

          <Route
            path='/about'
            element={ <About /> }
          />


          <Route path='/products'>
            <Route            
              element={ <Products /> }
            />

            <Route
              path=':categoryId/:productId'
              element={ <Product /> }
            />
          </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App;
