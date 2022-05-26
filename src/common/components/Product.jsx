import React from 'react'
import styled from 'styled-components'
import CartIcon from '../assets/icons/CartIcon'
import TypeBadge from './TypeBadge'

import { connect } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'

const Product = ({ name, series, type, price, image, addToCart }) => {
  return (
    <Card>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <h3 className='name'>{name}</h3>
      <p className='series'>{series}</p>
      <TypeBadge type={type} />
      <span className='price'>${price}</span>
      <div
        className='addToCart'
        onClick={() => addToCart({ name, series, type, price, image })}>
        <CartIcon color='var(--highlight-color)' />
      </div>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
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

  .addToCart svg {
    cursor: pointer;
  }
`

export default connect(null, mapDispatchToProps)(Product)
