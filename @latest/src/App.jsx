import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      { path: '/products', element: <Products/>}, 
      {path: 'products/:id', element:<ProductsDetails/>},
      {path:'*',element:<NotFound/>}
    
   ], }, ]);


  return (
    <>
 
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
