import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import AddPage from '../pages/add-page'
import DetailPage from '../pages/detail-page'
import ErrPage from '../pages/error-page'
import HomePage from '../pages/home-page'
import Wishlist from '../pages/wishlist-page'

const Routing = () => {
  const [wishlists, setWishlists] = useState([])
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage wishlists={wishlists} setWishlists={setWishlists}/> }/>
            <Route path='/add-page' element={<AddPage/> }/>
            <Route path='/home-page/:_id' element={<DetailPage/> }/>
            <Route path='*' element={<ErrPage/> }/>
            <Route path='/wishlist-page' element={<Wishlist wishlists={wishlists} setWishlists={setWishlists}/> }/>
        </Routes>
    </div>
  )
}

export default Routing