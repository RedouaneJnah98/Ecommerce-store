import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

const ProductCard = ({ products }) => {
  const { loading } = useGlobalContext()

  return (
    <Wrapper>
      {loading ? (
        <div className="loading"></div>
      ) : (
        products.map((item) => {
          const { id, image, title, price } = item

          return (
            <Product key={id}>
              <img src={image} alt={title} />
              <div className="infos">
                <h4>{price}$</h4>
                <h1>{title}</h1>
                <div className="link">
                  <Link to={`/product/${id}`} className="details-link">
                    See Details
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

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`

const Product = styled.div`
  max-width: 300px;
  width: 100%;
  background: #fff;
  padding: 0.8rem 2rem;

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }

  .infos {
    margin-top: 2rem;

    h4 {
      margin: 0.5rem 0;
      font-size: 1.4rem;
      color: var(--btn-clr);
    }

    h1 {
      color: var(--card-clr);
      font-size: 1rem;
    }
  }

  .link {
    margin-top: 2rem;

    .details-link {
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: 1.5px;
      color: var(--btn-clr);
    }
  }
`

export default ProductCard
