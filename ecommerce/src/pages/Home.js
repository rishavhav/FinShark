import Navbar from "../features/navbar/Navbar"
import ProductList from "../features/product-list/components/ProductList"
import Login from "../features/auth/components/Login"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}

export default Home
