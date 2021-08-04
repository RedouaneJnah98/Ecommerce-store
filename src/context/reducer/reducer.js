import {
  GET_PRODUCTS,
  IS_LOADING,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTAL,
} from "../../actions"

const reducer = (state, action) => {
  if (action.type === IS_LOADING) {
    return { ...state, loading: true }
  }
  if (action.type === GET_PRODUCTS) {
    return { ...state, products: action.payload, loading: false }
  }
  if (action.type === ADD_TO_CART) {
    const { product, amount } = action.payload
    const currentProduct = product[0]
    const exist = state.cart.find((item) => item.id === currentProduct.id)

    if (exist) {
      const tempItem = state.cart.map((item) => {
        if (item.id === currentProduct.id) {
          return { ...item, amount: (item.amount += 1) }
        } else {
          return item
        }
      })
      return { ...state, cart: tempItem }
    } else {
      const newItem = {
        title: currentProduct.title,
        category: currentProduct.category,
        id: currentProduct.id,
        image: currentProduct.image,
        price: currentProduct.price,
        amount,
      }

      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          return { ...item, amount: item.amount + 1 }
        }
        if (value === "dec") {
          let newAmount = item.amount - 1

          if (newAmount < 1) {
            newAmount = 1
          }

          return { ...item, amount: newAmount }
        }
      }
      return item
    })

    return { ...state, cart: tempCart }
  }
  if (action.type === COUNT_CART_TOTAL) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem
        total.total_items += amount
        total.total_amount += price * amount

        return total
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    )

    return { ...state, total_items, total_amount }
  }

  return state
}

export default reducer
