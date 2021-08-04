import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const url = 'https://fakestoreapi.com/products/'

const SingleProduct = () => {
  const { id } = useParams()
  // context
  const { loading, addToCart, amount } = useGlobalContext()

  // state
  const [data, setData] = useState([])

  const fetchSingleProduct = async () => {
    const response = await fetch(`${url}/${id}`)
    const data = await response.json()

    setData(data)
  }

  useEffect(() => {
    fetchSingleProduct()
    // eslint-disable-next-line
  }, [])

  const products = new Array(data)

  return (
    <Wrapper className="center container">
      {loading ? (
        <div className="loading"></div>
      ) : (
        products.map((item) => {
          const { id, title, image, price, category, description } = item

          return (
            <Product key={id}>
              <div>
                <h5 className="category">{category}</h5>
                <h3 className="title">{title}</h3>
                <img src={image} alt={title} className="product-img" />
              </div>
              <div>
                <p className="desc">{description}</p>
                <h3 className="price">{price}$</h3>
                <div className="btn-container">
                  <Link
                    to="/cart"
                    className="btn"
                    onClick={() => addToCart(products, amount)}
                  >
                    add to cart
                  </Link>
                </div>
              </div>
            </Product>
          )
        })
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Product = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;

  .product-img {
    max-width: 400px;
    width: 100%;
    margin-top: 2rem;
  }

  .price {
    color: var(--logo-clr);
    font-size: 1.5rem;
  }

  .desc {
    line-height: 1.8;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .title {
    color: var(--logo-clr);
    margin: 1rem 0;
  }

  .category {
    font-size: 0.8rem;
    background: var(--card-clr);
    color: var(--main-clr);
    width: 120px;
    height: 35px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .btn-container {
    margin-top: 3rem;

    .btn {
      background: var(--logo-clr);
      padding: 0.8rem 3rem;
      border-radius: 6px;
      text-transform: capitalize;
      font-size: 1rem;
      color: var(--main-clr);
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`

export default SingleProduct
