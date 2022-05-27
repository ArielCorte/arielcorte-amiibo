import React from 'react'
import styled from 'styled-components'
import CheckoutBtn from './CheckoutBtn'
import Price from './Price'

const CartSummaryMobile = ({ total, items }) => {
  return (
    <Wrapper>
      <div className='total'>
        <p>Estimated total ({items} items)</p>
        <Price className='price' value={total}></Price>
      </div>
      <CheckoutBtn />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .total {
    display: flex;
    justify-content: space-between;
  }
`

export default CartSummaryMobile
