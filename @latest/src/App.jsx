import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";

import Send from "./components/Send/Send";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
// import Dogs from "./components/Dogs/Dogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      { path: '/hero', element: <Hero/>, children:[
        {path: 'about', element:<About/>},
        // {path: 'dogs', element: <Dogs/>},
      ] },
      {path: 'gallery', element:<Gallery/>},
      {path: '/send', element: <Send/>},
      // {path: '/parent', element: <Parent/>},
      {path: '*', element: <NotFound/>},
    ]},
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
