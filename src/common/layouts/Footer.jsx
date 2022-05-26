import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <Wrapper>Footer</Wrapper>
}

const Wrapper = styled.div`
  background-color: var(--highlight-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--subtle-color);
  padding: 0.5rem 5rem;
`

export default Footer
