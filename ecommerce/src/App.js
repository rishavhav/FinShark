import React from "react"
import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"

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
    element: <CartPage />,
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
