import './App.css';
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import { PostDetail } from '../components/PostDetail';
import { Root } from '../components/Root';

//  Define routes for the app
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Home/>} />
    <Route path=':title' element={<PostDetail/>} />
  </Route>
));

//  App Component
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;