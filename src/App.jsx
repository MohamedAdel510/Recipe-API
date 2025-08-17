import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';
import Notfound from './Components/Notfound/Notfound';
import Home from './Components/Home/Home';
import All from './Components/All/All';
import Category from './Components/Category/Category';

const router = createBrowserRouter([
  {path: "", element: <Layout/>, children:[
    {path: '', element: <Home/>, children:[
      {path: 'home', element: <Home/>},
      {path: '', element: <All/>},
      {path: 'category/:name', element: <Category/>}
    ]},
    {path: "recipeDetails/:id", element: <RecipeDetails/>},
    {path: "*", element: <Notfound/>}
  ]}
]);

function App() {

  return (
    <>
      
      <RouterProvider router = {router}/>

    </>
  )
}

export default App
