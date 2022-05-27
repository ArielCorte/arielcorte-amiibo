import React from 'react'

const NextIcon = ({ color = '#000000', size = '32' }) => {
  return (
    <svg
      viewBox='0 0 32 32'
      width={size}
      role='presentation'
      alt=''
      data-testid='ChevronRightIcon'
      color='currentColor'
      size='24'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        fill={color}
        d='M5.3 4.3L9.8 0l16.9 16L9.8 32l-4.5-4.3L17.7 16z'></path>
    </svg>
  )
}

export default NextIcon
