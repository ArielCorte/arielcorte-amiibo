import React from 'react'
import styled from 'styled-components'
import CartIcon from '../assets/cart.svg'

const Product = ({ name, series, type, price, img }) => {
  return (
    <Card type={type}>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <h3 className='name'>{name}</h3>
      <p className='series'>{series}</p>
      <div className='type'>{type}</div>
      <span className='price'>${price}</span>
      <div className='addToCart'>
        <img src={CartIcon} alt='' />
      </div>
    </Card>
  )
}

const Card = styled.div`
  width: 245px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  border: 1px solid var(--secondary-color);
  padding: 1rem;

  .img-container {
    overflow: hidden;
    width: 100%;
    height: 264px;
  }

  .img-container img {
    height: 100%;
    display: block;
    margin: auto;
  }

  .name {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .type {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding: 0.2rem 0.8rem;
    background-color: var(--${(props) => props.type.toLowerCase()}-color);
    color: var(--primary-color);
    align-self: flex-start;
    border-radius: 9999rem;
  }

  .price {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .addToCart {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;
  }
`

export default Product
