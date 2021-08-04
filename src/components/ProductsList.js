import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { useGlobalContext } from '../context/context'

const ProductsList = () => {
  const { products } = useGlobalContext()

  return (
    <Wrapper className="center">
      <ProductCard products={products} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ProductsList
