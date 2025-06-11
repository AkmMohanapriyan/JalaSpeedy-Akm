import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Slidebar from './Components/Slidebar'
import UserRegister from './Pages/userRegister'
import SupplierRegister from './Pages/supplierRegister'
import Home from './Pages/Home'
import { About } from './Pages/About'
import Features from './Pages/Features'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (

    <>

    <Navbar />

    <Routes>

      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<SignUp></SignUp>}></Route>
      <Route path='/slidebar' element={<Slidebar></Slidebar>}></Route>
      <Route path='/userRegister' element={<UserRegister></UserRegister>}></Route>
      <Route path='/supplierRegister' element={<SupplierRegister></SupplierRegister>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/features' element={<Features></Features>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

      {/* Default Route */}
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>

    <Footer></Footer>

    </>

  )
}

export default App
