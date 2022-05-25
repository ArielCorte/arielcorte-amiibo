import React from 'react'
import styled from 'styled-components'
import Quantity from './Quantity'
import TypeBadge from './TypeBadge'

const CartProduct = ({ name, series, type, price, img }) => {
  return (
    <Wrapper>
      <div className='data'>
        <div className='img-container'>
          <img src={img} alt={name} />
        </div>
        <div className='description'>
          <h3 className='name'>{name}</h3>
          <p className='series'>{series}</p>
          <TypeBadge type={type} />
        </div>
      </div>
      <div className='quantity-container'>
        <p className='quantity-label'>Quantity</p>
        <Quantity />
      </div>
      <div className='price-and-remove'>
        <div className='price'>${price}</div>
        <button className='remove'>Remove</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--subtle-color);

  .data {
    display: flex;
    justify-content: center;
  }

  .img-container {
    height: 5.3rem;
    width: 9.5rem;
    overflow: hidden;
    border: 0.1rem solid var(--subtle-color);
    border-radius: 0.3rem;
  }

  .img-container img {
    height: 100%;
    display: block;
    margin: auto;
  }

  .name {
    font-weight: 700;
  }

  .quantity-container {
    width: 7rem;
  }

  .quantity-label {
    font-size: 0.75rem;
  }

  .price-and-remove {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .price {
    font-weight: 700;
  }

  .remove {
    background-color: transparent;
    border: none;
    color: var(--highlight-color);
    font-weight: 700;
    font-size: 1rem;
    border-bottom: 0.2rem solid var(--highlight-color);
  }
`

export default CartProduct
