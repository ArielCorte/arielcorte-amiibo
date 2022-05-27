import React from 'react'

const PlusIcon = ({ color = '#000000', size = '32' }) => {
  return (
    <svg
      viewBox='0 0 32 32'
      width={size}
      role='presentation'
      alt=''
      data-testid='PlusIcon'
      color='currentColor'
      size='24'>
      <path
        fill={color}
        fill-rule='evenodd'
        d='M32.04 12h-12V0h-8v12h-12v8h12v12h8V20h12v-8z'></path>
    </svg>
  )
}

export default PlusIcon
