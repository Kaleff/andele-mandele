import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/error-page.tsx';
import Homepage from './components/homepage.tsx';
import Episodes from './components/episodes.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />
      },
      {
        path: "episodes",
        element: <Episodes />
      },
      {
        path: "episode/:id",
        element: <></>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
