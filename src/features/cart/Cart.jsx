import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartProduct from '../../common/components/CartProduct'
import CartSummary from '../../common/components/CartSummary'

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart)

  return (
    <Wrapper>
      {window.innerWidth < 460 ? <div></div> : <div></div>}
      <div className='cart-products-container'>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <CartProduct
              image={product.image}
              name={product.name}
              series={product.amiiboSeries}
              type={product.type}
              price={60}
              id={product.id}
              qty={product.qty}
              key={product.id}
            />
          ))
        ) : (
          <em>Add products to the cart</em>
        )}
      </div>
      <div className='cart-summary-container'>
        <CartSummary
          subTotal={cartProducts.reduce(
            (partialSum, prod) => partialSum + prod.price * prod.qty,
            0
          )}
          taxPct={21}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  min-height: 100vh;

  .cart-summary-container {
    width: 40%;
  }

  @media screen and (max-width: 460px) {
    flex-direction: column;
    width: 90%;

    .cart-summary-container {
      width: 100%;
    }
  }
`

export default Cart
