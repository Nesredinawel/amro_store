import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart' 
import Login from './pages/Login'
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Logout from "./pages/Logout";
import AddProfile from "./components/AddProfile";

import OrderProduct from "./pages/OrderProduct";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
 
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/fruit" element={<Category  category="fruit" />} />
        <Route path="/vegetable" element={<Category  category="vegetable" />} />
        <Route path="/creal" element={<Category category="creal" />} />
        <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/*" element={< OrderProduct/>} />
       
        <Route path="/profile" element={< Profile/>} />
        <Route path="/addprofile" element={< AddProfile/>} />
      
        
        
      </Routes>
      <Footer />
  
      
      
    </main>
  )
}