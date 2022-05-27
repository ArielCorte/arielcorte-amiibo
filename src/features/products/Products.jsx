import React, { useEffect } from 'react'
import styled from 'styled-components'
import Product from '../../common/components/Product'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './productsSlice'

const Products = () => {
  const { list: products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const getPrice = (type) => {
    switch (type.toLowerCase()) {
      case 'figure':
        return 60
      case 'band':
        return 40
      case 'card':
        return 20
      default:
        return 10
    }
  }

  return (
    <Wrapper>
      <div className='products-container'>
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              image={product.image}
              name={product.name}
              series={product.amiiboSeries}
              type={product.type}
              price={getPrice(product.type)}
              id={product.head + product.tail}
              key={product.head + product.tail}
            />
          ))
        ) : (
          <em>Waiting products</em>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;

  .products-container {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    margin: 3rem 0;
    gap: 1rem;
    justify-content: center;
  }
`

export default Products
