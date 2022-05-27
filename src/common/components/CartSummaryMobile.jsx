import React from 'react'

const CartSummaryMobile = ({ total, items }) => {
  return (
    <div>
      <div className='total'>
        <p>Estimated total ({items} items)</p>
        <Price className='price' value={total}></Price>
      </div>
    </div>
  )
}

export default CartSummaryMobile
