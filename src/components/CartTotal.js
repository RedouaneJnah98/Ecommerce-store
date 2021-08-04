import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "../context/context"

const CartTotal = () => {
  const { total_amount } = useGlobalContext()

  return (
    <Wrapper>
      <Totals>
        <h5>Subtotal :</h5>
        <h2>{Number(total_amount).toFixed(2)}$</h2>
      </Totals>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 300px;
  height: 150px;
  background: var(--card-clr);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const Totals = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h5 {
    color: var(--logo-clr);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  h2 {
    color: var(--navbar-clr);
  }
`

export default CartTotal
