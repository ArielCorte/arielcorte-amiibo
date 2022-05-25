import React from 'react'
import styled from 'styled-components'
import MinusIcon from '../assets/icons/MinusIcon'
import PlusIcon from '../assets/icons/PlusIcon'

const Quantity = () => {
  return (
    <Wrapper>
      <button>
        <PlusIcon color='var(--secondary-color)' size='12' />
      </button>
      <div className='quantity'>1</div>
      <button>
        <MinusIcon color='var(--secondary-color)' size='12' />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid var(--subtle-color);
  border-radius: 0.3rem;
  overflow: hidden;

  .quantity {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 2;
    user-select: none;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  button:hover {
    background-color: var(--subtle-color);
  }
`

export default Quantity
