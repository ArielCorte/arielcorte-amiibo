import React from 'react'
import styled from 'styled-components'
import TypeBadge from './TypeBadge'
import { BsCartPlusFill, BsCartCheckFill } from 'react-icons/bs'

import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../features/cart/cartSlice'
import { useSelector } from 'react-redux'

const Product = ({
  name,
  series,
  type,
  price,
  image,
  id,
  addToCart,
  removeFromCart,
}) => {
  const cartProducts = useSelector((state) => state.cart)

  const inCart = cartProducts.find((prod) => prod.id === id)

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
        onClick={() =>
          !inCart
            ? addToCart({ name, series, type, price, image, id })
            : removeFromCart(id)
        }>
        {inCart ? (
          <BsCartCheckFill size='2.5rem' />
        ) : (
          <BsCartPlusFill size='2.5rem' />
        )}
      </div>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (prod) => dispatch(addToCart(prod)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
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
    color: var(--highlight-color);
  }
  .addToCart svg {
    cursor: pointer;
  }
  .addToCart svg:hover {
    color: var(--highlight-color-active);
  }
`

export default connect(null, mapDispatchToProps)(Product)
