import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  amount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM'){
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item: item})
  }
  const removeItemFromCartHandler = (item) =>{
    dispatchCartAction({type: 'REMOVE_ITEM', item: item})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider