import React from 'react'
import Layout from '../common/layouts/Layout'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../common/components/GlobalStyle'
import Fonts from '../common/fonts/Fonts'
import Products from '../features/products/Products'
import Cart from '../features/cart/Cart'
import { Helmet } from 'react-helmet'
import favicon from '../common/assets/icons/favicon.ico'
import OpenGraph from './OpenGraph'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <link rel='shortcut icon' href={favicon} type='image/x-icon' />
          <meta name='theme-color' content='#ac000d'></meta>
          <meta
            name='description'
            content='This project is an e-commerce mockup. You can add products to cart, remove them and choose their quantity.'
          />
          <OpenGraph />
        </Helmet>
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
