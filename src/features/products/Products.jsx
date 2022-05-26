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
              price='60'
              id={product.head + product.tail}
              key={product.head + product.tail}
            />
          ))
        ) : (
          <em>Esperando Productos</em>
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
    justify-content: space-between;
    margin-top: 3rem;
  }
`

export default Products
