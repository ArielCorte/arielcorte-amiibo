import React from 'react'
import styled from 'styled-components'
import { MdNavigateNext } from 'react-icons/md'

const CartSummary = ({ subTotal, taxPct }) => {
  return (
    <Wrapper>
      <h2>Order Summary</h2>
      <div className='subtotal'>Item(s) subtotal {subTotal}</div>
      <div className='tax'>
        Estimated tax {Math.round((subTotal / 100) * taxPct * 100) / 100}
      </div>
      <div className='total'>
        Estimated total {subTotal + (subTotal / 100) * taxPct}
      </div>
      <button className='checkout'>
        <MdNavigateNext size='24' /> Checkout
      </button>
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
  font-weight: 700;

  h2,
  .subtotal,
  .tax {
    border-bottom: 1px solid var(--subtle-color);
  }

  .checkout {
    background-color: var(--highlight-color);
    color: var(--primary-color);
    border: none;
    height: 3rem;
    border-radius: 0.3rem;
    font-weight: 700;
    font-size: 1.125rem;
    padding: 0 2rem;
    align-self: flex-end;
    display: inline-flex;
    align-items: center;
  }

  .checkout svg {
    margin-right: 1rem;
  }
`

export default CartSummary
