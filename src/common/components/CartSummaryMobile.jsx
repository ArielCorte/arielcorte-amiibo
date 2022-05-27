import React from 'react'
import styled from 'styled-components'
import CheckoutBtn from './CheckoutBtn'
import Price from './Price'
import { resetCart } from '../../features/cart/cartSlice'
import { connect } from 'react-redux'

const CartSummaryMobile = ({ total, nItems, resetCart }) => {
  return (
    <Wrapper>
      <div className='total'>
        <p className='label'>Estimated total ({nItems} items)</p>
        <Price className='price' value={total}></Price>
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
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem 0;

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .label,
  .price {
    font-weight: 700;
    font-size: 1.1rem;
  }
`

export default connect(null, mapDispatchToProps)(CartSummaryMobile)
