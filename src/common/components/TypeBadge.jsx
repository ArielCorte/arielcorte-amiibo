import React from 'react'
import styled from 'styled-components'

const TypeBadge = ({ type }) => {
  return <Badge type={type}>{type}</Badge>
}

const Badge = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  padding: 0.2rem 0.8rem;
  background-color: var(--${(props) => props.type.toLowerCase()}-color);
  color: var(--primary-color);
  align-self: flex-start;
  border-radius: 9999rem;
  display: inline;
`

export default TypeBadge
