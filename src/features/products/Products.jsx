import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import amebo from '../../api/amebo'
import Product from '../../common/components/Product'
import { getAllProducts } from './productsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const { list: products } = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <Wrapper>
      <div className='products-container'>
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              img={product.image}
              name={product.name}
              series={product.amiiboSeries}
              type={product.type}
              price='60'
              key={product.tail}
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
