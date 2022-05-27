import React from 'react'
import styled from 'styled-components'
import TypeBadge from './TypeBadge'
import Price from './Price'
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
      <div className='content-wrapper'>
        <div className='header'>
          <h3 className='name'>{name}</h3>
          <p className='series'>{series}</p>
          <div className='badge-container'>
            <TypeBadge type={type} />
          </div>
        </div>
        <div className='bottom'>
          <Price value={price} className='price' />
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
        </div>
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
  width: 15.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid var(--subtle-color);
  border-radius: 0.3rem;
  padding: 1rem;

  :hover .img-container img {
    height: 105%;
  }

  .img-container {
    width: 100%;
    height: 14rem;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    margin: auto;
    transition: 150ms ease-in-out;
  }

  .content-wrapper {
    margin-top: 2rem;
    height: 8.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    font-weight: 700;
    font-size: 1.3rem;
  }

  .series {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-weight: 700;
    font-size: 1.3rem;
  }

  .addToCart {
    right: 0;
    bottom: 0;
    color: var(--highlight-color);
  }
  .addToCart svg {
    cursor: pointer;
  }
  .addToCart svg:hover {
    color: var(--highlight-color-active);
  }

  @media screen and (max-width: 460px) {
    .name {
      font-size: 1.5rem;
    }
    .series {
      font-size: 1rem;
    }
    .img-container {
      height: 16.5rem;
    }
  }
`

export default connect(null, mapDispatchToProps)(Product)
