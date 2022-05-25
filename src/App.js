import React from 'react'
import NavBar from './layouts/NavBar'
import Products from './routes/Products'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Products />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
