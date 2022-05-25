import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import CartIcon from '../assets/cart_white.svg'

function NavBar() {
  return (
    <>
      <Wrapper>
        <div className='logo'>Products</div>
        <div>
          <img src={CartIcon} alt='Cart Icon' />
        </div>
      </Wrapper>
      <Outlet />
    </>
  )
}

const Wrapper = styled.nav`
  background-color: var(--highlight-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  padding: 0.5rem 5rem;

  .logo {
    font-size: 2rem;
    font-weight: 700;
  }
`

export default NavBar
