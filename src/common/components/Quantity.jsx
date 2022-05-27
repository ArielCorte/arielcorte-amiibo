import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Quantity = ({ handleAddClick, handleSubClick, qty }) => {
  return (
    <Wrapper>
      <button onClick={handleAddClick}>
        <FaPlus size='12' />
      </button>
      <div className='quantity'>{qty}</div>
      <button onClick={handleSubClick}>
        <FaMinus size='12' />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid var(--subtle-color);
  border-radius: 0.3rem;
  overflow: hidden;
  height: 100%;

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
    color: var(--secondary-color);
  }

  button:hover {
    background-color: var(--subtle-color);
  }
`

export default Quantity
