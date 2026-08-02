import { Routes , Route } from "react-router-dom"
import Home from "./features/home/Home"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CartItemsPages from "./pages/CartItemsPages"

function App() {

  return (
    <>
         <Navbar/>
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<LoginPage/>} />
        <Route  path="/register" element={<RegisterPage/>} />
        <Route  path="/products" element={<ProductListPage/>} />
        <Route  path="/products/:id" element={<ProductDetailsPage/>} />
        <Route  path="/cart/:id" element={<CartItemsPages/>} />
    </Routes>

    </>
  )
}

export default App




