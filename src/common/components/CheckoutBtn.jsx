import React from 'react'
import styled from 'styled-components'
import { MdNavigateNext } from 'react-icons/md'

const CheckoutBtn = ({ onClick }) => {
  return (
    <Btn onClick={() => onClick()}>
      <MdNavigateNext size='50' /> Checkout
    </Btn>
  )
}

const Btn = styled.button`
  background-color: var(--highlight-color);
  color: var(--primary-color);
  border: none;
  height: 3rem;
  border-radius: 0.3rem;
  font-weight: 700;
  font-size: 1.125rem;
  padding-right: 2rem;
  padding-left: 1rem;
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: var(--highlight-color-active);
  }
`

export default CheckoutBtn
