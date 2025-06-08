import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Slidebar from './Components/Slidebar'
import UserRegister from './Pages/userRegister'
import SupplierRegister from './Pages/supplierRegister'
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

      {/* Default Route */}
      <Route path='/' element={<Login></Login>}></Route>
    </Routes>

    <Footer></Footer>

    </>

  )
}

export default App
