import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './Homepage'
import Chatpage from './Chatpage'
function Layout() {
    return (
        <div className='layout'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/chatpage' element={<Chatpage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
