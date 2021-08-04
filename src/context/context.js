import React, { useState, useEffect, useContext, useReducer } from "react"
import reducer from "./reducer/reducer"

// Actions
import {
  GET_PRODUCTS,
  IS_LOADING,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTAL,
} from "../actions"

// API URL
const url = "https://fakestoreapi.com/products"

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart")
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"))
  } else {
    return []
  }
}

const AppContext = React.createContext()

const initialState = {
  loading: false,
  products: [],
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [amount, setAmount] = useState(1)

  const ProductsData = async () => {
    dispatch({ type: IS_LOADING })
    const response = await fetch(url)
    const data = await response.json()
    dispatch({ type: GET_PRODUCTS, payload: data })
  }

  const addToCart = (product, amount) => {
    return dispatch({ type: ADD_TO_CART, payload: { product, amount } })
  }
  const removeItem = (id) => {
    return dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  const toggleAmount = (id, value) => {
    return dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }

  useEffect(() => {
    ProductsData()
  }, [])

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTAL })
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        amount,
        setAmount,
        removeItem,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
