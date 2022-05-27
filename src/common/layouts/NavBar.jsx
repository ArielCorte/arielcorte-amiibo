import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BsFillCartFill } from 'react-icons/bs'

function NavBar() {
  return (
    <>
      <Wrapper>
        <Link to='/' className='logo'>
          amiiboStore
        </Link>
        <Link to='/cart' className='cart'>
          <BsFillCartFill size='2.5rem' />
        </Link>
      </Wrapper>
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
    font-size: 2.5rem;
    font-family: 'bauhaus-93', 'sans-serif';
  }

  .logo:hover {
    color: var(--subtle-color);
  }

  .logo:active {
    color: var(--secondary-color);
  }

  .cart:hover {
    color: var(--subtle-color);
  }

  .cart:active {
    color: var(--secondary-color);
  }

  @media screen and (max-width: 460px) {
    padding: 0.5rem 2rem;
    position: sticky;
    top: 0;

    .logo {
      font-size: 2rem;
    }

    .cart:hover {
      color: var(--primary-color);
    }
  }
`

export default NavBar
