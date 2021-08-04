import React from "react"
import styled from "styled-components"
import { GiShoppingBag } from "react-icons/gi"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/context"

const Header = () => {
  const { total_items } = useGlobalContext()

  return (
    <Wrapper>
      <HeaderWrapper className="center">
        <Link to="/">
          <h1 className="logo">
            Nouhaila<span>.store</span>
          </h1>
        </Link>
        <div className="bag">
          <Link to="/cart">
            <GiShoppingBag className="bag-icon" />
            <span className="bag-item">{total_items}</span>
          </Link>
        </div>
      </HeaderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--navbar-clr);
`

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;

  .logo {
    font-size: 1.2rem;
    font-family: "Otomanopee One", sans-serif;
    color: var(--card-clr);

    span {
      color: var(--logo-clr);
    }
  }

  .bag {
    position: relative;

    .bag-icon {
      font-size: 1.5rem;
      color: var(--logo-clr);
    }

    .bag-item {
      content: "";
      position: absolute;
      background: var(--card-clr);
      width: 20px;
      height: 20px;
      font-size: 0.75rem;
      border-radius: 50%;
      color: var(--white-clr);
      right: 2px;
      top: -18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default Header
