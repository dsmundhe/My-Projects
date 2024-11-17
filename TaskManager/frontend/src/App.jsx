import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp'
function App() {

  const routes = (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Router>
  )
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
