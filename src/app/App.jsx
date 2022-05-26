import React from 'react'
import NavBar from '../common/layouts/NavBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../common/components/GlobalStyle'
import Products from '../features/products/Products'
import Cart from '../features/cart/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Products />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
