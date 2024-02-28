import Navbar from "../features/navbar/Navbar"
import ProductList from "../features/product-list/ProductList"
import Login from "../features/auth/components/Login"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"

const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  )
}

export default Home
