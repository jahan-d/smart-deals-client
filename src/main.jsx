import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layouts/RootLayout'
import Home from './components/Home'
import AllProducts from './components/allProducts/AllProducts'
import AuthProvider from './context/AuthProvider'
import Register from './components/Register'
import MyProducts from './components/MyProducts'
import MyBids from './components/MyBids'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'allProducts',
        element: <AllProducts />,
      },
      {
        path: 'register',
        element : <Register />,
      },
      {
        path: 'myProducts',
        element : <MyProducts />,
      },
      {
        path: 'myBids',
        element : <MyBids />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
