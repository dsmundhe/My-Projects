import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>

        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form className='logincss'
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >

            <h1 className='text-2xl mb-7 font-medium text-center'>Login</h1>

            <input type="email" placeholder='Email' className="input-box" />

            <input type="password" placeholder='Password' className="input-box" />

            <button type='submit' className='py-2 btn-primary'>Login</button>

            <p className='text-sm text-center mt-4'>
              Not registred yet ? {" "}
              <Link to='/signup'>
                <span className='text-blue-400 font-medium text-primary underline'>Create account!</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
