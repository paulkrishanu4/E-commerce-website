
import './App.css'
import Contact from './components/contactus/Contact'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from "react-router-dom"
import Login from './components/Signin/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import { Products } from './components/products/Products'
import { Cart } from './components/cart/Cart'
import { Success } from './components/Success/Success'
import { Footer } from './components/Footer/Footer'
import Admin from './components/Admin/Admin'


function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/success" element={<Success></Success>}></Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
    </Routes>
    <Footer></Footer>
   
    
      
    </>
  )
}

export default App
