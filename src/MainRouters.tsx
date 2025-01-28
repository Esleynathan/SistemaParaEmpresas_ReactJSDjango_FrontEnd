import { Routes, Route, Outlet, useRoutes } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { Login } from "./pages/Login";


// Método 1
// export const MainRouters = () => {
//     return ( 
//         <Routes>
//         <Route path='*' element={ <NotFoundPage /> } />
//         <Route index element={ <Home /> } />
//         <Route path='/about' element={ <About /> } />


//         <Route 
//             path='/products' 
//             element={
//                 <AuthMiddleware>
//                 <Outlet />
//                 </AuthMiddleware>
//             }>

//             <Route element={ <Products /> } />
//             <Route path=':categoryId/:productId' element={ <Product /> } />
//         </Route>


//         <Route path='/login' element={ <Login /> } />
//     </Routes>
//     )
// }


// Método 2 (Objetos JAVASCRIPT)
export const MainRouters = () => {
    const element = useRoutes([
        {
            index: true,
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/products',
            element: <AuthMiddleware> <Outlet /> </AuthMiddleware>,
            children: [
                {
                    index: true,
                    element: <Products />
                },
                {
                    path: ':categoryId/:productId',
                    element: <Product />
                },
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '*',
            element: <NotFoundPage />
        }
        
    ])

    return element;
}