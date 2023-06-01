import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateCoffees from './components/CreateCoffees.jsx';
import UpdateCoffees from './components/UpdateCoffees.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: '/createCoffees',
    element: <CreateCoffees></CreateCoffees>,

  },
  {
    path: '/updateCoffees',
    element: <UpdateCoffees></UpdateCoffees>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
