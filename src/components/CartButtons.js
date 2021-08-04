import React from 'react'
import styled from 'styled-components'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const CartButtons = ({ amount, decrease, increase }) => {
  return (
    <Wrapper>
      <button type="button" onClick={decrease}>
        <BiMinus className="icon" />
      </button>
      <p>{amount}</p>
      <button type="button" onClick={increase}>
        <BsPlus className="icon" />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;

  p {
    font-size: 1.2rem;
  }

  .icon {
    font-size: 1.2rem;
    cursor: pointer;
  }
`

export default CartButtons
