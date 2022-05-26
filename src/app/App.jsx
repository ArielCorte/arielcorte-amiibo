import React from 'react'
import Layout from '../common/layouts/Layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../common/components/GlobalStyle'
import Fonts from '../common/fonts/Fonts'
import Products from '../features/products/Products'
import Cart from '../features/cart/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Products />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
      <Fonts />
    </>
  )
}

export default App
