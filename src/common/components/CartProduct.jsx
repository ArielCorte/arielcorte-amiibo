import React from 'react'
import styled from 'styled-components'
import Quantity from './Quantity'
import TypeBadge from './TypeBadge'

import { connect } from 'react-redux'
import { removeFromCart, addQty, subQty } from '../../features/cart/cartSlice'
import Price from './Price'

const CartProduct = ({
  name,
  series,
  type,
  price,
  image,
  id,
  qty,
  removeFromCart,
  addQty,
  subQty,
}) => {
  function handleAddClick() {
    addQty(id)
  }

  function handleSubClick() {
    subQty(id)
  }

  return (
    <Wrapper>
      <div className='data'>
        <div className='img-container'>
          <img src={image} alt={name} />
        </div>
        <div className='description'>
          <h3 className='name'>{name}</h3>
          <p className='series'>{series}</p>
          <TypeBadge type={type} />
        </div>
      </div>
      <div className='actions'>
        <div className='quantity-wrapper'>
          <p className='quantity-label'>Quantity</p>
          <div className='quantity-container'>
            <Quantity
              handleAddClick={handleAddClick}
              handleSubClick={handleSubClick}
              qty={qty}
            />
          </div>
        </div>
        <div className='price-and-remove'>
          <Price className='price' value={price} />
          <button className='remove' onClick={() => removeFromCart(id)}>
            Remove
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addQty: (id) => dispatch(addQty(id)),
    subQty: (id) => dispatch(subQty(id)),
  }
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
    gap: 1rem;
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
    width: 100%;
    object-fit: contain;
    display: block;
    margin: auto;
  }

  .description {
    padding: 0.5rem 0;
    flex-shrink: 9999;
  }

  .name {
    font-weight: 700;
    font-size: 1.17rem;
    margin-bottom: 0.5rem;
  }

  .actions {
    display: flex;
    gap: 2rem;
  }

  .quantity-wrapper {
    width: 7rem;
    padding: 0.5rem 0;
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
    font-size: 1.17rem;
  }

  .remove {
    background-color: transparent;
    border: none;
    color: var(--highlight-color);
    font-weight: 700;
    font-size: 1rem;
    border-bottom: 0.125rem solid var(--highlight-color);
    cursor: pointer;
  }

  .remove:hover {
    color: var(--highlight-color-active);
    border-color: var(--highlight-color-active);
  }

  @media screen and (max-width: 460px) {
    flex-direction: column;
    gap: 0.5rem;

    .data {
      width: 100%;
      gap: none;
      justify-content: space-between;
    }

    .description {
      flex-grow: 1;
    }

    .quantity-container {
      width: 9.5rem;
      height: 3.3rem;
    }

    .quantity-label {
      display: none;
    }

    .actions {
      width: 100%;
      gap: none;
      justify-content: space-between;
    }

    .price-and-remove {
      justify-content: space-between;
    }
  }
`

export default connect(null, mapDispatchToProps)(CartProduct)
