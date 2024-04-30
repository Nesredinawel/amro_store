import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart' 
import Login from './pages/Login'
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import AddProduct from "./components/AddProduct";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruit" element={<Category  category="fruit" />} />
        <Route path="/vegetable" element={<Category  category="vegetable" />} />
        <Route path="/creal" element={<Category category="creal" />} />
        <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart-page" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Admin />} >
         
        </Route>
        
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
      
    </main>
  )
}