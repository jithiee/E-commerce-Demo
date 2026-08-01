import { Routes , Route } from "react-router-dom"
import Home from "./features/home/Home"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"


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
    </Routes>

    </>
  )
}

export default App




