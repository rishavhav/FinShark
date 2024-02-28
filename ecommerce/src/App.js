import React from "react"
import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage"
import Checkout from "./pages/Checkout"
import ProductDetailPage from "./pages/ProductDetailPage"

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
  {
    path: "checkout/",
    element: <Checkout />,
  },
  {
    path: "product-detail/",
    element: <ProductDetailPage />,
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
