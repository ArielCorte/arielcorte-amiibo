import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartProduct from '../../common/components/CartProduct'
import CartSummary from '../../common/components/CartSummary'

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart)

  return (
    <Wrapper>
      <div className='cart-products-container'>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <CartProduct
              image={product.image}
              name={product.name}
              series={product.amiiboSeries}
              type={product.type}
              price='60'
              id={product.id}
              qty={product.qty}
              key={product.id}
            />
          ))
        ) : (
          <em>Esperando Productos</em>
        )}
      </div>
      <div className='cart-summary-container'>
        <CartSummary />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-gap: 2rem;
  margin-top: 4rem;
`

export default Cart
