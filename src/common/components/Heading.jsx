import React from 'react'
import styled from 'styled-components'

const Heading = ({ children }) => {
  return (
    <H1>
      <span className='text'>{children}</span>
    </H1>
  )
}

const H1 = styled.h1`
  margin-top: 1rem;
  font-weight: 700;
  padding: 0 5rem;
  font-size: 1.5rem;

  .text {
    border-bottom: 0.125rem solid var(--secondary-color);
    font-weight: inherit;
  }

  @media screen and (max-width: 460px) {
    text-align: center;
    font-size: 1.5rem;
  }
`

export default Heading
