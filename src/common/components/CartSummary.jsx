import React from 'react'
import styled from 'styled-components'
import CheckoutBtn from './CheckoutBtn'
import Price from './Price'
import { resetCart } from '../../features/cart/cartSlice'

import { connect } from 'react-redux'

const CartSummary = ({ subTotal, taxPct, resetCart }) => {
  return (
    <Wrapper>
      <h2 className='title'>Order Summary</h2>
      <div className='subtotal'>
        <p className='label'>Item(s) subtotal</p>{' '}
        <Price className='price' value={subTotal} />
      </div>
      <div className='tax'>
        <p className='label'>Estimated tax ({taxPct}%)</p>
        <Price className='price' value={(subTotal / 100) * taxPct} />
      </div>
      <div className='total'>
        <p className='label'>Estimated total</p>
        <Price className='price' value={subTotal + (subTotal / 100) * taxPct} />
      </div>
      <CheckoutBtn onClick={() => resetCart()} />
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => {
      dispatch(resetCart())
    },
  }
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--light-subtle-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  margin-bottom: 10rem;

  .title,
  .subtotal,
  .tax,
  .total {
    display: flex;
    justify-content: space-between;
  }

  .title,
  .subtotal,
  .tax {
    border-bottom: 1px solid var(--subtle-color);
    padding: 0.5rem 0;
  }

  .title,
  .label,
  .price {
    font-weight: 700;
  }

  .total,
  .title {
    font-size: 1.3rem;
  }

  .title {
    padding-bottom: 1rem;
  }

  .total {
    padding: 1rem 0;
  }
`

export default connect(null, mapDispatchToProps)(CartSummary)
