import React from 'react'
import SignUp from './SignUp';
import Login from './Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
