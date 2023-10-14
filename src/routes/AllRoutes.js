import { Routes, Route } from 'react-router-dom';
import { Home, Register } from '../pages';

import React from 'react'


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='register' element={<Register />} />
        </Routes>
    )
}

