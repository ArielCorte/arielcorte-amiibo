import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CartProduct from '../../common/components/CartProduct'
import CartSummary from '../../common/components/CartSummary'
import amebo from '../../api/amebo'

const Cart = () => {
  const [products, setProducts] = useState({})

  useEffect(() => {
    amebo.getProducts(setProducts)
  }, [])

  return (
    <Wrapper>
      <div className='cart-products-container'>
        {products.length > 0 ? (
          products.map((product) => (
            <CartProduct
              img={product.image}
              name={product.name}
              series={product.amiiboSeries}
              type={product.type}
              price='60'
              key={product.tail}
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
