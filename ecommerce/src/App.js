import React from "react"
import logo from "./logo.svg"
import Counter from "./features/counter/Counter"
import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./features/cart/Cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login/",
    element: <LoginPage />,
  },
  {
    path: "signup/",
    element: <SignUpPage />,
  },
  {
    path: "cart/",
    element: <Cart />,
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
