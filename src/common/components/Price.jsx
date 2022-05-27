import React from 'react'

const Price = ({ value, className }) => {
  return (
    <span className={className}>
      ${(Math.round(parseInt(value) * 100) / 100).toFixed(2)}
    </span>
  )
}

export default Price
