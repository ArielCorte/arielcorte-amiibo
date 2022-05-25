import React from 'react'

const MinusIcon = ({ color = '#000000', size = '32' }) => {
  return (
    <svg
      viewBox='0 0 32 32'
      width={size}
      role='presentation'
      alt=''
      data-testid='MinusIcon'
      color='currentColor'
      size='24'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        fill={color}
        d='M0 12h32v8H0z'></path>
    </svg>
  )
}

export default MinusIcon
