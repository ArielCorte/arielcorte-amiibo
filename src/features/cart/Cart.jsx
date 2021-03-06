import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartProduct from '../../common/components/CartProduct'
import CartSummary from '../../common/components/CartSummary'
import CartSummaryMobile from '../../common/components/CartSummaryMobile'

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts))
  }, [cartProducts])

  return (
    <Wrapper>
      <Helmet>
        <title>amiiboStore - Shopping cart</title>
      </Helmet>
      <h1>Shopping cart</h1>
      <div className='cart'>
        {window.innerWidth < 460 ? (
          <CartSummaryMobile
            total={
              cartProducts.reduce(
                (partialSum, prod) => partialSum + prod.price * prod.qty,
                0
              ) * 1.21
            }
            nItems={cartProducts.length}
          />
        ) : null}
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .cart {
    width: 80%;
    margin: auto;
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    min-height: 100vh;
  }

  .cart-products-container {
    flex-grow: 1;
    border-top: 0.1rem solid var(--subtle-color);
  }

  .cart-summary-container {
    width: 40%;
  }

  @media screen and (max-width: 1138px) {
    .cart {
      flex-direction: column;
      width: 90%;
      margin-top: 2rem;
    }

    .cart-summary-container {
      width: 100%;
    }
  }
`

export default Cart
