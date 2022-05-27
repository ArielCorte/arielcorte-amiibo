import React from 'react'
import styled from 'styled-components'
import Price from './Price'

const CartSummary = ({ subTotal, taxPct }) => {
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--light-subtle-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;

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

export default CartSummary
