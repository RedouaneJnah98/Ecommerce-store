import React from "react"
import styled from "styled-components"
import CartButtons from "../components/CartButtons"
import CartTotal from "../components/CartTotal"
import { useGlobalContext } from "../context/context"
import { IoMdClose } from "react-icons/io"

const Cart = () => {
  const { cart, removeItem, toggleAmount } = useGlobalContext()

  const increase = (id) => {
    toggleAmount(id, "inc")
  }

  const decrease = (id) => {
    toggleAmount(id, "dec")
  }

  if (cart.length === 0) {
    return (
      <Wrapper className="center">
        <div className="empty-cart">
          <h1>Ooopss! Your cart is empty 😲</h1>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper className="center">
      <h2>Your Shopping Cart </h2>

      <article>
        {cart.map((item) => {
          const { image, amount, id, title, category, price } = item

          return (
            <Container key={id}>
              <img src={image} alt={title} className="cart-img" />
              <div className="infos">
                <h4>{title}</h4>
                <p>{category}</p>
              </div>
              <h4>{price}$</h4>
              <div className="amount">
                <CartButtons
                  increase={() => increase(id)}
                  decrease={() => decrease(id)}
                  amount={amount}
                />
              </div>
              <h5>total</h5>
              <IoMdClose className="close-btn" onClick={() => removeItem(id)} />
            </Container>
          )
        })}
      </article>
      <CartTotal />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;

  h2 {
    text-align: center;
  }

  .empty-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr 1fr 1fr 1fr auto;
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  margin: 4rem 0;

  .cart-img {
    width: 100px;
    object-fit: contain;
  }

  .infos {
    h4 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--card-clr);
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  .close-btn {
    font-size: 1.5rem;
    cursor: pointer;
    color: red;
  }
`

export default Cart
